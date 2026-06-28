"use client";

import { useEffect, useRef } from "react";

export default function CursorEffect() {
  const haloLargeRef = useRef<HTMLDivElement>(null);
  const haloSmallRef = useRef<HTMLDivElement>(null);
  const starRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;
    let posX = -200;
    let posY = -200;

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

    // ХОВЕР НА ЗІРКУ (Теплий золотавий акцент, акуратний розмір)
const handleStarEnter = () => {
  if (haloLargeRef.current) {
    haloLargeRef.current.style.width  = "90px";
    haloLargeRef.current.style.height = "90px";
    haloLargeRef.current.style.background =
      "radial-gradient(circle, rgba(253,230,138,0.12) 0%, transparent 70%)";
  }
  if (haloSmallRef.current) {
    haloSmallRef.current.style.width  = "24px";
    haloSmallRef.current.style.height = "24px";
    haloSmallRef.current.style.background =
      "radial-gradient(circle, rgba(253,230,138,0.35) 0%, transparent 70%)";
  }
  if (starRef.current) {
    starRef.current.style.fontSize   = "15px";
    starRef.current.style.color      = "rgb(253,230,138)";
    starRef.current.style.textShadow =
      "0 0 6px rgba(253,230,138,0.8), 0 0 12px rgba(253,230,138,0.4)";
  }
};

    // ПІСЛЯ ХОВЕРУ / ПОВЕРНЕННЯ В СТАН СПОКОЮ
    const handleStarLeave = () => {
      if (haloLargeRef.current) {
        haloLargeRef.current.style.width  = "40px";
        haloLargeRef.current.style.height = "40px";
        haloLargeRef.current.style.background =
          "radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(168,85,247,0.05) 45%, transparent 75%)";
      }
      if (haloSmallRef.current) {
        haloSmallRef.current.style.width  = "14px";
        haloSmallRef.current.style.height = "14px";
        haloSmallRef.current.style.background =
          "radial-gradient(circle, rgba(165,180,252,0.2) 0%, transparent 70%)";
      }
      if (starRef.current) {
        starRef.current.style.fontSize   = "12px";
        starRef.current.style.color      = "rgb(199,210,254)";
        starRef.current.style.textShadow = "0 0 6px rgba(199,210,254,0.6)";
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
    <>
      {/* Великий зовнішній ореол */}
      <div
        ref={haloLargeRef}
        className="pointer-events-none fixed hidden md:block z-[9999] rounded-full top-0 left-0"
        style={{
          width: "60px",
          height: "60px",
          background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(168,85,247,0.05) 45%, transparent 75%)",
          filter: "blur(6px)", // Оптимальний м'який блюр без ефекту велетенської плями
          transition: "width 0.5s ease, height 0.35s ease, background 0.5s ease",
          willChange: "transform",
        }}
      />

      {/* Маленький внутрішній ореол */}
      <div
        ref={haloSmallRef}
        className="pointer-events-none fixed hidden md:block z-[9999] rounded-full top-0 left-0"
        style={{
          width: "24px",
          height: "24px",
          background: "radial-gradient(circle, rgba(165,180,252,0.2) 0%, transparent 70%)",
          filter: "blur(2px)", // Легке пом'якшення для внутрішнього ядра
          transition: "width 0.3s ease, height 0.3s ease, background 0.3s ease",
          willChange: "transform",
        }}
      />

      {/* Центральна зірочка */}
      <div
        ref={starRef}
        className="pointer-events-none fixed hidden md:block z-[9999] top-0 left-0 select-none"
        style={{
          fontSize: "12px",
          color: "rgb(199,210,254)",
          textShadow: "0 0 6px rgba(199,210,254,0.6)",
          transition: "font-size 0.2s ease, color 0.2s ease, text-shadow 0.2s ease",
          willChange: "transform",
          lineHeight: 1,
        }}
      >
        ✦
      </div>
    </>
  );
}