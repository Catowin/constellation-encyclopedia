"use client";

import { useState, useEffect, use, useCallback, useRef, CSSProperties } from "react";
import { useRouter } from "next/navigation";

import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import { constellations, t, type Lang, type ConstellationData } from "@/data/constellations";

type Tab = "desc" | "legend" | "find";
type Dir = "left" | "right";

function sr(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}
const r4 = (n: number) => Math.round(n * 10000) / 10000;

const BACKGROUND_STARS = Array.from({ length: 180 }, (_, i) => ({
  id: i,
  top:      `${r4(sr(i * 3)     * 100)}%`,
  left:     `${r4(sr(i * 3 + 1) * 100)}%`,
  size:      r4(sr(i * 3 + 2) * 1.8 + 0.4),
  duration:  r4(sr(i * 7)  * 4 + 2),
  delay:     r4(sr(i * 11) * 5),
  opacity:   r4(sr(i * 17) * 0.5 + 0.35),
}));

const starPoints = (cx: number, cy: number, r: number) => {
  const pts = [];
  for (let i = 0; i < 4; i++) {
    const outer = (Math.PI * 2 * i) / 4 - Math.PI / 4;
    const inner = outer + Math.PI / 4;
    pts.push(`${cx + r * Math.cos(outer)},${cy + r * Math.sin(outer)}`);
    pts.push(`${cx + r * 0.18 * Math.cos(inner)},${cy + r * 0.18 * Math.sin(inner)}`);
  }
  return pts.join(" ");
};

// ─── CSS-анімовані компоненти (без залежності від версії framer-motion) ───────

