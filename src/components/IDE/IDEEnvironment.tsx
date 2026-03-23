import LiveCodingIntro from "./LiveCodingIntro";
import WindowManager from "./WindowManager";
import Taskbar from "./Taskbar";

export default function IDEEnvironment({ isFullscreen, onExit }: { isFullscreen?: boolean, onExit?: () => void }) {
  return (
    <>
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        {/* Sidebar */}
        <div style={{ width: "20%", minWidth: "150px", backgroundColor: "var(--sidebar-bg)", borderRight: "1px solid var(--border-color)", padding: "10px" }}>
          <div style={{ color: "#858585", fontSize: "12px", marginBottom: "10px", textTransform: "uppercase", fontFamily: "var(--font-jetbrains-mono), monospace" }}>Explorer</div>
          <div onClick={() => { window.history.pushState(null, "", "#"); window.dispatchEvent(new HashChangeEvent("hashchange")); }} style={{ fontSize: "13px", padding: "4px 0", cursor: "pointer", color: "var(--string-color)", fontFamily: "var(--font-jetbrains-mono), monospace" }}>📄 intro.rb</div>
          <div onClick={() => { window.history.pushState(null, "", "#about"); window.dispatchEvent(new HashChangeEvent("hashchange")); }} style={{ fontSize: "13px", padding: "4px 0", cursor: "pointer", fontFamily: "var(--font-jetbrains-mono), monospace" }}>📄 about_me.md</div>
          <div onClick={() => { window.history.pushState(null, "", "#experience"); window.dispatchEvent(new HashChangeEvent("hashchange")); }} style={{ fontSize: "13px", padding: "4px 0", cursor: "pointer", fontFamily: "var(--font-jetbrains-mono), monospace" }}>📄 experience.sh</div>
          <div onClick={() => { window.history.pushState(null, "", "#projects"); window.dispatchEvent(new HashChangeEvent("hashchange")); }} style={{ fontSize: "13px", padding: "4px 0", cursor: "pointer", fontFamily: "var(--font-jetbrains-mono), monospace" }}>📄 projects.jsx</div>
          <div onClick={() => { window.history.pushState(null, "", "#certs"); window.dispatchEvent(new HashChangeEvent("hashchange")); }} style={{ fontSize: "13px", padding: "4px 0", cursor: "pointer", fontFamily: "var(--font-jetbrains-mono), monospace" }}>📄 certs.txt</div>
        </div>
        
        {/* Main Editor Area */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", position: "relative" }}>
          <div style={{ display: "flex", backgroundColor: "var(--ide-bg)", borderBottom: "1px solid var(--border-color)" }}>
            <div style={{ padding: "8px 16px", backgroundColor: "var(--ide-bg)", color: "var(--string-color)", borderRight: "1px solid var(--border-color)", fontSize: "13px", borderTop: "2px solid var(--keyword-color)", fontFamily: "var(--font-jetbrains-mono), monospace" }}>intro.rb</div>
          </div>
          <div style={{ flex: 1, padding: "20px", overflow: "hidden", position: "relative" }}>
            <LiveCodingIntro />
            <WindowManager />
          </div>
          <div style={{ height: "25%", minHeight: "120px", backgroundColor: "var(--terminal-bg)", borderTop: "1px solid var(--border-color)", padding: "10px", fontSize: "12px", display: "flex", flexDirection: "column" }}>
            <div style={{ color: "var(--text-color)", marginBottom: "5px", borderBottom: "1px solid var(--border-color)", paddingBottom: "5px", fontFamily: "var(--font-jetbrains-mono), monospace" }}>Terminal</div>
            <div style={{ color: "var(--func-color)", fontFamily: "var(--font-jetbrains-mono), monospace" }}>mrm7m@portfolio:~$ <span style={{ color: "var(--text-color)" }}>ruby start_portfolio.rb</span></div>
            <div style={{ color: "var(--string-color)", marginTop: "4px", fontFamily: "var(--font-jetbrains-mono), monospace" }}>&gt; Booting Rails backend...</div>
          </div>
        </div>
      </div>
      <Taskbar isFullscreen={isFullscreen} onExit={onExit} />
    </>
  );
}
