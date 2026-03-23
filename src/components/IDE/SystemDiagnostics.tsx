"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LOGS = [
  "KERNEL: BOOT_STAGE_1 [OK]",
  "VFS: MOUNTING FS... [OK]",
  "NET: STACK INITIALIZED",
  "SYS: DRIVERS LOADED",
  "UI: RENDERING CORE",
  "SEC: BIOMETRICS ACTIVE",
  "MEM: OPTIMIZING CACHE",
  "PROC: MULTI-CORE READY",
  "SYNC: CLOUD RADIUS",
  "RADIO: 5G/NR ACTIVE",
  "GPS: LOCK ACQUIRED",
  "AUTH: HANDSHAKE COMPLETED",
];

export default function SystemDiagnostics() {
  const [activeLogs, setActiveLogs] = useState<string[]>([]);
  const [scanPulse, setScanPulse] = useState(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setActiveLogs(prev => [...prev.slice(-8), LOGS[i % LOGS.length]]);
      i++;
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ 
      width: "100%", 
      height: "100%", 
      backgroundColor: "#050508", 
      position: "relative",
      overflow: "hidden",
      fontFamily: "var(--font-jetbrains-mono), monospace",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      {/* Background Grid */}
      <div style={{ 
        position: "absolute", inset: 0, 
        backgroundImage: "radial-gradient(rgba(139, 92, 246, 0.15) 1px, transparent 1px)", 
        backgroundSize: "30px 30px",
        opacity: 0.5
      }} />

      {/* Central Pulsing Core */}
      <div style={{ position: "relative", width: "160px", height: "160px", zIndex: 10 }}>
        {/* Outer Ring */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute", inset: 0,
            border: "2px dashed rgba(139, 92, 246, 0.3)",
            borderRadius: "50%"
          }}
        />
        {/* Middle Ring */}
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute", inset: "20px",
            border: "1px solid rgba(236, 72, 153, 0.4)",
            borderRadius: "50%"
          }}
        />
        {/* Core Glow */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute", inset: "40px",
            background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(15px)"
          }}
        />
        {/* Center Point */}
        <div style={{ 
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
          width: "8px", height: "8px", backgroundColor: "white", borderRadius: "50%",
          boxShadow: "0 0 15px #8b5cf6"
        }} />
      </div>

      {/* Scanning Line */}
      <motion.div 
        animate={{ top: ["10%", "90%", "10%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute", left: "10%", right: "10%", height: "2px",
          background: "linear-gradient(90deg, transparent, #ec4899, transparent)",
          zIndex: 5,
          boxShadow: "0 0 15px rgba(236, 72, 153, 0.5)"
        }}
      />

      {/* Scrolling Logs */}
      <div style={{ 
        position: "absolute", bottom: "40px", left: "20px", right: "20px", 
        display: "flex", flexDirection: "column", gap: "4px", opacity: 0.8 
      }}>
        {activeLogs.map((log, idx) => (
          <motion.div 
            key={idx + log}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1 - (activeLogs.length - 1 - idx) * 0.12, x: 0 }}
            style={{ fontSize: "10px", color: log.includes("[OK]") ? "#10b981" : "#8b5cf6" }}
          >
            <span style={{ opacity: 0.4, marginRight: "8px" }}>[{new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}]</span>
            {log}
          </motion.div>
        ))}
      </div>

      {/* Status Indicators */}
      <div style={{ position: "absolute", top: "60px", left: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#10b981", boxShadow: "0 0 8px #10b981" }} />
          <span style={{ fontSize: "10px", color: "white", opacity: 0.7, letterSpacing: "1px" }}>SYSTEM: ACTIVE</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#8b5cf6", boxShadow: "0 0 8px #8b5cf6" }} />
          <span style={{ fontSize: "10px", color: "white", opacity: 0.7, letterSpacing: "1px" }}>DATA: ENCRYPTED</span>
        </div>
      </div>

      {/* Corner UI Accents */}
      <div style={{ position: "absolute", top: "40px", right: "20px", textAlign: "right" }}>
        <div style={{ fontSize: "18px", fontWeight: 800, color: "white", opacity: 0.2 }}>PORT_OS v2.0</div>
        <div style={{ fontSize: "9px", color: "#ec4899", fontWeight: 700, letterSpacing: "1px" }}>MOBILE_INSTANCE</div>
      </div>
    </div>
  );
}