/** Fade + slide для перемикання сузір'я */
function SlideTransition({
  id,
  dir,
  children,
}: {
  id: string;
  dir: Dir;
  children: React.ReactNode;
}) {
  const [visible, setVisible] = useState(false);
  const [key, setKey] = useState(id);
  const [animClass, setAnimClass] = useState<"enter" | "show" | "exit">("enter");
  const pendingRef = useRef<{ id: string; dir: Dir } | null>(null);

  useEffect(() => {
    if (id === key) {
      // перший рендер
      setAnimClass("enter");
      requestAnimationFrame(() => requestAnimationFrame(() => setAnimClass("show")));
      setVisible(true);
      return;
    }
    // exit → swap → enter
    setAnimClass("exit");
    const t = setTimeout(() => {
      setKey(id);
      setAnimClass("enter");
      requestAnimationFrame(() => requestAnimationFrame(() => setAnimClass("show")));
    }, 480);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  void visible;
  void pendingRef;

  const enterX = dir === "right" ? 60 : -60;
  const exitX  = dir === "right" ? -60 : 60;

  const style: CSSProperties = {
    position: "absolute",
    inset: 0,
    transition: "opacity 0.48s ease, transform 0.48s cubic-bezier(0.25,0.1,0.25,1)",
    opacity:   animClass === "show" ? 1 : 0,
    transform: animClass === "show"
      ? "translateX(0)"
      : animClass === "enter"
        ? `translateX(${enterX}px)`
        : `translateX(${exitX}px)`,
  };

  return <div style={style}>{children}</div>;
}

/** Fade для назви */
function FadeTransition({ id, children }: { id: string; children: React.ReactNode }) {
  const [animClass, setAnimClass] = useState<"enter" | "show" | "exit">("enter");
  const [key, setKey] = useState(id);
  const [content, setContent] = useState(children);

  useEffect(() => {
    if (id === key) {
      setAnimClass("enter");
      requestAnimationFrame(() => requestAnimationFrame(() => setAnimClass("show")));
      return;
    }
    setAnimClass("exit");
    const t = setTimeout(() => {
      setKey(id);
      setContent(children);
      setAnimClass("enter");
      requestAnimationFrame(() => requestAnimationFrame(() => setAnimClass("show")));
    }, 340);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const style: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
    transition: "opacity 0.34s ease, transform 0.34s ease",
    opacity:   animClass === "show" ? 1 : 0,
    transform: animClass === "show" ? "translateY(0)" : animClass === "enter" ? "translateY(16px)" : "translateY(-10px)",
  };

  return <div style={style}>{content}</div>;
}

/** Fade для вмісту табів */
function TabFade({ id, children }: { id: string; children: React.ReactNode }) {
  const [animClass, setAnimClass] = useState<"enter" | "show" | "exit">("enter");
  const [key, setKey] = useState(id);
  const [content, setContent] = useState(children);

  useEffect(() => {
    if (id === key) {
      setAnimClass("enter");
      requestAnimationFrame(() => requestAnimationFrame(() => setAnimClass("show")));
      return;
    }
    setAnimClass("exit");
    const t = setTimeout(() => {
      setKey(id);
      setContent(children);
      setAnimClass("enter");
      requestAnimationFrame(() => requestAnimationFrame(() => setAnimClass("show")));
    }, 240);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const style: CSSProperties = {
    transition: "opacity 0.24s ease, transform 0.24s ease",
    opacity:   animClass === "show" ? 1 : 0,
    transform: animClass === "show" ? "translateY(0)" : animClass === "enter" ? "translateY(6px)" : "translateY(-4px)",
  };

  return <div style={style}>{content}</div>;
}

// ─── SVG сузір'я ──────────────────────────────────────────────────────────────

function ConstellationSVG({
  current,
  hoveredStar,
  onStarEnter,
  onStarLeave,
}: {
  current: ConstellationData;
  hoveredStar: string | null;
  onStarEnter: (name: string) => void;
  onStarLeave: () => void;
}) {
  const [vx, vy, vw, vh] = current.viewBox!;
  return (
    <svg viewBox={`${vx} ${vy} ${vw} ${vh}`} preserveAspectRatio="xMidYMid meet" className="absolute inset-0 w-full h-full">
      <defs>
        <radialGradient id="halo"><stop offset="0%" stopColor="rgba(255,220,100,0.6)" /><stop offset="100%" stopColor="rgba(255,220,100,0)" /></radialGradient>
        <filter id="glow"><feGaussianBlur stdDeviation="0.3" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      {current.lines?.map(([a, b], idx) => {
        const sa = current.stars[a], sb = current.stars[b];
        if (!sa || !sb) return null;
        return <line key={idx} x1={parseFloat(sa.left)} y1={parseFloat(sa.top)} x2={parseFloat(sb.left)} y2={parseFloat(sb.top)} stroke="rgba(165,180,252,0.25)" strokeWidth="0.35" strokeDasharray="1.2 2" />;
      })}
      {current.stars.map((star, idx) => {
        const cx = parseFloat(star.left), cy = parseFloat(star.top), r = star.size * 0.09;
        const isHovered = hoveredStar === star.name;
        return (
          <g key={idx}>
            <circle cx={cx} cy={cy} r={r * 2.5} fill="url(#halo)" opacity={0.7} style={{ pointerEvents: "none" }} />
            <polygon points={starPoints(cx, cy, r * 1.4)} fill="rgba(255,248,220,1)" opacity={0.95} filter="url(#glow)" className="star-twinkle"
              style={{ ["--dur" as string]: `${2 + (idx % 4) * 0.7}s`, ["--delay" as string]: `${(idx * 0.4) % 3}s`, pointerEvents: "none" }} />
            <circle cx={cx} cy={cy} r={3} fill="transparent" onMouseEnter={() => onStarEnter(star.name)} onMouseLeave={onStarLeave} style={{ cursor: "none" }} />
            {isHovered && (
              <text x={cx} y={cy + r + 3.5} textAnchor="middle" fontSize={2} letterSpacing={0.2} fill="rgba(253,230,138,1)"
                fontFamily="'Cormorant SC', Georgia, serif"
                style={{ pointerEvents: "none", filter: "drop-shadow(0 0 2px rgba(0,0,0,1)) drop-shadow(0 0 4px rgba(0,0,0,1)) drop-shadow(0 0 8px rgba(201,168,76,0.8))" }}>
                {star.name}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

// ─── Головний компонент ───────────────────────────────────────────────────────

export default function ConstellationPageInner({
  params,
  defaultLang = "en",
}: {
  params: Promise<{ id: string }>;
  defaultLang?: Lang;
}) {
  const resolvedParams = use(params);
  const router = useRouter();
  const dirRef = useRef<Dir>("right");

  const currentIndex = constellations.findIndex((c) => c.id === resolvedParams.id);
  const current = constellations[currentIndex >= 0 ? currentIndex : 0];
  const urlPrefix = defaultLang === "uk" ? "/ua/constellation" : "/constellation";

  const [activeTab, setActiveTab] = useState<Tab>("desc");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [hoveredStar, setHoveredStar] = useState<string | null>(null);
  const [navSearch, setNavSearch] = useState("");
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [nightMode, setNightMode] = useState(false);

  const handleSetLang = (l: Lang) => {
    router.push(`${l === "uk" ? "/ua/constellation" : "/constellation"}/${resolvedParams.id}`);
  };

  const goNext = useCallback(() => {
    dirRef.current = "right";
    router.push(`${urlPrefix}/${constellations[(currentIndex + 1) % constellations.length].id}`);
  }, [currentIndex, router, urlPrefix]);

  const goPrev = useCallback(() => {
    dirRef.current = "left";
    router.push(`${urlPrefix}/${constellations[(currentIndex - 1 + constellations.length) % constellations.length].id}`);
  }, [currentIndex, router, urlPrefix]);

  useEffect(() => {
    let lastScrollTime = 0;
    const handleWheel = (e: WheelEvent) => {
      if (isModalOpen || isNavOpen) return;
      const now = Date.now();
      if (now - lastScrollTime < 1200) return;
      if (Math.abs(e.deltaY) < 30 && Math.abs(e.deltaX) < 30) return;
      lastScrollTime = now;
      if (e.deltaY > 0 || e.deltaX > 0) goNext(); else goPrev();
    };
    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [goNext, goPrev, isModalOpen, isNavOpen]);

  useEffect(() => {
    const onStart = (e: TouchEvent) => setTouchStart(e.touches[0].clientX);
    const onEnd   = (e: TouchEvent) => {
      if (touchStart === null || isModalOpen || isNavOpen) return;
      const diff = touchStart - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 60) diff > 0 ? goNext() : goPrev();
      setTouchStart(null);
    };
    window.addEventListener("touchstart", onStart);
    window.addEventListener("touchend", onEnd);
    return () => { window.removeEventListener("touchstart", onStart); window.removeEventListener("touchend", onEnd); };
  }, [touchStart, goNext, goPrev, isModalOpen, isNavOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (isModalOpen || isNavOpen) { if (e.key === "Escape") { setIsModalOpen(false); setIsNavOpen(false); } return; }
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goNext();
      if (e.key === "ArrowLeft"  || e.key === "ArrowUp")   goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev, isModalOpen, isNavOpen]);

  const handleStarEnter = (name: string) => { setHoveredStar(name); window.dispatchEvent(new Event("star-enter")); };
  const handleStarLeave = () => { setHoveredStar(null); window.dispatchEvent(new Event("star-leave")); };

  useEffect(() => { setActiveTab("desc"); }, [current.id]);

  const filteredConstellations = constellations.filter((c) =>
    t(c.name, defaultLang).toLowerCase().includes(navSearch.toLowerCase())
  );

  if (!current) return null;

  const L = {
    uk: { desc: "Опис", legend: "Легенда", find: "Як знайти", more: "натисни, щоб дізнатись більше", scroll: "скролл або стрілки", search: "Пошук сузір'я...", notFound: "Нічого не знайдено", encycl: "Енциклопедія", constell: "Constellation" },
    en: { desc: "Description", legend: "Legend", find: "How to find", more: "tap to learn more", scroll: "scroll or arrow keys", search: "Search...", notFound: "Nothing found", encycl: "Encyclopedia", constell: "Constellation" },
  }[defaultLang];

  const tabLabels: Record<Tab, string> = { desc: L.desc, legend: L.legend, find: L.find };
  const tabContent: Record<Tab, string> = {
    desc:   t(current.description, defaultLang),
    legend: t(current.legend, defaultLang),
    find:   t(current.howToFind, defaultLang),
  };

  return (
    <main className="relative w-screen h-screen overflow-hidden" style={{ background: "#0a0e1a" }}>

      {/* ШАР 1 — Фонові зірки (CSS keyframes замість motion.div animate) */}
      <div className="absolute inset-0 z-0">
        {BACKGROUND_STARS.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white star-bg-twinkle"
            style={{
              top: star.top, left: star.left,
              width: star.size, height: star.size,
              ["--min-op" as string]: star.opacity * 0.4,
              ["--max-op" as string]: star.opacity,
              ["--dur" as string]: `${star.duration}s`,
              ["--delay" as string]: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      {/* ШАР 2 — Туманність */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="block md:hidden absolute rounded-full" style={{ width: "260vw", height: "260vw", top: "50%", left: "50%", transform: "translate(-50%, -50%)", opacity: 0.6, filter: "blur(260px)", background: "radial-gradient(circle, rgba(80,90,220,0.9) 0%, rgba(120,80,200,0.5) 45%, transparent 70%)" }} />
        <div className="hidden md:block absolute rounded-full" style={{ width: "70vw", height: "70vw", top: "50%", left: "50%", transform: "translate(-50%, -50%)", opacity: 0.25, filter: "blur(140px)", background: "radial-gradient(circle, rgba(80,90,220,0.7) 0%, rgba(120,80,200,0.35) 45%, transparent 70%)" }} />
      </div>

      {/* ШАР 3 — Зірки сузір'я */}
      <div className="absolute inset-0 z-10">
        <SlideTransition id={current.id} dir={dirRef.current}>
          {current.viewBox ? (
            <ConstellationSVG current={current} hoveredStar={hoveredStar} onStarEnter={handleStarEnter} onStarLeave={handleStarLeave} />
          ) : (
            <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" className="absolute inset-0 w-full h-full">
              <defs>
                <radialGradient id="halo2"><stop offset="0%" stopColor="rgba(255,220,100,0.6)" /><stop offset="100%" stopColor="rgba(255,220,100,0)" /></radialGradient>
                <filter id="glow2"><feGaussianBlur stdDeviation="0.4" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
              </defs>
              {current.lines?.map(([a, b], idx) => {
                const sa = current.stars[a], sb = current.stars[b];
                if (!sa || !sb) return null;
                return <line key={idx} x1={parseFloat(sa.left)} y1={parseFloat(sa.top)} x2={parseFloat(sb.left)} y2={parseFloat(sb.top)} stroke="rgba(165,180,252,0.22)" strokeWidth="0.4" strokeDasharray="1.5 2.5" />;
              })}
              {current.stars.map((star, idx) => {
                const cx = parseFloat(star.left), cy = parseFloat(star.top), r = star.size * 0.14;
                return (
                  <g key={idx}>
                    <circle cx={cx} cy={cy} r={r * 1.8} fill="url(#halo2)" opacity={0.7} style={{ pointerEvents: "none" }} />
                    <polygon points={starPoints(cx, cy, r * 1.2)} fill="rgba(255,248,220,1)" opacity={0.95} filter="url(#glow2)" className="star-twinkle"
                      style={{ ["--dur" as string]: `${2 + (idx % 4) * 0.7}s`, ["--delay" as string]: `${(idx * 0.4) % 3}s`, pointerEvents: "none" }} />
                    <circle cx={cx} cy={cy} r={2.5} fill="transparent" onMouseEnter={() => handleStarEnter(star.name)} onMouseLeave={handleStarLeave} style={{ cursor: "none" }} />
                    {hoveredStar === star.name && (
                      <text x={cx} y={cy - r - 1.5} textAnchor="middle" fontSize={1.8} letterSpacing={0.3} fill="rgba(253,230,138,1)"
                        fontFamily="'Cormorant SC', Georgia, serif"
                        style={{ pointerEvents: "none", filter: "drop-shadow(0 0 1px rgba(0,0,0,1)) drop-shadow(0 0 4px rgba(201,168,76,1)) drop-shadow(0 0 8px rgba(201,168,76,0.6))" }}>
                        {star.name}
                      </text>
                    )}
                  </g>
                );
              })}
            </svg>
          )}
        </SlideTransition>
      </div>

      {/* ШАР 4 — Назва сузір'я */}
      <div className="absolute inset-x-0 bottom-10 z-20 flex flex-col items-center gap-2">
        <FadeTransition id={current.id}>
          <button onClick={() => setIsModalOpen(true)} className="group flex flex-col items-center gap-1 cursor-none focus:outline-none">
            <span className="text-[10px] tracking-[0.4em] uppercase text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ fontFamily: "'Cormorant SC', Georgia, serif" }}>
              {currentIndex + 1} / {constellations.length}
            </span>
            <h1 className="constellation-name" style={{ fontSize: "clamp(22px, 5vw, 26px)" }}>
              {t(current.name, defaultLang)}
            </h1>
            <span className="text-[10px] tracking-[0.3em] text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ fontFamily: "'Cormorant SC', Georgia, serif" }}>
              {L.more}
            </span>
          </button>
        </FadeTransition>
        <div className="fade-in-delayed flex items-center gap-3 mt-1">
          <div className="h-px w-8" style={{ background: "rgba(201,168,76,0.2)" }} />
          <span style={{ fontSize: 9, letterSpacing: "0.3em", color: "rgba(201,168,76,0.3)", fontFamily: "'Cormorant SC', Georgia, serif" }}>{L.scroll}</span>
          <div className="h-px w-8" style={{ background: "rgba(201,168,76,0.2)" }} />
        </div>
      </div>

      {/* ШАР 5 — Стрілки */}
      <div className="absolute inset-y-0 left-4 z-20 flex items-center">
        <button onClick={goPrev} className="p-4 text-slate-500 hover:text-slate-300 transition-colors cursor-none focus:outline-none group">
          <ChevronLeft size={20} className="group-hover:scale-110 transition-transform" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-14 z-20 flex items-center">
        <button onClick={goNext} className="p-4 text-slate-500 hover:text-slate-300 transition-colors cursor-none focus:outline-none group">
          <ChevronRight size={20} className="group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* ШАР 6 — Кнопка меню */}
      <button onClick={() => setIsNavOpen(true)}
        className="absolute top-5 right-5 z-30 p-2.5 bg-slate-900/50 border border-slate-800/60 rounded-full hover:bg-slate-800/80 transition-all duration-200 cursor-none focus:outline-none hover:border-slate-700">
        <Menu size={16} className="text-slate-400" />
      </button>

      {/* Кнопка нічного режиму */}
      <button onClick={() => setNightMode(v => !v)}
        className="md:hidden absolute top-5 left-5 z-30 p-2.5 rounded-full transition-all duration-300 focus:outline-none"
        style={{ background: nightMode ? "rgba(180,0,0,0.25)" : "rgba(15,10,20,0.5)", border: `1px solid ${nightMode ? "rgba(220,0,0,0.4)" : "rgba(255,255,255,0.1)"}` }}>
        <span style={{ fontSize: 14 }}>🔴</span>
      </button>

      {/* ШАР 7 — Навігаційна панель (framer-motion тільки для slide панелі) */}
      {/* Backdrop — проста CSS transition */}
      <div
        className="fixed inset-0 z-40 backdrop-blur-sm"
        style={{
          background: "rgba(0,0,0,0.4)",
          opacity: isNavOpen ? 1 : 0,
          pointerEvents: isNavOpen ? "auto" : "none",
          transition: "opacity 0.18s ease",
        }}
        onClick={() => setIsNavOpen(false)}
      />
      {/* Панель — CSS transform */}
      <div
        className="fixed top-0 right-0 h-full z-50 flex flex-col"
        style={{
          width: 288,
          background: "linear-gradient(180deg, rgba(6,8,14,0.99) 0%, rgba(8,11,18,0.99) 100%)",
          borderLeft: "1px solid rgba(201,168,76,0.18)",
          transform: isNavOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.18s ease",
        }}
      >
        <div className="flex justify-between items-center p-5" style={{ borderBottom: "1px solid rgba(201,168,76,0.12)" }}>
          <div>
            <p style={{ fontSize: 10, letterSpacing: "0.25em", color: "rgba(201,168,76,0.6)", fontFamily: "'Cormorant SC', Georgia, serif" }}>{L.encycl}</p>
            <p style={{ fontSize: 22, fontWeight: 300, color: "rgba(245,234,212,0.7)", fontFamily: "'Cormorant Garamond', Georgia, serif", marginTop: 4 }}>88 сузір&apos;їв</p>
          </div>
          <button onClick={() => setIsNavOpen(false)} className="cursor-none focus:outline-none" style={{ color: "rgba(201,168,76,0.5)", opacity: 0.6 }}>
            <X size={16} />
          </button>
        </div>
        <div className="px-4 py-3" style={{ borderBottom: "1px solid rgba(201,168,76,0.08)" }}>
          <input type="text" placeholder={L.search} value={navSearch} onChange={(e) => setNavSearch(e.target.value)}
            style={{ width: "100%", background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: 2, padding: "8px 12px", fontSize: 12, letterSpacing: "0.1em", color: "rgba(245,234,212,0.8)", outline: "none", fontFamily: "'Cormorant SC', Georgia, serif", cursor: "text" }} />
        </div>
        <div className="flex-1 overflow-y-auto py-2" style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(201,168,76,0.2) transparent" }}>
          {filteredConstellations.length === 0 ? (
            <p className="text-center py-8" style={{ fontSize: 12, color: "rgba(201,168,76,0.3)", fontFamily: "'Cormorant SC', Georgia, serif" }}>{L.notFound}</p>
          ) : (
            filteredConstellations.map((c) => (
              <button key={c.id} onClick={() => { router.push(`${urlPrefix}/${c.id}`); setIsNavOpen(false); setNavSearch(""); }}
                className={`nav-btn focus:outline-none ${c.id === current.id ? "nav-active" : ""}`}>
                {c.id === current.id && <span style={{ fontSize: 8, color: "rgba(201,168,76,0.8)" }}>✦</span>}
                <span>{t(c.name, defaultLang)}</span>
              </button>
            ))
          )}
        </div>
        <div style={{ borderTop: "1px solid rgba(201,168,76,0.12)", display: "flex", justifyContent: "center", gap: 4, padding: "12px 0" }}>
          {(["uk", "en"] as Lang[]).map((l) => (
            <button key={l} onClick={() => handleSetLang(l)} className="focus:outline-none"
              style={{ fontFamily: "'Cormorant SC', Georgia, serif", fontSize: 11, letterSpacing: "0.18em", padding: "4px 12px", background: "none", border: "none", color: defaultLang === l ? "rgba(255,220,100,1)" : "rgba(201,168,76,0.32)", textShadow: defaultLang === l ? "0 0 14px rgba(201,168,76,0.7)" : "none", borderBottom: defaultLang === l ? "1px solid rgba(201,168,76,0.7)" : "1px solid transparent", transition: "all 0.15s ease" }}>
              {l === "uk" ? "УКР" : "ENG"}
            </button>
          ))}
        </div>
      </div>

      {/* ШАР 8 — Картка (CSS transition для overlay + карточки) */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
        style={{
          background: "rgba(2,1,6,0.88)",
          opacity: isModalOpen ? 1 : 0,
          pointerEvents: isModalOpen ? "auto" : "none",
          transition: "opacity 0.18s ease",
        }}
        onClick={(e) => { if (e.target === e.currentTarget) setIsModalOpen(false); }}
      >
        <div
          className="relative w-full max-w-4xl flex flex-col"
          style={{
            height: "88vh",
            background: "linear-gradient(145deg, rgba(12,9,18,0.98) 0%, rgba(16,12,24,0.97) 50%, rgba(10,7,16,0.98) 100%)",
            border: "1px solid rgba(201,168,76,0.3)",
            boxShadow: "0 0 0 1px rgba(201,168,76,0.06), inset 0 1px 0 rgba(201,168,76,0.1), 0 40px 100px rgba(0,0,0,0.8)",
            borderRadius: 2,
            transform: isModalOpen ? "translateY(0)" : "translateY(12px)",
            opacity: isModalOpen ? 1 : 0,
            transition: "opacity 0.2s ease, transform 0.2s ease",
          }}
        >
          {/* Куточки */}
          {([
            { top: 8, left: 8,    borderWidth: "1px 0 0 1px" },
            { top: 8, right: 8,   borderWidth: "1px 1px 0 0" },
            { bottom: 8, left: 8,  borderWidth: "0 0 1px 1px" },
            { bottom: 8, right: 8, borderWidth: "0 1px 1px 0" },
          ] as CSSProperties[]).map((s, i) => (
            <div key={i} className="absolute pointer-events-none" style={{ ...s, width: 20, height: 20, borderColor: "rgba(201,168,76,0.45)", borderStyle: "solid" }} />
          ))}

          <button onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 z-10 cursor-none focus:outline-none transition-opacity"
            style={{ color: "rgba(201,168,76,0.5)", opacity: 0.6 }}>
            <X size={16} />
          </button>

          <div className="flex-shrink-0 px-8 pt-7 pb-0 text-center">
            <p style={{ fontSize: 9, letterSpacing: "0.4em", color: "rgba(201,168,76,0.75)", fontFamily: "'Cormorant SC', Georgia, serif", marginBottom: 8 }}>{L.constell}</p>
            <h2 style={{ fontFamily: "'Cormorant SC', Georgia, serif", fontSize: "clamp(20px, 2.8vw, 28px)", fontWeight: 400, letterSpacing: "0.18em", color: "rgba(255,245,220,1)" }}>
              {t(current.name, defaultLang)}
            </h2>
            <div style={{ height: 1, marginTop: 16, background: "linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.5) 25%, rgba(201,168,76,0.8) 50%, rgba(201,168,76,0.5) 75%, transparent 100%)" }} />
          </div>

          <div className="grid grid-cols-3 flex-shrink-0" style={{ borderBottom: "1px solid rgba(201,168,76,0.12)" }}>
            {(["desc", "legend", "find"] as Tab[]).map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`modal-tab focus:outline-none ${activeTab === tab ? "tab-active" : ""}`}>
                {tabLabels[tab]}
              </button>
            ))}
          </div>

          <div className="flex flex-col md:flex-row overflow-hidden flex-1 min-h-0">
            <div className="hidden md:flex w-full md:w-5/12 flex-shrink-0 items-center justify-center p-6 md:min-h-0"
              style={{ borderRight: "1px solid rgba(201,168,76,0.1)", background: "rgba(0,0,0,0.2)" }}>
              <div className="flex flex-col items-center gap-4 w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={current.image} alt={`Схема сузір'я ${t(current.name, "uk")}`}
                  className="max-w-full object-contain rounded"
                  style={{ maxHeight: 240, opacity: 0.8, filter: "sepia(20%) brightness(0.85)" }}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                <p style={{ fontSize: 9, letterSpacing: "0.3em", color: "rgba(201,168,76,0.35)", fontFamily: "'Cormorant SC', Georgia, serif" }}>
                  {t(current.name, "uk")}
                </p>
              </div>
            </div>

            <div className="flex-1 flex flex-col min-h-0">
              <div className="flex-1 overflow-y-auto px-5 md:px-9 pt-5 pb-4"
                style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(201,168,76,0.2) transparent" }}>
                <TabFade id={activeTab}>
                  <p style={{ fontSize: 9, letterSpacing: "0.35em", color: "rgba(201,168,76,0.75)", fontFamily: "'Cormorant SC', Georgia, serif", marginBottom: 16 }}>
                    {tabLabels[activeTab]}
                  </p>
                  <h3 style={{ fontFamily: "'Cormorant SC', Georgia, serif", fontSize: "clamp(18px, 2vw, 22px)", fontWeight: 400, letterSpacing: "0.12em", color: "rgba(255,245,220,1)", marginBottom: 16 }}>
                    {t(current.name, "uk")}
                  </h3>
                  <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(16px, 4.2vw, 17px)", lineHeight: 1.9, fontWeight: 300, color: "rgba(245,234,212,0.95)" }}>
                    {tabContent[activeTab]}
                  </p>
                </TabFade>
              </div>

              <div className="flex-shrink-0 flex items-center justify-between px-5 md:px-9 py-4" style={{ borderTop: "1px solid rgba(201,168,76,0.1)" }}>
                <button onClick={() => { setIsModalOpen(false); goPrev(); }}
                  className="flex items-center gap-2 cursor-none focus:outline-none group"
                  style={{ color: "rgba(201,168,76,0.4)", fontFamily: "'Cormorant SC', Georgia, serif", fontSize: 11, letterSpacing: "0.1em" }}>
                  <ChevronLeft size={13} className="group-hover:-translate-x-0.5 transition-transform" />
                  {t(constellations[(currentIndex - 1 + constellations.length) % constellations.length].name, defaultLang)}
                </button>
                <span style={{ fontSize: 10, color: "rgba(201,168,76,0.2)", letterSpacing: "0.2em", fontFamily: "'Cormorant SC', Georgia, serif" }}>
                  {currentIndex + 1} · {constellations.length}
                </span>
                <button onClick={() => { setIsModalOpen(false); goNext(); }}
                  className="flex items-center gap-2 cursor-none focus:outline-none group"
                  style={{ color: "rgba(201,168,76,0.4)", fontFamily: "'Cormorant SC', Georgia, serif", fontSize: 11, letterSpacing: "0.1em" }}>
                  {t(constellations[(currentIndex + 1) % constellations.length].name, defaultLang)}
                  <ChevronRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Cormorant+SC:wght@300;400;500&display=swap');

        @keyframes twinkle {
          0%, 100% { opacity: 0.6; transform: scale(0.88); }
          50%       { opacity: 1;   transform: scale(1.12); }
        }
        @keyframes bgTwinkle {
          0%, 100% { opacity: var(--min-op, 0.2); }
          50%       { opacity: var(--max-op, 0.6); }
        }
        @keyframes fadeInDelayed {
          0%, 70% { opacity: 0; }
          100%    { opacity: 1; }
        }
        .star-twinkle {
          animation: twinkle var(--dur, 3s) ease-in-out infinite var(--delay, 0s);
          transform-origin: center;
          transform-box: fill-box;
        }
        .star-bg-twinkle {
          animation: bgTwinkle var(--dur, 3s) ease-in-out infinite var(--delay, 0s);
        }
        .fade-in-delayed {
          animation: fadeInDelayed 3s ease forwards;
        }
        .constellation-name {
          font-family: 'Cormorant SC', Georgia, serif;
          font-weight: 400;
          letter-spacing: 0.38em;
          color: rgba(245,234,212,0.85);
          text-shadow: 0 0 40px rgba(201,168,76,0.2);
          transition: color 0.2s ease, letter-spacing 0.2s ease, text-shadow 0.2s ease;
          cursor: none;
          background: none;
          border: none;
        }
        .constellation-name:hover {
          color: rgba(255,244,200,1);
          letter-spacing: 0.48em;
          text-shadow: 0 0 20px rgba(201,168,76,1), 0 0 50px rgba(201,168,76,0.6), 0 0 90px rgba(201,168,76,0.25);
        }
        .nav-btn {
          display: flex; align-items: center; gap: 8px; width: 100%;
          text-align: left; padding: 9px 20px; font-size: 13px;
          letter-spacing: 0.12em; font-family: 'Cormorant SC', Georgia, serif;
          color: rgba(201,168,76,0.65); background: transparent;
          border: none; border-right: 2px solid transparent;
          transition: color 0.15s ease, background 0.15s ease, padding-left 0.15s ease, border-color 0.15s ease, text-shadow 0.15s ease;
          cursor: none;
        }
        .nav-btn:hover { color: rgba(201,168,76,0.9); background: rgba(201,168,76,0.06); padding-left: 26px; border-right-color: rgba(201,168,76,0.3); text-shadow: 0 0 12px rgba(201,168,76,0.4); }
        .nav-btn.nav-active { color: rgba(255,220,100,1); background: rgba(201,168,76,0.1); border-right-color: rgba(255,210,80,0.8); text-shadow: 0 0 20px rgba(201,168,76,0.6); }
        .modal-tab {
          padding: 14px 8px; font-family: 'Cormorant SC', Georgia, serif;
          font-size: 13px; letter-spacing: 0.18em; color: rgba(201,168,76,0.6);
          background: transparent; border: none; border-bottom: 1px solid transparent;
          transition: color 0.15s ease, background 0.15s ease, border-color 0.15s ease, text-shadow 0.15s ease;
          cursor: none; width: 100%;
        }
        .modal-tab:hover { color: rgba(201,168,76,0.8); background: rgba(201,168,76,0.03); border-bottom-color: rgba(201,168,76,0.35); text-shadow: 0 0 12px rgba(201,168,76,0.4); }
        .modal-tab.tab-active { color: rgba(255,220,100,1); background: rgba(201,168,76,0.07); border-bottom-color: rgba(255,210,80,0.8); text-shadow: 0 0 20px rgba(201,168,76,0.7); }
      `}</style>

      {/* Нічна вінєтка */}
      <div
        className="md:hidden fixed inset-0 z-[9998] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(120,0,0,0.15) 0%, rgba(80,0,0,0.55) 70%, rgba(40,0,0,0.85) 100%)",
          opacity: nightMode ? 1 : 0,
          transition: "opacity 0.6s ease",
        }}
      />

    </main>
  );
}
