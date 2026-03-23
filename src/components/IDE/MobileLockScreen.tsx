"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Mail, Github, Bell, ChevronUp } from "lucide-react";

const NOTIFICATIONS = [
  {
    id: 1,
    app: "Profile",
    icon: <Mail size={14} color="#fff" />,
    color: "#8b5cf6",
    title: "Mohammad Ayoub",
    message: "Computer Science @ HTU. Full-Stack Developer specializing in C#, Next.js & Flutter.",
    time: "now"
  },
  {
    id: 2,
    app: "Featured",
    icon: <Github size={14} color="#fff" />,
    color: "#333",
    title: "UniDB Kernel",
    message: "Relational database system with binary storage & hash-indexing built from scratch in C.",
    time: "2m ago"
  }
];

export default function MobileLockScreen({ onUnlock }: { onUnlock: () => void }) {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  
  const y = useMotionValue(0);
  const opacity = useTransform(y, [0, -150], [0.4, 0]);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }));
      setDate(now.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' }));
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.y < -100) {
      onUnlock();
    }
  };

  return (
    <div style={{ 
      width: "100%", 
      height: "100%", 
      backgroundColor: "#000", 
      position: "relative",
      overflow: "hidden",
      fontFamily: "var(--font-inter), sans-serif",
      color: "white",
      userSelect: "none"
    }}>
      {/* Wallpaper Background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <div style={{ position: "absolute", top: "-10%", left: "-10%", width: "120%", height: "120%", 
             background: "radial-gradient(circle at center, rgba(139, 92, 246, 0.25) 0%, #000 70%)" }} />
             <div style={{ position: "absolute", bottom: "10%", right: "10%", width: "60%", height: "60%", 
             background: "radial-gradient(circle at center, rgba(236, 72, 153, 0.2) 0%, transparent 70%)", filter: "blur(40px)" }} />
      </div>

      {/* Clock & Date Area */}
      <div style={{ position: "relative", zIndex: 10, paddingTop: "60px", textAlign: "center" }}>
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          style={{ fontSize: "64px", fontWeight: 700, letterSpacing: "-2px", margin: 0, color: "rgba(255,255,255,0.9)" }}
        >
          {time}
        </motion.h1>
        <motion.p 
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          style={{ fontSize: "16px", fontWeight: 500, marginTop: "2px", color: "rgba(255,255,255,0.8)" }}
        >
          {date}
        </motion.p>
      </div>

      {/* Notifications Container */}
      <div style={{ position: "relative", zIndex: 10, marginTop: "40px", padding: "0 16px", display: "flex", flexDirection: "column", gap: "8px" }}>
        <div style={{ fontSize: "10px", fontWeight: 700, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "2px", display: "flex", alignItems: "center", gap: "6px" }}>
          <Bell size={10} /> Notifications
        </div>
        
        {NOTIFICATIONS.map((notif, idx) => (
          <motion.div
            key={notif.id}
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.2 + idx * 0.1 }}
            style={{
              padding: "12px 14px",
              backgroundColor: "rgba(255, 255, 255, 0.12)",
              backdropFilter: "blur(25px)",
              borderRadius: "18px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              flexDirection: "column",
              gap: "3px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.4)"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "20px", height: "20px", backgroundColor: notif.color, borderRadius: "5px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {notif.icon}
                </div>
                <span style={{ fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>{notif.app}</span>
              </div>
              <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)" }}>{notif.time}</span>
            </div>
            <div style={{ paddingLeft: "1px", marginTop: "2px" }}>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "white" }}>{notif.title}</div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.75)", lineHeight: "1.4", marginTop: "1px" }}>{notif.message}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Unlock Indication / Swipe Area */}
      <div style={{ position: "absolute", bottom: "40px", left: 0, right: 0, textAlign: "center", zIndex: 20 }}>
        <motion.div 
          drag="y"
          dragConstraints={{ top: -200, bottom: 0 }}
          onDragEnd={handleDragEnd}
          style={{ 
            y, 
            cursor: "grab", 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            gap: "10px" 
          }}
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", color: "rgba(255,255,255,0.5)" }}
          >
            <ChevronUp size={24} strokeWidth={3} />
            <span style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", marginTop: "-4px" }}>Slide to Unlock</span>
          </motion.div>
          <motion.div 
            style={{ opacity, width: "140px", height: "5px", backgroundColor: "white", borderRadius: "3px", boxShadow: "0 0 10px rgba(255,255,255,0.3)" }} 
          />
        </motion.div>
      </div>

      {/* Camera/Flashlight bypass buttons (Visual only) */}
      <div style={{ position: "absolute", bottom: "40px", left: "30px", width: "50px", height: "50px", backgroundColor: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.5 }}>
         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M5 3l14 9-14 9V3z"/></svg>
      </div>
      <div style={{ position: "absolute", bottom: "40px", right: "30px", width: "50px", height: "50px", backgroundColor: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.5 }}>
         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
      </div>
    </div>
  );
}
