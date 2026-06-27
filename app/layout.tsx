"use client";

import { useEffect, useRef } from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const haloLargeRef = useRef<HTMLDivElement>(null);
  const haloSmallRef = useRef<HTMLDivElement>(null);
  const starRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;
    let posX = -200;
    let posY = -200;

    // Без lerp — курсор точно слідує за мишею, але через rAF (без стрибків)
    const animate = () => {
      const transform = `translate(${posX}px, ${posY}px) translate(-50%, -50%)`;
      if (haloLargeRef.current) haloLargeRef.current.style.transform = transform;
      if (haloSmallRef.current) haloSmallRef.current.style.transform = transform;
      if (starRef.current)      starRef.current.style.transform      = transform;
      rafId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      posX = e.clientX;
      posY = e.clientY;
    };

    const handleStarEnter = () => {
      if (haloLargeRef.current) {
        haloLargeRef.current.style.width  = "220px";
        haloLargeRef.current.style.height = "220px";
        haloLargeRef.current.style.background =
          "radial-gradient(circle, rgba(253,230,138,0.14) 0%, rgba(99,102,241,0.06) 50%, transparent 70%)";
      }
      if (haloSmallRef.current) {
        haloSmallRef.current.style.width  = "65px";
        haloSmallRef.current.style.height = "65px";
        haloSmallRef.current.style.background =
          "radial-gradient(circle, rgba(253,230,138,0.28) 0%, transparent 70%)";
      }
      if (starRef.current) {
        starRef.current.style.fontSize   = "18px";
        starRef.current.style.color      = "rgb(253,230,138)";
        starRef.current.style.textShadow =
          "0 0 12px rgba(253,230,138,0.9), 0 0 28px rgba(253,230,138,0.5)";
      }
    };

    const handleStarLeave = () => {
      if (haloLargeRef.current) {
        haloLargeRef.current.style.width  = "140px";
        haloLargeRef.current.style.height = "140px";
        haloLargeRef.current.style.background =
          "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)";
      }
      if (haloSmallRef.current) {
        haloSmallRef.current.style.width  = "30px";
        haloSmallRef.current.style.height = "30px";
        haloSmallRef.current.style.background =
          "radial-gradient(circle, rgba(165,180,252,0.18) 0%, transparent 70%)";
      }
      if (starRef.current) {
        starRef.current.style.fontSize   = "13px";
        starRef.current.style.color      = "rgb(199,210,254)";
        starRef.current.style.textShadow = "0 0 8px rgba(199,210,254,0.7)";
      }
    };

    rafId = requestAnimationFrame(animate);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("star-enter", handleStarEnter);
    window.addEventListener("star-leave", handleStarLeave);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("star-enter", handleStarEnter);
      window.removeEventListener("star-leave", handleStarLeave);
    };
  }, []);

  return (
    <html lang="uk" className="overflow-hidden bg-black text-white" suppressHydrationWarning>
      <head>
        <title>Енциклопедія сузір'їв</title>
        <meta
          name="description"
          content="Інтерактивна енциклопедія всіх 88 сузір'їв нічного неба. Зірки, легенди, міфи та інструкції з пошуку."
        />
      </head>
      <body className="antialiased select-none overflow-hidden" suppressHydrationWarning
        style={{ cursor: "none" }}
      >
        {/* Глобальний CSS — cursor:none скрізь, але повертаємо текстовий курсор для інпутів */}
        <style>{`
          * { cursor: none !important; }
          input, textarea { cursor: text !important; }
        `}</style>

        {/* Великий ореол */}
        <div
          ref={haloLargeRef}
          className="pointer-events-none fixed hidden md:block z-[9999] rounded-full top-0 left-0"
          style={{
            width: "140px",
            height: "140px",
            background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
            filter: "blur(3px)",
            transition: "width 0.3s ease, height 0.3s ease, background 0.3s ease",
            willChange: "transform",
          }}
        />

        {/* Малий ореол */}
        <div
          ref={haloSmallRef}
          className="pointer-events-none fixed hidden md:block z-[9999] rounded-full top-0 left-0"
          style={{
            width: "30px",
            height: "30px",
            background: "radial-gradient(circle, rgba(165,180,252,0.18) 0%, transparent 70%)",
            transition: "width 0.3s ease, height 0.3s ease, background 0.3s ease",
            willChange: "transform",
          }}
        />

        {/* Зірка-курсор */}
        <div
          ref={starRef}
          className="pointer-events-none fixed hidden md:block z-[9999] top-0 left-0 select-none"
          style={{
            fontSize: "13px",
            color: "rgb(199,210,254)",
            textShadow: "0 0 8px rgba(199,210,254,0.7)",
            transition: "font-size 0.2s ease, color 0.2s ease, text-shadow 0.2s ease",
            willChange: "transform",
            lineHeight: 1,
          }}
        >
          ✦
        </div>

        {children}
      </body>
    </html>
  );
}
