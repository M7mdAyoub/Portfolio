"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import WindowManager from "./WindowManager";
import WindowsTaskbar from "./WindowsTaskbar";
import { FolderArchive, User, Briefcase, GraduationCap, Smartphone, Globe, Database, FileText, Image, Mail } from "lucide-react";

// Centralized Window Registry with real data from Mohammad's portfolio
export const WINDOW_DATA: Record<string, { title: string, color: string, icon: React.ReactNode, width?: string, height?: string }> = {
  about: { title: "Mohammad_Ayoub.md", color: "#6366f1", icon: <User size={20} /> },
  projects: { title: "Portfolio_Gallery.exe", color: "#f59e0b", icon: <FolderArchive size={20} /> },
  experience: { title: "Career_Timeline.sh", color: "#10b981", icon: <Briefcase size={20} /> },
  certs: { title: "Verified_Credentials.txt", color: "#06b6d4", icon: <GraduationCap size={20} /> },
  contact: { title: "Contact_Me.exe", color: "#8b5cf6", icon: <Mail size={20} />, width: "500px", height: "550px" },
  
  // Project Viewers
  project_pta: { title: "PTA_Mobile_App.apk", color: "#06b6d4", icon: <Smartphone size={20} />, width: "800px", height: "700px" },
  project_chickanji: { title: "Chickanji_Web.php", color: "#f59e0b", icon: <Globe size={20} />, width: "900px", height: "750px" },
  project_unidb: { title: "UniDB_Kernel.c", color: "#ec4899", icon: <Database size={20} />, width: "950px", height: "750px" },
  project_naturedesk: { title: "NatureDesk_Enterprise.cs", color: "#8b5cf6", icon: <Briefcase size={20} />, width: "950px", height: "750px" },

  // Certification Viewers
  cert_vatrenas: { title: "Vatrenas_Internship.pdf", color: "#f59e0b", icon: <FileText size={20} />, width: "500px", height: "650px" },
  cert_redhat: { title: "Red_Hat_Admin.pdf", color: "#ef4444", icon: <FileText size={20} />, width: "500px", height: "650px" },
  cert_pandas: { title: "DataCamp_Pandas.png", color: "#06b6d4", icon: <Image size={20} />, width: "600px", height: "450px" },
  cert_numpy: { title: "DataCamp_NumPy.png", color: "#06b6d4", icon: <Image size={20} />, width: "600px", height: "450px" },
  cert_python_mid: { title: "DataCamp_Python_Intermediate.png", color: "#06b6d4", icon: <Image size={20} />, width: "600px", height: "450px" },
  cert_python_intro: { title: "DataCamp_Python_Intro.png", color: "#06b6d4", icon: <Image size={20} />, width: "600px", height: "450px" },
};

