"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CLIEnvironment from "./IDE/CLIEnvironment";
import WindowsDesktop from "./IDE/WindowsDesktop";

export default function LaptopFrame() {
  const [isInside, setIsInside] = useState(false);
  const [isZooming, setIsZooming] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'contact' && !isInside && !isZooming) {
        handleStart();
      }
    };
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, [isInside, isZooming]);

  const handleStart = () => {
    setIsZooming(true);
    setTimeout(() => {
      setIsInside(true);
    }, 400);
  };

  const handleExit = () => {
    setIsInside(false);
    setIsZooming(false);
    window.location.hash = '';
  };

  return (
    <>
      <div style={{ 
        height: "100vh", 
        width: "100vw", 
        position: "relative", 
        display: "flex", 
        flexDirection: "column",
        alignItems: "center", 
        justifyContent: "center", 
        overflow: "hidden",
        scrollSnapAlign: "start",
        gap: "0px",
      }}>
        
        {/* ── Gradient orbs (matching hero palette) ── */}
        {!isInside && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}
          >
            <div style={{ position: "absolute", top: "5%", left: "15%", width: "40vw", height: "40vw", background: "radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(100px)", mixBlendMode: "screen", animation: "float-orb-2 22s ease-in-out infinite" }} />
            <div style={{ position: "absolute", bottom: "10%", right: "10%", width: "45vw", height: "45vw", background: "radial-gradient(circle, rgba(236, 72, 153, 0.18) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(120px)", mixBlendMode: "screen", animation: "float-orb-3 26s ease-in-out infinite" }} />
            <div style={{ position: "absolute", top: "40%", left: "40%", width: "30vw", height: "30vw", background: "radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(90px)", mixBlendMode: "screen", animation: "float-orb-5 20s ease-in-out infinite" }} />
            <div style={{ position: "absolute", inset: 0, backgroundSize: "60px 60px", backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.015) 1px, transparent 1px)", maskImage: "radial-gradient(ellipse at center, black 20%, transparent 75%)", WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 75%)" }} />
          </motion.div>
        )}
        
        {/* ── Laptop Container ── */}
        <motion.div 
          initial={{ y: 300, scale: 0.4, opacity: 0, rotateX: 60, rotateY: -15, rotateZ: -10 }}
          whileInView={isZooming ? {} : { y: 0, scale: 0.85, opacity: 1, rotateX: 0, rotateY: 0, rotateZ: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          animate={isZooming ? { 
            scale: 1.5,
            opacity: 0,
            filter: "blur(20px)",
            y: 0,
            rotateX: 0
          } : undefined}
          transition={{ type: "spring", damping: 14, stiffness: 90, mass: 1.2 }}
          style={{ 
            originX: 0.5,
            originY: 0.25, 
            width: "70vw", 
            maxWidth: "1000px",
            position: "relative",
            zIndex: 10,
            marginTop: "-40px",
            transformPerspective: 1200,
          }}
        >
          {/* Ambient Glow */}
          <motion.div 
            animate={{ opacity: isZooming ? 0 : 1 }}
            style={{
              position: "absolute", inset: "-80px",
              background: "radial-gradient(ellipse at 50% 50%, rgba(139, 92, 246, 0.15) 0%, rgba(236, 72, 153, 0.08) 40%, rgba(0, 0, 0, 0) 70%)",
              zIndex: 1, filter: "blur(60px)", pointerEvents: "none",
            }}
          />

          {/* ── Bezel (Dark Glass) ── */}
          <motion.div 
            animate={{ opacity: isZooming ? 0 : 1, filter: isZooming ? "blur(20px)" : "blur(0px)" }}
            transition={{ duration: 0.6 }}
            style={{
              position: "absolute", top: "-24px", left: "-24px", right: "-24px", bottom: "-24px",
              backgroundColor: "#0d0d15", borderRadius: "16px 16px 0 0", zIndex: 5, pointerEvents: "none",
              boxShadow: "0 0 0 1px rgba(139, 92, 246, 0.15), inset 0 0 4px 1px rgba(0,0,0,0.8), 0 30px 60px rgba(0,0,0,0.8), 0 0 40px rgba(139, 92, 246, 0.05)"
            }}
          >
            <div style={{ position: "absolute", top: "10px", left: "50%", transform: "translateX(-50%)", display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ width: "6px", height: "6px", backgroundColor: "#0a0a12", borderRadius: "50%", boxShadow: "inset 0 0 2px #000" }} />
              <div style={{ width: "8px", height: "8px", backgroundColor: "#050508", borderRadius: "50%", boxShadow: "inset 0 0 3px #000", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "3px", height: "3px", backgroundColor: "#8b5cf6", borderRadius: "50%", boxShadow: "0 0 6px #8b5cf6" }} />
              </div>
              <div style={{ width: "4px", height: "4px", backgroundColor: "#10b981", borderRadius: "50%", boxShadow: "0 0 8px #10b981" }} />
            </div>
          </motion.div>

          {/* Screen Glare */}
          <motion.div 
            animate={{ opacity: isZooming ? 0 : 1, filter: isZooming ? "blur(20px)" : "blur(0px)" }}
            style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(135deg, rgba(139, 92, 246, 0.04) 0%, rgba(255,255,255,0.02) 30%, rgba(0,0,0,0) 100%)",
              borderRadius: "4px", zIndex: 20, pointerEvents: "none",
              boxShadow: "inset 0 0 1px rgba(255,255,255,0.08)"
            }} 
          />

          {/* ── Keyboard Deck (Dark Metallic) ── */}
          <motion.div
            animate={{ opacity: isZooming ? 0 : 1, filter: isZooming ? "blur(20px)" : "blur(0px)" }}
            style={{
              position: "absolute", top: "calc(100% + 24px)", left: "-28px", right: "-28px", height: "60px",
              transformOrigin: "top", transform: "perspective(400px) rotateX(45deg)",
              background: "linear-gradient(to bottom, #1a1a2e 0%, #12121f 100%)", zIndex: 3,
              boxShadow: "inset 0 1px 2px rgba(139, 92, 246, 0.1), inset 0 -1px 0 rgba(0,0,0,0.5)",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", paddingTop: "3px"
            }}
          >
            <div style={{ width: "80%", height: "40px", backgroundColor: "#07070d", borderRadius: "2px", boxShadow: "inset 0 1px 3px rgba(0,0,0,0.8)", display: "flex", flexDirection: "column", gap: "1px", padding: "1.5px 2px" }}>
               {[...Array(6)].map((_, idx) => (
                 <div key={idx} style={{ flex: 1, display: "flex", gap: "1px", paddingLeft: idx + "px", paddingRight: idx + "px" }}>
                   {[...Array(14)].map((_, j) => (
                     <div key={'key'+j} style={{ flex: 1, backgroundColor: "#14142a", borderRadius: "1px", borderBottom: "1px solid #07070d", boxShadow: "0 1px 0 rgba(139, 92, 246, 0.05)" }} />
                   ))}
                 </div>
               ))}
            </div>
            <div style={{ marginTop: "3px", width: "25%", height: "8px", background: "linear-gradient(to bottom, #1a1a2e 0%, #0f0f1e 100%)", borderRadius: "2px", boxShadow: "inset 0 1px 2px rgba(0,0,0,0.4), 0 1px 0 rgba(139, 92, 246, 0.08)" }} />
          </motion.div>

          {/* ── Base Lip ── */}
          <motion.div 
            animate={{ opacity: isZooming ? 0 : 1, filter: isZooming ? "blur(20px)" : "blur(0px)" }}
            style={{
              position: "absolute", top: "calc(100% + 66px)", left: "-36px", right: "-36px", height: "16px",
              background: "linear-gradient(to bottom, #1e1e32 0%, #14142a 40%, #0a0a16 100%)",
              borderRadius: "2px 2px 14px 14px", zIndex: 4,
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.9), inset 0 1px 1px rgba(139, 92, 246, 0.1), inset 0 -1px 3px rgba(0,0,0,0.4)",
              display: "flex", justifyContent: "center", alignItems: "flex-start"
            }}
          >
            <div style={{ width: "120px", height: "6px", background: "linear-gradient(to bottom, #1a1a30 0%, #0e0e1e 100%)", borderRadius: "0 0 6px 6px", boxShadow: "inset 0 2px 4px rgba(0,0,0,0.4)" }} />
          </motion.div>

          {/* Hinge Shadow */}
          <motion.div 
            animate={{ opacity: isZooming ? 0 : 1 }}
            style={{
              position: "absolute", bottom: "-24px", left: "-32px", right: "-32px", height: "4px",
              background: "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 100%)",
              zIndex: 6, pointerEvents: "none"
            }}
          />

          {/* ── Laptop Screen ── */}
          <div style={{ width: "100%", aspectRatio: "16/10", backgroundColor: "#020202", position: "relative", zIndex: 10, overflow: "hidden", borderRadius: "4px", backfaceVisibility: "hidden", transformStyle: "preserve-3d", display: "flex", flexDirection: "column", boxShadow: "inset 0 0 20px rgba(0,0,0,0.8)" }}>
            {!isInside && <CLIEnvironment />}
          </div>
        </motion.div>

        {/* ── Enter Workspace Button (inside section, below laptop) ── */}
        <AnimatePresence>
          {!isZooming && !isInside && (
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.5, rotateX: -45 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.4 }}
              style={{
                position: "relative",
                zIndex: 100,
                marginTop: "80px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <motion.button
                onClick={handleStart}
                whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(139, 92, 246, 0.3), 0 0 80px rgba(236, 72, 153, 0.15)" }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
                  border: "none",
                  borderRadius: "14px",
                  padding: "16px 48px",
                  color: "white",
                  fontSize: "15px",
                  fontWeight: 700,
                  fontFamily: "var(--font-inter), sans-serif",
                  letterSpacing: "1px",
                  cursor: "pointer",
                  boxShadow: "0 0 30px rgba(139, 92, 246, 0.2), 0 0 60px rgba(236, 72, 153, 0.1), 0 8px 30px rgba(0,0,0,0.4)",
                  textTransform: "uppercase",
                }}
              >
                Enter Workspace
              </motion.button>
              <span style={{
                fontSize: "10px",
                letterSpacing: "2px",
                color: "rgba(255, 255, 255, 0.2)",
                fontFamily: "var(--font-jetbrains-mono), monospace",
                textTransform: "uppercase",
              }}>
                click to explore
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Fullscreen Desktop Transition ── */}
      <AnimatePresence>
        {isInside && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }} 
            style={{
              position: "fixed", inset: 0, zIndex: 9999,
              backgroundColor: "var(--ide-bg)",
              display: "flex", flexDirection: "column"
            }}
          >
            <WindowsDesktop onExit={handleExit} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
