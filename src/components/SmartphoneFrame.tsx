"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MobileLockScreen from "./IDE/MobileLockScreen";
import MobileOS from "./IDE/MobileOS";

export default function SmartphoneFrame() {
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
    }, 400); // Wait for the zoom animation to hide the frame
  };

  const handleExit = () => {
    setIsInside(false);
    setIsZooming(false);
    window.location.hash = ''; // Clear hash on exit
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
            <div style={{ position: "absolute", top: "15%", left: "5%", width: "80vw", height: "80vw", background: "radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(60px)", mixBlendMode: "screen", animation: "float-orb-2 22s ease-in-out infinite" }} />
            <div style={{ position: "absolute", bottom: "10%", right: "0%", width: "90vw", height: "90vw", background: "radial-gradient(circle, rgba(236, 72, 153, 0.18) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(80px)", mixBlendMode: "screen", animation: "float-orb-3 26s ease-in-out infinite" }} />
          </motion.div>
        )}
        
        {/* ── Smartphone Container ── */}
        <motion.div 
          initial={{ y: 200, scale: 0.6, opacity: 0, rotateX: 30, rotateY: -10, rotateZ: -5 }}
          whileInView={isZooming ? {} : { y: 0, scale: 0.9, opacity: 1, rotateX: 0, rotateY: 0, rotateZ: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          animate={isZooming ? { 
            scale: 2.5, // Zoom rapidly into the screen
            opacity: 0,
            y: 0,
            rotateX: 0
          } : undefined}
          transition={{ type: "spring", damping: 14, stiffness: 90, mass: 1.2 }}
          style={{ 
            originX: 0.5,
            originY: 0.5, 
            width: "320px", 
            height: "640px",
            position: "relative",
            zIndex: 10,
            marginTop: "0px",
            transformPerspective: 1200,
          }}
        >
          {/* Ambient Glow */}
          <motion.div 
            animate={{ opacity: isZooming ? 0 : 1 }}
            style={{
              position: "absolute", inset: "-40px",
              background: "radial-gradient(ellipse at 50% 50%, rgba(139, 92, 246, 0.2) 0%, rgba(236, 72, 153, 0.1) 40%, rgba(0, 0, 0, 0) 70%)",
              zIndex: 1, filter: "blur(40px)", pointerEvents: "none",
            }}
          />

          {/* ── Smartphone Chassis ── */}
          <motion.div 
            animate={{ opacity: isZooming ? 0 : 1, filter: isZooming ? "blur(10px)" : "blur(0px)" }}
            transition={{ duration: 0.6 }}
            style={{
              position: "absolute", inset: "-12px",
              backgroundColor: "#0d0d15", borderRadius: "40px", zIndex: 5, pointerEvents: "none",
              boxShadow: "0 0 0 2px rgba(139, 92, 246, 0.2), inset 0 0 6px 2px rgba(0,0,0,0.9), 0 30px 60px rgba(0,0,0,0.8), 0 0 40px rgba(139, 92, 246, 0.1)"
            }}
          >
            {/* Dynamic Island Notch */}
            <div style={{ position: "absolute", top: "18px", left: "50%", transform: "translateX(-50%)", width: "90px", height: "26px", backgroundColor: "#000", borderRadius: "20px", zIndex: 50, boxShadow: "inset 0 0 4px rgba(255,255,255,0.1)" }}>
               {/* Camera Lens */}
               <div style={{ position: "absolute", right: "6px", top: "6px", width: "14px", height: "14px", backgroundColor: "#0a0a12", borderRadius: "50%", boxShadow: "inset 0 0 2px #000" }}>
                 <div style={{ width: "6px", height: "6px", backgroundColor: "#06060a", borderRadius: "50%", position: "absolute", top: "4px", left: "4px" }}>
                    <div style={{ width: "2px", height: "2px", backgroundColor: "#8b5cf6", borderRadius: "50%", boxShadow: "0 0 4px #8b5cf6" }} />
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Screen Glare */}
          <motion.div 
            animate={{ opacity: isZooming ? 0 : 1 }}
            style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255,255,255,0.01) 30%, rgba(0,0,0,0) 100%)",
              borderRadius: "28px", zIndex: 20, pointerEvents: "none",
              boxShadow: "inset 0 0 2px rgba(255,255,255,0.08)"
            }} 
          />

          {/* ── Smartphone Screen ── */}
          <div style={{ width: "100%", height: "100%", backgroundColor: "#020202", position: "relative", zIndex: 10, overflow: "hidden", borderRadius: "28px", backfaceVisibility: "hidden", transformStyle: "preserve-3d", display: "flex", flexDirection: "column", boxShadow: "inset 0 0 20px rgba(0,0,0,0.8)" }}>
            {!isInside && <MobileLockScreen onUnlock={handleStart} />}
          </div>
        </motion.div>

        {/* LAUNCH Button Removed as Slide-to-Unlock is now primary */}
      </div>

      {/* ── Fullscreen Mobile OS Transition ── */}
      <AnimatePresence>
        {isInside && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }} 
            style={{
              position: "fixed", inset: 0, zIndex: 9999,
              backgroundColor: "var(--ide-bg)",
              display: "flex", flexDirection: "column"
            }}
          >
            <MobileOS onExit={handleExit} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