export default function WindowsDesktop({ onExit }: { onExit?: () => void }) {
  const desktopRef = useRef<HTMLDivElement>(null);
  const [focusStack, setFocusStack] = useState<string[]>([]);
  const [minimized, setMinimized] = useState<string[]>([]);
  const [maximized, setMaximized] = useState<string[]>([]);
  
  const focusStackRef = useRef<string[]>([]);
  focusStackRef.current = focusStack;

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && (WINDOW_DATA as Record<string, any>)[hash]) {
        openAndFocus(hash);
      } else if (!hash) {
        setFocusStack([]);
      }
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const openAndFocus = (id: string) => {
    // Un-minimize if it was minimized
    setMinimized(prev => prev.filter(w => w !== id));
    
    const currentStack = focusStackRef.current;
    if (currentStack[currentStack.length - 1] === id && currentStack.length > 0) return;
    setFocusStack(prev => {
      const without = prev.filter(w => w !== id);
      return [...without, id];
    });
  };

  const closeWindow = (id: string) => {
    setFocusStack(prev => prev.filter(w => w !== id));
    setMinimized(prev => prev.filter(w => w !== id));
    setMaximized(prev => prev.filter(w => w !== id));
    if (focusStackRef.current[focusStackRef.current.length - 1] === id) {
      window.history.pushState(null, "", window.location.pathname + window.location.search);
    }
  };

  const toggleMinimize = (id: string) => {
    setMinimized(prev => prev.includes(id) ? prev.filter(w => w !== id) : [...prev, id]);
  };

  const toggleMaximize = (id: string) => {
    setMaximized(prev => prev.includes(id) ? prev.filter(w => w !== id) : [...prev, id]);
  };

  const handleTaskbarClick = (id: string) => {
    const isMinimized = minimized.includes(id);
    const isFocused = focusStack[focusStack.length - 1] === id;

    if (isMinimized) {
      openAndFocus(id);
    } else if (isFocused) {
      toggleMinimize(id);
    } else {
      openAndFocus(id);
    }
  };

  return (
    <div 
      ref={desktopRef}
      style={{ 
        width: "100%", 
        height: "100%", 
        background: "url('/win11_bloom.png') center/cover no-repeat",
        backgroundColor: "#0f172a",
        display: "flex", 
        flexDirection: "column", 
        position: "relative", 
        overflow: "hidden" 
      }}
    >
      
      {/* Draggable Desktop Icons (Folders) - Lower Z-Index */}
      <div style={{ position: "absolute", top: 20, left: 20, zIndex: 1, display: "flex", flexDirection: "column", gap: "20px" }}>
         <DesktopIcon dragConstraints={desktopRef} label="About Me" onClick={() => triggerHash('about')} />
         <DesktopIcon dragConstraints={desktopRef} label="Projects" onClick={() => triggerHash('projects')} />
         <DesktopIcon dragConstraints={desktopRef} label="Experience" onClick={() => triggerHash('experience')} />
         <DesktopIcon dragConstraints={desktopRef} label="Certificates" onClick={() => triggerHash('certs')} />
         <DesktopIcon dragConstraints={desktopRef} label="Contact Me" icon={<Mail size={56} strokeWidth={1.2} color="#8b5cf6" fill="rgba(139, 92, 246, 0.4)" />} onClick={() => triggerHash('contact')} />
      </div>

      {/* Main Area - Elevated Z-Index - Pointer-Events: None allows clicks to pass through to icons */}
      <div style={{ flex: 1, position: "relative", zIndex: 10, pointerEvents: "none" }}>
        <WindowManager 
          focusStack={focusStack} 
          minimized={minimized}
          maximized={maximized}
          onClose={closeWindow} 
          onFocus={openAndFocus} 
          onMinimize={toggleMinimize}
          onMaximize={toggleMaximize}
        />
      </div>

      <WindowsTaskbar 
        focusStack={focusStack} 
        minimized={minimized}
        onIconClick={handleTaskbarClick}
        onExit={onExit} 
      />
    </div>
  );
}

function triggerHash(hash: string) {
  window.history.pushState(null, "", "#" + hash);
  window.dispatchEvent(new HashChangeEvent("hashchange"));
}

function DesktopIcon({ label, onClick, dragConstraints, icon }: { label: string, onClick: () => void, dragConstraints: React.RefObject<HTMLDivElement | null>, icon?: React.ReactNode }) {
  return (
    <motion.div 
      drag
      dragConstraints={dragConstraints}
      dragElastic={0.05}
      dragMomentum={false}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onDoubleClick={onClick} // Double-click to open
      style={{ 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        width: "100px", 
        cursor: "pointer", 
        color: "white",
        zIndex: 1,
        userSelect: "none",
        pointerEvents: "auto" 
      }}
    >
      <div 
        style={{ 
          padding: "12px", 
          borderRadius: "10px", 
          marginBottom: "6px",
          backgroundColor: "transparent",
          transition: "background 0.2s",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "70px",
          height: "70px"
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.15)"}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
      >
        {icon || <FolderArchive size={56} strokeWidth={1.2} color="#fcd34d" fill="rgba(252, 211, 77, 0.4)" />}
      </div>
      <div style={{ 
        fontSize: "12px", 
        textAlign: "center", 
        textShadow: "0 1px 4px rgba(0,0,0,0.8)", 
        fontFamily: "var(--font-jetbrains-mono), monospace",
        fontWeight: "500",
        maxWidth: "120px",
        lineHeight: "1.2"
      }}>{label}</div>
    </motion.div>
  );
}
