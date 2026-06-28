"use client";

import { useState, useEffect, use, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import { constellations, t, type Lang, type ConstellationData } from "@/data/constellations";

type Tab = "desc" | "legend" | "find";

// Детермінований random — однаковий на сервері і клієнті
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


// ─── SVG компонент для сузір'їв з viewBox ────────────────────────────────────
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
    <svg
      viewBox={`${vx} ${vy} ${vw} ${vh}`}
      preserveAspectRatio="xMidYMid meet"
      className="absolute inset-0 w-full h-full"
    >
      <defs>
        <radialGradient id="halo">
          <stop offset="0%" stopColor="rgba(253,230,138,0.45)" />
          <stop offset="100%" stopColor="rgba(253,230,138,0)" />
        </radialGradient>
      </defs>

      {/* Лінії */}
      {current.lines?.map(([a, b], idx) => {
        const sa = current.stars[a];
        const sb = current.stars[b];
        if (!sa || !sb) return null;
        return (
          <line key={idx}
            x1={parseFloat(sa.left)} y1={parseFloat(sa.top)}
            x2={parseFloat(sb.left)} y2={parseFloat(sb.top)}
            stroke="rgba(165,180,252,0.25)"
            strokeWidth="0.35"
            strokeDasharray="1.2 2"
          />
        );
      })}

      {/* Зірки */}
      {current.stars.map((star, idx) => {
        const cx = parseFloat(star.left);
        const cy = parseFloat(star.top);
        const r = star.size * 0.09;
        const isHovered = hoveredStar === star.name;
        return (
          <g key={idx}>
            {/* Ореол */}
            <circle cx={cx} cy={cy} r={r * 4} fill="url(#halo)" opacity={0.6} style={{ pointerEvents: "none" }} />
            {/* Зірка з мерехтінням */}
            <circle cx={cx} cy={cy} r={r} fill="white" opacity={0.9}
              className="star-twinkle"
              style={{ ["--r" as string]: `${r}`, ["--dur" as string]: `${2 + (idx % 4) * 0.7}s`, ["--delay" as string]: `${(idx * 0.4) % 3}s`, pointerEvents: "none" }}
            />
            {/* Зона наведення */}
            <circle cx={cx} cy={cy} r={3} fill="transparent"
              onMouseEnter={() => onStarEnter(star.name)}
              onMouseLeave={onStarLeave}
              style={{ cursor: "none" }}
            />
            {/* Підпис */}
            {isHovered && (
              <g style={{ pointerEvents: "none" }}>
                <rect
                  x={cx - star.name.length * 1.5} y={cy + r + 0.5}
                  width={star.name.length * 3} height={4}
                  rx={0.4} fill="rgba(6,4,9,0.92)"
                  stroke="rgba(253,230,138,0.4)" strokeWidth={0.2}
                />
                <text x={cx} y={cy + r + 3.5} textAnchor="middle"
                  fontSize={2} letterSpacing={0.2}
                  fill="rgba(253,230,138,0.92)"
                  fontFamily="'Cormorant SC', Georgia, serif">
                  {star.name}
                </text>
              </g>
            )}
          </g>
        );
      })}
    </svg>
  );
}

export default function ConstellationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const router = useRouter();

  const dirRef = useRef<"left" | "right">("right");

  const currentIndex = constellations.findIndex(
    (c) => c.id === resolvedParams.id
  );
  const current = constellations[currentIndex >= 0 ? currentIndex : 0];

  const [activeTab, setActiveTab] = useState<Tab>("desc");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [hoveredStar, setHoveredStar] = useState<string | null>(null);
  const [navSearch, setNavSearch] = useState("");
  const [touchStart, setTouchStart] = useState<number | null>(null);
const [lang, setLang] = useState<Lang>("uk");

useEffect(() => {
  const saved = localStorage.getItem("lang") as Lang | null;
  if (saved === "en") setLang("en");
}, []);

