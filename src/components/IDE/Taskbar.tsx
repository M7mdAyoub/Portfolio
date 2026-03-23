"use client";

import { useEffect, useState } from "react";
import { Coffee, FolderArchive, GraduationCap, LayoutDashboard, Power } from "lucide-react";

export default function Taskbar({ isFullscreen, onExit }: { isFullscreen?: boolean, onExit?: () => void }) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const openWindow = (windowId: string) => {
    window.history.pushState(null, "", "#" + windowId);
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  };

  if (!mounted) return null;

  return (
    <div style={{
      height: "48px",
      backgroundColor: "var(--bezel-color)",
      borderTop: "1px solid var(--border-color)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      zIndex: 100
    }}>
      {/* Start Button / Logo */}
      <div 
        onClick={() => { window.history.pushState(null, "", "#"); window.dispatchEvent(new HashChangeEvent("hashchange")); window.scrollTo(0,0); }}
        style={{ padding: "8px", margin: "0 10px", cursor: "pointer", color: "var(--keyword-color)" }}
      >
        <LayoutDashboard size={20} />
      </div>

      <div style={{ width: "1px", height: "50%", backgroundColor: "var(--border-color)", margin: "0 5px" }} />

      <TaskbarIcon icon={<FolderArchive size={20} />} label="Projects" onClick={() => openWindow('projects')} />
      <TaskbarIcon icon={<Coffee size={20} />} label="Experience" onClick={() => openWindow('experience')} />
      <TaskbarIcon icon={<GraduationCap size={20} />} label="Certs" onClick={() => openWindow('certs')} />
      
      {isFullscreen && onExit && (
        <>
          <div style={{ width: "1px", height: "50%", backgroundColor: "var(--border-color)", margin: "0 5px" }} />
          <div 
            onClick={onExit}
            style={{ padding: "8px", cursor: "pointer", color: "#ff5f56" }}
            title="Log Out (Close Desktop)"
          >
            <Power size={20} />
          </div>
        </>
      )}
    </div>
  );
}

function TaskbarIcon({ icon, label, onClick }: { icon: React.ReactNode, label: string, onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "6px 12px",
        cursor: "pointer",
        borderRadius: "4px",
        transition: "background 0.2s",
      }}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "var(--border-color)"}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
      title={label}
    >
      <div style={{ color: "var(--text-color)" }}>{icon}</div>
    </div>
  );
}
