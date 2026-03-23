"use client";

import { useEffect, useState } from "react";
import { LayoutGrid, Power } from "lucide-react";
import { WINDOW_DATA } from "./WindowsDesktop";

interface WindowsTaskbarProps {
  focusStack: string[];
  minimized: string[];
  onIconClick: (id: string) => void;
  onExit?: () => void;
}

export default function WindowsTaskbar({ focusStack, minimized, onIconClick, onExit }: WindowsTaskbarProps) {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState("");
  
  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div style={{
      height: "48px",
      backgroundColor: "rgba(15, 23, 42, 0.65)",
      backdropFilter: "blur(20px)",
      borderTop: "1px solid rgba(255,255,255,0.1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 15px",
      zIndex: 10000
    }}>
      {/* Left items - Widgets area */}
      <div style={{ display: "flex", alignItems: "center", width: "150px" }}>
        {/* Placeholder */}
      </div>

      {/* Center - Win11 Style Centered Icons */}
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <div 
          onClick={() => { window.history.pushState(null, "", "#"); window.dispatchEvent(new HashChangeEvent("hashchange")); }}
          style={{ padding: "8px", borderRadius: "4px", cursor: "pointer", color: "#00a4ef", transition: "background 0.2s", margin: "0 5px" }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)"}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
          title="Start"
        >
          <LayoutGrid size={22} fill="currentColor" />
        </div>

        {/* Dynamic Icons for Open Windows */}
        {focusStack.map((id) => {
          const data = (WINDOW_DATA as Record<string, any>)[id];
          if (!data) return null;
          return (
            <TaskbarIcon 
              key={id}
              id={id}
              icon={data.icon} 
              label={data.title} 
              onClick={() => onIconClick(id)} 
              isFocused={focusStack[focusStack.length - 1] === id}
              isMinimized={minimized.includes(id)}
            />
          );
        })}
      </div>

      {/* Right - System Tray */}
      <div style={{ display: "flex", alignItems: "center", gap: "15px", width: "150px", justifyContent: "flex-end", color: "white", fontSize: "12px", fontFamily: "sans-serif" }}>
        <div>{time}</div>
        {onExit && (
          <div 
            onClick={onExit}
            style={{ padding: "6px", cursor: "pointer", color: "#ff5f56", borderRadius: "4px" }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)"}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
            title="Log Out (Close Desktop)"
          >
            <Power size={18} />
          </div>
        )}
      </div>
    </div>
  );
}

function TaskbarIcon({ icon, label, onClick, isFocused, isMinimized }: { icon: React.ReactNode, label: string, onClick: () => void, isFocused: boolean, isMinimized: boolean, id: string }) {
  return (
    <div 
      onDoubleClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "40px",
        height: "40px",
        cursor: "pointer",
        borderRadius: "4px",
        transition: "background 0.2s",
        position: "relative",
        background: isFocused ? "rgba(255,255,255,0.1)" : "transparent"
      }}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.15)"}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = isFocused ? "rgba(255,255,255,0.1)" : "transparent"}
      title={label}
    >
      <div style={{ color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>{icon}</div>
      <div style={{ 
        position: "absolute", 
        bottom: 4, 
        width: isFocused ? "12px" : (isMinimized ? "4px" : "6px"), 
        height: "3px", 
        backgroundColor: isFocused ? "#00a4ef" : (isMinimized ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.6)"), 
        borderRadius: "2px",
        transition: "all 0.2s"
      }} />
    </div>
  );
}