const handleSetLang = (l: Lang) => {
  setLang(l);
  localStorage.setItem("lang", l);
};

  const goNext = useCallback(() => {
    dirRef.current = "right";
    const nextIndex = (currentIndex + 1) % constellations.length;
    router.push(`/constellation/${constellations[nextIndex].id}`);
  }, [currentIndex, router]);

  const goPrev = useCallback(() => {
    dirRef.current = "left";
    const prevIndex = (currentIndex - 1 + constellations.length) % constellations.length;
    router.push(`/constellation/${constellations[prevIndex].id}`);
  }, [currentIndex, router]);

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
    const handleTouchStart = (e: TouchEvent) => setTouchStart(e.touches[0].clientX);
    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStart === null || isModalOpen || isNavOpen) return;
      const diff = touchStart - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 60) diff > 0 ? goNext() : goPrev();
      setTouchStart(null);
    };
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [touchStart, goNext, goPrev, isModalOpen, isNavOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (isModalOpen || isNavOpen) {
        if (e.key === "Escape") { setIsModalOpen(false); setIsNavOpen(false); }
        return;
      }
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goNext();
      if (e.key === "ArrowLeft"  || e.key === "ArrowUp")   goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev, isModalOpen, isNavOpen]);

  const handleStarEnter = (name: string) => {
    setHoveredStar(name);
    window.dispatchEvent(new Event("star-enter"));
  };
  const handleStarLeave = () => {
    setHoveredStar(null);
    window.dispatchEvent(new Event("star-leave"));
  };

  useEffect(() => { setActiveTab("desc"); }, [current.id]);

  const filteredConstellations = constellations.filter((c) =>
    t(c.name, lang).toLowerCase().includes(navSearch.toLowerCase())
  );

  if (!current) return null;

  const langLabels = {
    uk: { desc: "Опис", legend: "Легенда", find: "Як знайти", more: "натисни, щоб дізнатись більше", scroll: "скролл або стрілки", search: "Пошук сузір'я...", notFound: "Нічого не знайдено", encycl: "Енциклопедія", constell: "Constellation" },
    la: { desc: "Descriptio", legend: "Fabula", find: "Quomodo invenire", more: "tange ut plus scias", scroll: "volutare vel sagittas uti", search: "Quaere...", notFound: "Nihil inventum", encycl: "Encyclopaedia", constell: "Constellatio" },
    en: { desc: "Description", legend: "Legend", find: "How to find", more: "tap to learn more", scroll: "scroll or arrow keys", search: "Search...", notFound: "Nothing found", encycl: "Encyclopedia", constell: "Constellation" },
  };
  const L = langLabels[lang];
  const tabLabels: Record<Tab, string> = { desc: L.desc, legend: L.legend, find: L.find };
  const tabContent: Record<Tab, string> = {
    desc:   t(current.description, lang),
    legend: t(current.legend, lang),
    find:   t(current.howToFind, lang),
  };

  return (
    <main className="relative w-screen h-screen overflow-hidden" style={{ background: "#0a0e1a" }}>

      {/* ШАР 1 — Фонові зірки */}
      <div className="absolute inset-0 z-0">
        {BACKGROUND_STARS.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{ top: star.top, left: star.left, width: star.size, height: star.size }}
            animate={{ opacity: [star.opacity * 0.4, star.opacity, star.opacity * 0.4] }}
            transition={{ duration: star.duration, delay: star.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* ШАР 2 — Туманність */}
<div className="absolute inset-0 z-0 pointer-events-none">
  {/* Мобільний — менший blur, більша opacity */}
  <div className="block md:hidden absolute rounded-full" style={{
    width: "120vw",
    height: "120vw",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    opacity: 0.6,
    filter: "blur(160px)",
    background: "radial-gradient(circle, rgba(80,90,220,0.9) 0%, rgba(120,80,200,0.55) 45%, transparent 70%)",
  }} />
  {/* Десктоп — більший blur, менша opacity */}
  <div className="hidden md:block absolute rounded-full" style={{
    width: "70vw",
    height: "70vw",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    opacity: 0.25,
    filter: "blur(140px)",
    background: "radial-gradient(circle, rgba(80,90,220,0.7) 0%, rgba(120,80,200,0.35) 45%, transparent 70%)",
  }} />
</div>

      {/* ШАР 3 — Зірки сузір'я */}
      <div className="absolute inset-0 z-10">
        <AnimatePresence mode="wait" custom={dirRef.current}>
          <motion.div
            key={current.id}
            custom={dirRef.current}
            variants={{
              enter: (dir: "left" | "right") => ({ opacity: 0, x: dir === "right" ? 40 : -40 }),
              show:  { opacity: 1, x: 0 },
              exit:  (dir: "left" | "right") => ({ opacity: 0, x: dir === "right" ? -40 : 40 }),
            }}
            initial="enter"
            animate="show"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0"
          >
            {current.viewBox ? (
              <ConstellationSVG
                current={current}
                hoveredStar={hoveredStar}
                onStarEnter={handleStarEnter}
                onStarLeave={handleStarLeave}
              />
            ) : (
              // SVG рендер для сузір'їв з generated-stars (координати у відсотках)
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet"
                className="absolute inset-0 w-full h-full"
              >
                <defs>
                  <radialGradient id="halo2">
                    <stop offset="0%" stopColor="rgba(253,230,138,0.45)" />
                    <stop offset="100%" stopColor="rgba(253,230,138,0)" />
                  </radialGradient>
                </defs>

                {/* Лінії */}
                {current.lines?.map(([a, b], idx) => {
                  const sa = current.stars[a];
                  const sb = current.stars[b];
                  if (!sa || !sb) return null;
                  return (
                    <line key={idx}
                      x1={parseFloat(sa.left)} y1={parseFloat(sa.top)}
                      x2={parseFloat(sb.left)} y2={parseFloat(sb.top)}
                      stroke="rgba(165,180,252,0.22)"
                      strokeWidth="0.4"
                      strokeDasharray="1.5 2.5"
                    />
                  );
                })}

                {/* Зірки */}
                {current.stars.map((star, idx) => {
                  const cx = parseFloat(star.left);
                  const cy = parseFloat(star.top);
                  const r = star.size * 0.14;
                  const isHovered = hoveredStar === star.name;
                  return (
                    <g key={idx}>
                      <circle cx={cx} cy={cy} r={r * 4} fill="url(#halo2)" opacity={0.6} style={{ pointerEvents: "none" }} />
                      <circle cx={cx} cy={cy} r={r} fill="white" opacity={0.9}
                        className="star-twinkle"
                        style={{ ["--r" as string]: `${r}`, ["--dur" as string]: `${2 + (idx % 4) * 0.7}s`, ["--delay" as string]: `${(idx * 0.4) % 3}s`, pointerEvents: "none" }}
                      />
                      <circle cx={cx} cy={cy} r={2.5} fill="transparent"
                        onMouseEnter={() => handleStarEnter(star.name)}
                        onMouseLeave={handleStarLeave}
                        style={{ cursor: "none" }}
                      />
                      {isHovered && (
                        <g style={{ pointerEvents: "none" }}>
                          <rect
                            x={cx - star.name.length * 1.5} y={cy + r + 0.5}
                            width={star.name.length * 3} height={4}
                            rx={0.4} fill="rgba(6,4,9,0.92)"
                            stroke="rgba(253,230,138,0.4)" strokeWidth={0.2}
                          />
                          <text x={cx} y={cy + r + 3.5} textAnchor="middle"
                            fontSize={2} letterSpacing={0.2}
                            fill="rgba(253,230,138,0.92)"
                            fontFamily="'Cormorant SC', Georgia, serif">
                            {star.name}
                          </text>
                        </g>
                      )}
                    </g>
                  );
                })}
              </svg>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ШАР 4 — Назва сузір'я */}
      <div className="absolute inset-x-0 bottom-10 z-20 flex flex-col items-center gap-2">
        <AnimatePresence mode="wait">
          <motion.button
            key={current.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            onClick={() => setIsModalOpen(true)}
            className="group flex flex-col items-center gap-1 cursor-none focus:outline-none"
          >
            <span className="text-[10px] tracking-[0.4em] uppercase text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ fontFamily: "'Cormorant SC', Georgia, serif" }}>
              {currentIndex + 1} / {constellations.length}
            </span>
            <h1
              className="constellation-name"
              style={{ fontSize: "clamp(22px, 5vw, 26px)" }}
            >
              {t(current.name, lang)}
            </h1>
            <span className="text-[10px] tracking-[0.3em] text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ fontFamily: "'Cormorant SC', Georgia, serif" }}>
              {L.more}
            </span>
          </motion.button>
        </AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}
          className="flex items-center gap-3 mt-1"
        >
          <div className="h-px w-8" style={{ background: "rgba(201,168,76,0.2)" }} />
          <span style={{ fontSize: 9, letterSpacing: "0.3em", color: "rgba(201,168,76,0.3)", fontFamily: "'Cormorant SC', Georgia, serif" }}>
            {L.scroll}
          </span>
          <div className="h-px w-8" style={{ background: "rgba(201,168,76,0.2)" }} />
        </motion.div>
      </div>

      {/* ШАР 5 — Стрілки */}
      <div className="absolute inset-y-0 left-4 z-20 flex items-center">
        <button onClick={goPrev} className="p-4 text-slate-600 hover:text-slate-300 transition-colors cursor-none focus:outline-none group">
          <ChevronLeft size={20} className="group-hover:scale-110 transition-transform" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-14 z-20 flex items-center">
        <button onClick={goNext} className="p-4 text-slate-600 hover:text-slate-300 transition-colors cursor-none focus:outline-none group">
          <ChevronRight size={20} className="group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* ШАР 6 — Кнопка меню */}
      <button
        onClick={() => setIsNavOpen(true)}
        className="absolute top-5 right-5 z-30 p-2.5 bg-slate-900/50 border border-slate-800/60 rounded-full hover:bg-slate-800/80 transition-all duration-200 cursor-none focus:outline-none hover:border-slate-700"
      >
        <Menu size={16} className="text-slate-400" />
      </button>

      {/* ШАР 7 — Навігаційна панель */}
      <AnimatePresence>
        {isNavOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
              onClick={() => setIsNavOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.18, ease: "easeOut" }}
              className="fixed top-0 right-0 h-full z-50 flex flex-col"
              style={{
                width: 288,background: "linear-gradient(180deg, rgba(6,8,14,0.99) 0%, rgba(8,11,18,0.99) 100%)",
                
                borderLeft: "1px solid rgba(201,168,76,0.18)",
              }}
            >
              <div className="flex justify-between items-center p-5" style={{ borderBottom: "1px solid rgba(201,168,76,0.12)" }}>
                <div>
                  <p style={{ fontSize: 10, letterSpacing: "0.25em", color: "rgba(201,168,76,0.6)", fontFamily: "'Cormorant SC', Georgia, serif" }}>
                    {L.encycl}
                  </p>
                  <p style={{ fontSize: 22, fontWeight: 300, color: "rgba(245,234,212,0.7)", fontFamily: "'Cormorant Garamond', Georgia, serif", marginTop: 4 }}>
                    88 сузір&apos;їв
                  </p>
                </div>
                <button onClick={() => setIsNavOpen(false)} className="cursor-none focus:outline-none" style={{ color: "rgba(201,168,76,0.5)", opacity: 0.6 }}>
                  <X size={16} />
                </button>
              </div>

              <div className="px-4 py-3" style={{ borderBottom: "1px solid rgba(201,168,76,0.08)" }}>
                <input
                  type="text"
                  placeholder={L.search}
                  value={navSearch}
                  onChange={(e) => setNavSearch(e.target.value)}
                  style={{
                    width: "100%",
                    background: "rgba(201,168,76,0.05)",
                    border: "1px solid rgba(201,168,76,0.2)",
                    borderRadius: 2,
                    padding: "8px 12px",
                    fontSize: 12,
                    letterSpacing: "0.1em",
                    color: "rgba(245,234,212,0.8)",
                    outline: "none",
                    fontFamily: "'Cormorant SC', Georgia, serif",
                    cursor: "text",
                  }}
                />
              </div>

              <div className="flex-1 overflow-y-auto py-2"
                style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(201,168,76,0.2) transparent" }}>
                {filteredConstellations.length === 0 ? (
                  <p className="text-center py-8" style={{ fontSize: 12, color: "rgba(201,168,76,0.3)", fontFamily: "'Cormorant SC', Georgia, serif" }}>
                    {L.notFound}
                  </p>
                ) : (
                  filteredConstellations.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => { router.push(`/constellation/${c.id}`); setIsNavOpen(false); setNavSearch(""); }}
                      className={`nav-btn focus:outline-none ${c.id === current.id ? "nav-active" : ""}`}
                    >
                      {c.id === current.id && <span style={{ fontSize: 8, color: "rgba(201,168,76,0.8)" }}>✦</span>}
                      <span>{t(c.name, lang)}</span>
                    </button>
                  ))
                )}
              </div>

              {/* Перемикач мови */}
          <div style={{ borderTop: "1px solid rgba(201,168,76,0.12)", display: "flex", justifyContent: "center", gap: 4, padding: "12px 0" }}>
  {(["uk", "en"] as Lang[]).map((l) => (
    <button key={l} onClick={() => handleSetLang(l)}
      className="focus:outline-none"
      style={{
        fontFamily: "'Cormorant SC', Georgia, serif",
        fontSize: 11, letterSpacing: "0.18em",
        padding: "4px 12px",
        background: "none", border: "none",
        color: lang === l ? "rgba(255,220,100,1)" : "rgba(201,168,76,0.32)",
        textShadow: lang === l ? "0 0 14px rgba(201,168,76,0.7)" : "none",
        borderBottom: lang === l ? "1px solid rgba(201,168,76,0.7)" : "1px solid transparent",
        transition: "all 0.15s ease",
      }}>
      {l === "uk" ? "УКР" : "ENG"}
    </button>
  ))}
</div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ШАР 8 — Картка обсерваторії */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
            style={{ background: "rgba(2,1,6,0.88)" }}
            onClick={(e) => { if (e.target === e.currentTarget) setIsModalOpen(false); }}
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{    opacity: 0, y: 12 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-4xl flex flex-col"
              style={{
               height: "88vh",
                background: "linear-gradient(145deg, rgba(12,9,18,0.98) 0%, rgba(16,12,24,0.97) 50%, rgba(10,7,16,0.98) 100%)",
                border: "1px solid rgba(201,168,76,0.3)",
                boxShadow: "0 0 0 1px rgba(201,168,76,0.06), inset 0 1px 0 rgba(201,168,76,0.1), 0 40px 100px rgba(0,0,0,0.8), 0 0 60px rgba(201,168,76,0.04)",
                borderRadius: 2,
              }}
            >
              {/* Кутові орнаменти */}
              {[
                { top: 8, left: 8,    borderWidth: "1px 0 0 1px" },
                { top: 8, right: 8,   borderWidth: "1px 1px 0 0" },
                { bottom: 8, left: 8,  borderWidth: "0 0 1px 1px" },
                { bottom: 8, right: 8, borderWidth: "0 1px 1px 0" },
              ].map((s, i) => (
                <div key={i} className="absolute pointer-events-none" style={{
                  ...s, width: 20, height: 20,
                  borderColor: "rgba(201,168,76,0.45)", borderStyle: "solid",
                }} />
              ))}

              {/* Закрити */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-10 cursor-none focus:outline-none transition-opacity"
                style={{ color: "rgba(201,168,76,0.5)", opacity: 0.6 }}
              >
                <X size={16} />
              </button>

              {/* Заголовок */}
              <div className="flex-shrink-0 px-8 pt-7 pb-0 text-center">
                <p style={{ fontSize: 9, letterSpacing: "0.4em", color: "rgba(201,168,76,0.45)", fontFamily: "'Cormorant SC', Georgia, serif", marginBottom: 8 }}>
                  {L.constell}
                </p>
                <h2 style={{
                  fontFamily: "'Cormorant SC', Georgia, serif",
                  fontSize: "clamp(20px, 2.8vw, 28px)",
                  fontWeight: 400,
                  letterSpacing: "0.18em",
                  color: "rgba(255,245,220,1)",
                }}>
                  {t(current.name, lang)}
                </h2>
                {/* Золота лінія */}
                <div style={{
                  height: 1, marginTop: 16,
                  background: "linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.5) 25%, rgba(201,168,76,0.8) 50%, rgba(201,168,76,0.5) 75%, transparent 100%)",
                }} />
              </div>

              {/* Вкладки */}
              <div className="grid grid-cols-3 flex-shrink-0" style={{ borderBottom: "1px solid rgba(201,168,76,0.12)" }}>
                {(["desc", "legend", "find"] as Tab[]).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`modal-tab focus:outline-none ${activeTab === tab ? "tab-active" : ""}`}
                  >
                    {tabLabels[tab]}
                  </button>
                ))}
              </div>

              {/* Тіло */}
              <div className="flex flex-col md:flex-row overflow-hidden flex-1 min-h-0">

                {/* Зображення */}
                <div className="hidden md:flex w-full md:w-5/12 flex-shrink-0 items-center justify-center p-6 md:min-h-0"
                  style={{ borderRight: "1px solid rgba(201,168,76,0.1)", background: "rgba(0,0,0,0.2)" }}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current.id}
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col items-center gap-4 w-full"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={current.image}
                        alt={`Схема сузір'я ${t(current.name, "uk")}`}
                        className="max-w-full object-contain rounded"
                        style={{ maxHeight: 240, opacity: 0.8, filter: "sepia(20%) brightness(0.85)" }}
                        onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                      />
                      <p style={{ fontSize: 9, letterSpacing: "0.3em", color: "rgba(201,168,76,0.35)", fontFamily: "'Cormorant SC', Georgia, serif" }}>
                        {t(current.name, "uk")}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Текст — скролиться */}
                <div className="flex-1 flex flex-col min-h-0">
                  <div className="flex-1 overflow-y-auto px-5 md:px-9 pt-5 pb-4"
                    style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(201,168,76,0.2) transparent" }}>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.35, ease: "easeOut"}}
                      >
                        <p style={{ fontSize: 9, letterSpacing: "0.35em", color: "rgba(201,168,76,0.75)", fontFamily: "'Cormorant SC', Georgia, serif", marginBottom: 16 }}>
                          {tabLabels[activeTab]}
                        </p>
                        <h3 style={{
                          fontFamily: "'Cormorant SC', Georgia, serif",
                          fontSize: "clamp(18px, 2vw, 22px)",
                          fontWeight: 400,
                          letterSpacing: "0.12em",
                          color: "rgba(255,245,220,1)",
                          marginBottom: 16,
                        }}>
                          {t(current.name, "uk")}
                        </h3>
                        <p style={{
                          fontFamily: "'Cormorant Garamond', Georgia, serif",
                          fontSize: "clamp(16px, 4.2vw, 17px)",
                          lineHeight: 1.9,
                          fontWeight: 300,
                          color: "rgba(245,234,212,0.95)",
                        }}>
                          {tabContent[activeTab]}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Навігація між сузір'ями — прибита до низу */}
                  <div className="flex-shrink-0 flex items-center justify-between px-7 md:px-9 py-4"
                    style={{ borderTop: "1px solid rgba(201,168,76,0.1)" }}>
                    <button
                      onClick={() => { setIsModalOpen(false); goPrev(); }}
                      className="flex items-center gap-2 cursor-none focus:outline-none group"
                      style={{ color: "rgba(201,168,76,0.4)", fontFamily: "'Cormorant SC', Georgia, serif", fontSize: 11, letterSpacing: "0.1em" }}
                    >
                      <ChevronLeft size={13} className="group-hover:-translate-x-0.5 transition-transform" />
                      {t(constellations[(currentIndex - 1 + constellations.length) % constellations.length].name, lang)}
                    </button>
                    <span style={{ fontSize: 10, color: "rgba(201,168,76,0.2)", letterSpacing: "0.2em", fontFamily: "'Cormorant SC', Georgia, serif" }}>
                      {currentIndex + 1} · {constellations.length}
                    </span>
                    <button
                      onClick={() => { setIsModalOpen(false); goNext(); }}
                      className="flex items-center gap-2 cursor-none focus:outline-none group"
                      style={{ color: "rgba(201,168,76,0.4)", fontFamily: "'Cormorant SC', Georgia, serif", fontSize: 11, letterSpacing: "0.1em" }}
                    >
                      {t(constellations[(currentIndex + 1) % constellations.length].name, lang)}
                      <ChevronRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Cormorant+SC:wght@300;400;500&display=swap');

        @keyframes twinkle {
          0%, 100% { opacity: 0.7; r: var(--r); }
          50% { opacity: 1; r: calc(var(--r) * 1.15); }
        }
        .star-twinkle {
          animation: twinkle var(--dur, 3s) ease-in-out infinite var(--delay, 0s);
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
          display: flex;
          align-items: center;
          gap: 8px;
          width: 100%;
          text-align: left;
          padding: 9px 20px;
          font-size: 13px;
          letter-spacing: 0.12em;
          font-family: 'Cormorant SC', Georgia, serif;
         color: rgba(201,168,76,0.65);
          background: transparent;
          border: none;
          border-right: 2px solid transparent;
          text-shadow: none;
          transition: color 0.15s ease, background 0.15s ease, padding-left 0.15s ease, border-color 0.15s ease, text-shadow 0.15s ease;
          cursor: none;
        }
        .nav-btn:hover {
          color: rgba(201,168,76,0.9);
          background: rgba(201,168,76,0.06);
          padding-left: 26px;
          border-right-color: rgba(201,168,76,0.3);
          text-shadow: 0 0 12px rgba(201,168,76,0.4);
        }
        .nav-btn.nav-active {
          color: rgba(255,220,100,1);
          background: rgba(201,168,76,0.1);
          border-right-color: rgba(255,210,80,0.8);
          text-shadow: 0 0 20px rgba(201,168,76,0.6);
        }
        .modal-tab {
          padding: 14px 8px;
          font-family: 'Cormorant SC', Georgia, serif;
          font-size: 13px;
          letter-spacing: 0.18em;
          color: rgba(201,168,76,0.6);
          background: transparent;
          border: none;
          border-bottom: 1px solid transparent;
          text-shadow: none;
          transition: color 0.15s ease, background 0.15s ease, border-color 0.15s ease, text-shadow 0.15s ease;
          cursor: none;
          width: 100%;
        }
        .modal-tab:hover {
          color: rgba(201,168,76,0.8);
          background: rgba(201,168,76,0.03);
          border-bottom-color: rgba(201,168,76,0.35);
          text-shadow: 0 0 12px rgba(201,168,76,0.4);
        }
        .modal-tab.tab-active {
          color: rgba(255,220,100,1);
          background: rgba(201,168,76,0.07);
          border-bottom-color: rgba(255,210,80,0.8);
          text-shadow: 0 0 20px rgba(201,168,76,0.7);
        }
      `}</style>
    </main>
  );
}

