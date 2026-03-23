"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const taglines = [
  "I build systems from scratch.",
  "I design pixel-perfect UIs.",
  "I engineer mobile experiences.",
];

const languages = [
  "JavaScript", "TypeScript", "C", "C#", "Python", "Dart", "PHP", "Ruby",
  "React", "Next.js", "Flutter", "ASP.NET Core", "Node.js", "Firebase",
  "SQL Server", "MySQL", "HTML", "CSS", "Bootstrap", "Git",
];

// Double the array for seamless loop
const marqueeItems = [...languages, ...languages];

export default function HeroIntro() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Cycle taglines
  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Mouse parallax
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      style={{
        height: "100vh",
        width: "100vw",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        scrollSnapAlign: "start",
        cursor: "default",
      }}
    >
      {/* ── Gradient Orbs ── */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "5%", left: "10%", width: "45vw", height: "45vw", background: "radial-gradient(circle, rgba(139, 92, 246, 0.35) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(80px)", mixBlendMode: "screen", animation: "float-orb-1 20s ease-in-out infinite", transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)`, transition: "transform 0.3s ease-out" }} />
        <div style={{ position: "absolute", bottom: "5%", right: "5%", width: "50vw", height: "50vw", background: "radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(100px)", mixBlendMode: "screen", animation: "float-orb-2 25s ease-in-out infinite", transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`, transition: "transform 0.3s ease-out" }} />
        <div style={{ position: "absolute", top: "35%", left: "35%", width: "35vw", height: "35vw", background: "radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(90px)", mixBlendMode: "screen", animation: "float-orb-3 18s ease-in-out infinite", transform: `translate(${mousePos.x * -10}px, ${mousePos.y * 10}px)`, transition: "transform 0.3s ease-out" }} />
        <div style={{ position: "absolute", top: "60%", left: "5%", width: "40vw", height: "40vw", background: "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(110px)", mixBlendMode: "screen", animation: "float-orb-4 22s ease-in-out infinite", transform: `translate(${mousePos.x * 12}px, ${mousePos.y * -12}px)`, transition: "transform 0.3s ease-out" }} />
        <div style={{ position: "absolute", top: "15%", right: "15%", width: "30vw", height: "30vw", background: "radial-gradient(circle, rgba(16, 185, 129, 0.18) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(100px)", mixBlendMode: "screen", animation: "float-orb-5 24s ease-in-out infinite", transform: `translate(${mousePos.x * -8}px, ${mousePos.y * -8}px)`, transition: "transform 0.3s ease-out" }} />
        <div style={{ position: "absolute", inset: 0, backgroundSize: "60px 60px", backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.015) 1px, transparent 1px)", maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)", WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)" }} />
      </div>

      {/* ── Center Content ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "16px",
          padding: "0 20px",
        }}
      >
        {/* Role Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "4px", textTransform: "uppercase", color: "rgba(255, 255, 255, 0.5)", fontFamily: "var(--font-inter), sans-serif" }}
        >
          Full-Stack Developer
        </motion.div>

        {/* Name - Creative Staggered Animation */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.4,
              }
            }
          }}
          style={{ 
            fontSize: "clamp(3rem, 8vw, 7rem)", 
            fontWeight: 800, 
            lineHeight: 1.1, 
            fontFamily: "var(--font-inter), sans-serif", 
            margin: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          {/* First Name */}
          <div style={{ display: "flex", justifyContent: "center" }}>
             {"Mohammad".split("").map((char, i) => (
               <motion.span
                 key={i}
                 variants={{
                   hidden: { y: 80, opacity: 0, rotate: i % 2 === 0 ? 15 : -15 },
                   visible: { y: 0, opacity: 1, rotate: 0 }
                 }}
                 transition={{ type: "spring", damping: 10, stiffness: 200 }}
                 whileHover={{ y: -10, scale: 1.1, color: "#e2e8f0", textShadow: "0 0 20px rgba(255,255,255,0.8)" }}
                 style={{ display: "inline-block", color: "#ffffff", textShadow: "0 0 80px rgba(139, 92, 246, 0.3)", cursor: "default" }}
               >
                 {char === " " ? "\u00A0" : char}
               </motion.span>
             ))}
          </div>
          
          {/* Last Name */}
          <motion.div 
            style={{ display: "flex", justifyContent: "center" }}
            animate={{ color: ["#8b5cf6", "#ec4899", "#06b6d4", "#8b5cf6"] }}
            transition={{ duration: 5, ease: "linear", repeat: Infinity }}
          >
             {"Ayoub".split("").map((char, i) => (
               <motion.span
                 key={i}
                 variants={{
                   hidden: { y: 80, opacity: 0, rotate: i % 2 === 0 ? -15 : 15 },
                   visible: { y: 0, opacity: 1, rotate: 0 }
                 }}
                 transition={{ type: "spring", damping: 10, stiffness: 200 }}
                 whileHover={{ y: -10, scale: 1.1, color: "#e2e8f0", textShadow: "0 0 20px rgba(255,255,255,0.8)" }}
                 style={{ display: "inline-block", textShadow: "0 0 80px rgba(236, 72, 153, 0.3)", cursor: "default" }}
               >
                 {char === " " ? "\u00A0" : char}
               </motion.span>
             ))}
          </motion.div>
        </motion.h1>

        {/* Animated Tagline */}
        <div style={{ height: "28px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <AnimatePresence mode="wait">
            <motion.p
              key={taglineIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              style={{ fontSize: "clamp(0.9rem, 2vw, 1.15rem)", color: "rgba(255, 255, 255, 0.6)", fontFamily: "var(--font-inter), sans-serif", fontWeight: 400, margin: 0 }}
            >
              {taglines[taglineIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Stat Badges (Projects + Certificates only) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          style={{ display: "flex", gap: "24px", marginTop: "24px" }}
        >
          {[
            { icon: "🚀", label: "4+ Projects" },
            { icon: "🏆", label: "6 Certificates" },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                display: "flex", alignItems: "center", gap: "8px", padding: "10px 20px",
                background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "12px", backdropFilter: "blur(10px)",
                animation: "glow-pulse 4s ease-in-out infinite", animationDelay: `${i * 0.5}s`,
              }}
            >
              <span style={{ fontSize: "18px" }}>{stat.icon}</span>
              <span style={{ fontSize: "13px", fontWeight: 500, color: "rgba(255, 255, 255, 0.75)", fontFamily: "var(--font-inter), sans-serif" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          style={{ display: "flex", gap: "32px", marginTop: "20px" }}
        >
          {[
            { label: "GitHub", href: "https://github.com/M7mdAyoub" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/mohammad-ayoub091/" },
            { label: "Email", href: "#contact" },
          ].map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target={link.label === "Email" ? undefined : "_blank"}
              rel="noopener noreferrer"
              onClick={link.label === "Email" ? (e) => {
                e.preventDefault();
                const container = document.getElementById('main-scroll-container');
                if (container) {
                   container.scrollTo({ top: window.innerHeight, behavior: 'instant' });
                }
                setTimeout(() => {
                  window.history.pushState(null, "", "#contact");
                  window.dispatchEvent(new HashChangeEvent("hashchange"));
                }, 100);
              } : undefined}
              whileHover={{ color: "#8b5cf6", scale: 1.05 }}
              style={{ fontSize: "13px", fontWeight: 500, color: "rgba(255, 255, 255, 0.4)", fontFamily: "var(--font-jetbrains-mono), monospace", letterSpacing: "1px", textDecoration: "none", transition: "color 0.3s" }}
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Infinite Language Marquee ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{
          position: "absolute",
          bottom: "80px",
          left: 0,
          right: 0,
          overflow: "hidden",
          zIndex: 10,
          maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "32px",
            width: "max-content",
            animation: "marquee-scroll 30s linear infinite",
          }}
        >
          {marqueeItems.map((lang, i) => (
            <span
              key={i}
              style={{
                fontSize: "13px",
                fontWeight: 500,
                color: "rgba(255, 255, 255, 0.25)",
                fontFamily: "var(--font-jetbrains-mono), monospace",
                letterSpacing: "1px",
                whiteSpace: "nowrap",
                padding: "6px 16px",
                border: "1px solid rgba(255, 255, 255, 0.06)",
                borderRadius: "20px",
                background: "rgba(255, 255, 255, 0.02)",
              }}
            >
              {lang}
            </span>
          ))}
        </div>
      </motion.div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          zIndex: 10,
        }}
      >
        <span style={{ fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase", color: "rgba(255, 255, 255, 0.25)", fontFamily: "var(--font-inter), sans-serif" }}>
          Scroll
        </span>
        <div style={{ width: "1px", height: "30px", background: "linear-gradient(to bottom, rgba(139, 92, 246, 0.6), transparent)", transformOrigin: "top", animation: "scroll-line 2s ease-in-out infinite" }} />
      </motion.div>
    </section>
  );
}
