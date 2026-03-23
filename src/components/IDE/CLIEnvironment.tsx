"use client";

import LiveCodingIntro from "./LiveCodingIntro";

export default function CLIEnvironment() {
  return (
    <div style={{ 
      width: "100%", 
      height: "100%", 
      backgroundColor: "#282a36", // Dracula default bg
      display: "flex", 
      flexDirection: "column",
      position: "relative",
      boxShadow: "inset 0 0 40px rgba(0,0,0,0.5)",
      fontFamily: "var(--font-jetbrains-mono), monospace"
    }}>
      {/* Top Window Bar */}
      <div style={{ height: "36px", backgroundColor: "#21222c", display: "flex", alignItems: "center", padding: "0 16px", zIndex: 10, borderBottom: "1px solid #191a21" }}>
        {/* Mac OS Traffic Lights */}
        <div style={{ display: "flex", gap: "8px", marginRight: "20px" }}>
          <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#ff5f56", border: "1px solid #e0443e" }} />
          <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#ffbd2e", border: "1px solid #dea123" }} />
          <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#27c93f", border: "1px solid #1aab29" }} />
        </div>
        
        {/* Tabs */}
        <div style={{ display: "flex", height: "100%" }}>
          <div style={{ 
            display: "flex", alignItems: "center", padding: "0 16px", 
            backgroundColor: "#282a36", color: "#f8f8f2", fontSize: "12px", 
            borderTop: "2px solid #ff79c6",
            borderRight: "1px solid #191a21",
            borderLeft: "1px solid #191a21",
            marginTop: "6px",
            borderRadius: "6px 6px 0 0"
          }}>
            <span style={{ color: "#ff79c6", marginRight: "8px" }}>♦</span> cv.rb
            <span style={{ marginLeft: "12px", opacity: 0.5, fontSize: "10px" }}>x</span>
          </div>
          <div style={{ 
            display: "flex", alignItems: "center", padding: "0 16px", 
            backgroundColor: "#21222c", color: "#6272a4", fontSize: "12px", 
            marginTop: "6px"
          }}>
            <span style={{ color: "#8be9fd", marginRight: "8px" }}>#</span> styles.css
          </div>
        </div>
      </div>

      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        {/* Activity Bar (Sidebar Tools) */}
        <div style={{ 
          width: "48px", backgroundColor: "#21222c", display: "flex", flexDirection: "column", 
          alignItems: "center", paddingTop: "12px", gap: "20px", borderRight: "1px solid #191a21",
          zIndex: 10
        }}>
          <div style={{ width: "24px", height: "2px", backgroundColor: "#f8f8f2", boxShadow: "0 -6px 0 #f8f8f2, 0 6px 0 #f8f8f2", opacity: 0.8 }} />
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6272a4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6272a4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V6M9 12l3-3 3 3"></path></svg>
        </div>

        {/* Primary Sidebar (Explorer) */}
        <div style={{ 
          width: "180px", backgroundColor: "#1e1f29", padding: "16px 12px", 
          color: "#6272a4", fontSize: "12px", borderRight: "1px solid #191a21" 
        }}>
          <div style={{ marginBottom: "16px", fontSize: "10px", fontWeight: "bold", letterSpacing: "1px", textTransform: "uppercase" }}>Explorer</div>
          <div style={{ color: "#f8f8f2", marginBottom: "8px", display: "flex", alignItems: "center", fontWeight: "bold", fontSize: "11px" }}>
            <span style={{ marginRight: "6px", fontSize: "10px" }}>▼</span> SOURCE_CORE
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", paddingLeft: "14px" }}>
            <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}><span style={{ color: "#f1fa8c", marginRight: "8px" }}>Dart</span> pta_mobile.dart</div>
            <div style={{ backgroundColor: "#3a3c4e", padding: "4px 8px", margin: "-4px -8px", borderRadius: "4px", color: "#f8f8f2", display: "flex", alignItems: "center" }}><span style={{ color: "#ff79c6", marginRight: "8px" }}>♦</span> cv.rb</div>
            <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}><span style={{ color: "#8be9fd", marginRight: "8px" }}>C</span> unidb_kernel.c</div>
            <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}><span style={{ color: "#50fa7b", marginRight: "8px" }}>CS</span> naturedesk.cs</div>
          </div>
        </div>

        {/* Editor Area */}
        <div style={{ flex: 1, position: "relative", backgroundColor: "#282a36" }}>
          <LiveCodingIntro />
        </div>
      </div>

      {/* StatusBar */}
      <div style={{ 
        height: "22px", backgroundColor: "#ff79c6", display: "flex", alignItems: "center", 
        padding: "0 12px", color: "#282a36", fontSize: "11px", justifyContent: "space-between",
        fontWeight: "bold", zIndex: 10
      }}>
        <div style={{ display: "flex", gap: "16px" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19V6M9 12l3-3 3 3"></path></svg>
            main*
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            0
          </span>
        </div>
        <div style={{ display: "flex", gap: "16px" }}>
          <span>Ln 21, Col 1</span>
          <span>Spaces: 2</span>
          <span>UTF-8</span>
          <span>Ruby</span>
        </div>
      </div>
    </div>
  );
}
