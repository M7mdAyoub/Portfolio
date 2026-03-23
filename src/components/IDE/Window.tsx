"use client";

import { useState, useEffect, useRef } from "react";
import { Rnd } from "react-rnd";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Square, X, FolderArchive, User, MapPin, Briefcase, Smartphone, Globe, Database, ChevronLeft, ChevronRight, Award, ShieldCheck, Cpu, Layers, Layout, Terminal, Server, Zap, Search, GitBranch, Box, FileCode, Palette, Flame, Cloud, Mail, Linkedin, Github } from "lucide-react";

const ALL_SKILLS = [
  { name: "C# / ASP.NET Core", category: "Backend Framework" },
  { name: "JavaScript", category: "Core Language" },
  { name: "Node.js / Express", category: "Backend Runtime" },
  { name: "Next.js", category: "Modern Frontend" },
  { name: "HTML / CSS", category: "Web Foundations" },
  { name: "Flutter", category: "Mobile UX" },
  { name: "Firebase", category: "BaaS / Auth" },
  { name: "C", category: "Systems Programming" },
  { name: "Python", category: "Scripting / AI" },
  { name: "SQL Server", category: "Database" },
  { name: "PHP / XAMPP", category: "Classic Web Stack" },
  { name: "Odoo ERP", category: "Enterprise" },
  { name: "GitHub", category: "Version Control" },
  { name: "Docker", category: "Containerization" },
  { name: "Bootstrap", category: "UI Framework" },
  { name: "Redis", category: "Caching" },
  { name: "Elasticsearch", category: "Search Tech" },
  { name: "Red Hat", category: "System Admin" },
  { name: "Ruby on Rails", category: "Backend Framework" },
  { name: "Cloud Computing", category: "Infrastructure" },
];

const PROJECT_GALLERIES: Record<string, { images: string[], labels?: string[] }> = {
  project_pta: {
    images: ["/pta/landingpage.jpg", "/pta/loginpage.jpg", "/pta/playerdashboard.jpg", "/pta/createpasswordpage.jpg", "/pta/playerinfopage.jpg", "/pta/attendancepage.jpg", "/pta/childrenlist.jpg", "/pta/paymentpage.jpg", "/pta/eventspage.jpg", "/pta/eventsdetailspage.jpg"],
    labels: ["Landing Screen", "Login", "Player Dashboard", "Setup Password", "Profile Details", "Attendance Log", "Children Management", "Payment Record", "Upcoming Events", "Event Logistics"]
  },
  project_unidb: {
    images: ["/unidb/01_login.png", "/unidb/02_dashboard.png", "/unidb/03_students.png", "/unidb/04_courses.png", "/unidb/05_instructors.png", "/unidb/06_enrollments.png", "/unidb/07_payments.png", "/unidb/08_assignments.png", "/unidb/09_activity_log.png"],
    labels: ["Login", "Dashboard", "Students", "Courses", "Instructors", "Enrollments", "Payments", "Assignments", "Activity Log"]
  },
  project_naturedesk: {
    images: ["/naturedesk/01_landing_page.png", "/naturedesk/02_landing_features.png", "/naturedesk/03_landing_cta.png", "/naturedesk/04_login_english.png", "/naturedesk/05_login_arabic.png", "/naturedesk/06_dashboard.png", "/naturedesk/07_tickets_list.png", "/naturedesk/08_categories_list.png", "/naturedesk/09_users_list.png", "/naturedesk/10_create_ticket.png", "/naturedesk/11_ticket_details.png"],
    labels: ["Landing Page", "Features", "Call to Action", "Login (EN)", "Login (AR)", "Dashboard", "Tickets List", "Categories", "Users List", "Create Ticket", "Ticket Details"]
  },
  project_chickanji: {
    images: ["/chickanji/portfolio_home_1772438436394.png", "/chickanji/portfolio_menu_1772438431068.png", "/chickanji/portfolio_about_1772438441646.png", "/chickanji/portfolio_contact_1772438445792.png", "/chickanji/portfolio_cart_1772438449835.png", "/chickanji/portfolio_cart_1772438456403.png", "/chickanji/portfolio_login_1772438483754.png", "/chickanji/portfolio_signup_1772438484294.png", "/chickanji/portfolio_admin_overview_1772438460834.png", "/chickanji/portfolio_admin_menu_1772438461552.png", "/chickanji/portfolio_admin_add_modal_png_1772439393078.png", "/chickanji/portfolio_admin_edit_modal_png_1772439403419.png", "/chickanji/portfolio_admin_search_png_1772439387071.png"],
    labels: ["Home", "Menu", "About", "Contact", "Cart", "Cart (Filled)", "Login", "Sign Up", "Admin Overview", "Admin Menu", "Admin Add", "Admin Edit", "Admin Search"]
  }
};

interface WindowProps {
  id: string;
  title: string;
  color: string;
  width?: string;
  height?: string;
  zIndex: number;
  isFocused: boolean;
  isMaximized: boolean;
  isMinimized: boolean;
  isAltTabbing: boolean;
  stackIndex: number;
  totalStack: number;
  onClose: () => void;
  onClick: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const formData = new FormData(e.currentTarget);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const result = await response.json();
      if (result.success) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "center" }}>
      <div style={{ textAlign: "center", marginBottom: "25px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: 600, color: "white", marginBottom: "8px" }}>Get in Touch</h2>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px" }}>
          Send a message directly to <strong style={{ color: "#8b5cf6" }}>mrm7md091@gmail.com</strong>
        </p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px", maxWidth: "400px", margin: "0 auto", width: "100%" }}>
        {/* Web3Forms Access Key - NOTE: User needs to get their own free key from web3forms.com */}
        <input type="hidden" name="access_key" value="a46ff3c7-a2c0-416c-ab1c-1023f473fcac" />

        <input type="text" name="name" placeholder="Your Name" required style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)", backgroundColor: "rgba(255,255,255,0.03)", color: "white", fontSize: "14px", outline: "none" }} />
        <input type="email" name="email" placeholder="Your Email" required style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)", backgroundColor: "rgba(255,255,255,0.03)", color: "white", fontSize: "14px", outline: "none" }} />
        <textarea name="message" placeholder="Your Message" rows={4} required style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)", backgroundColor: "rgba(255,255,255,0.03)", color: "white", fontSize: "14px", outline: "none", resize: "none" }} />

        {status === "success" && (
          <div style={{ padding: "12px", backgroundColor: "rgba(16, 185, 129, 0.1)", border: "1px solid rgba(16, 185, 129, 0.3)", borderRadius: "8px", color: "#10b981", fontSize: "13px", textAlign: "center" }}>
            Message sent successfully!
          </div>
        )}

        {status === "error" && (
          <div style={{ padding: "12px", backgroundColor: "rgba(239, 68, 68, 0.1)", border: "1px solid rgba(239, 68, 68, 0.3)", borderRadius: "8px", color: "#ef4444", fontSize: "13px", textAlign: "center" }}>
            Failed to send message. Please ensure the Access Key is configured.
          </div>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "none", background: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)", color: "white", fontWeight: 600, fontSize: "15px", cursor: status === "submitting" ? "not-allowed" : "pointer", opacity: status === "submitting" ? 0.7 : 1, transition: "opacity 0.2s", marginTop: "10px" }}
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}

export default function Window({
  id, title, color, width = "70%", height = "75%", zIndex,
  isFocused, isMaximized, isMinimized, isAltTabbing, stackIndex,
  onClose, onClick, onMinimize, onMaximize
}: WindowProps) {

  const [slideIndex, setSlideIndex] = useState(0);

  const openProject = (hash: string) => {
    window.history.pushState(null, "", "#" + hash);
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  };

  const [mounted, setMounted] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: 0, height: 0 });
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Calculate initial positions based on real screen sizes exclusively on client mount
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const isCustomSize = width !== "70%";
    const parsedWidth = isCustomSize ? parseInt(width) : vw * 0.7;
    const parsedHeight = isCustomSize ? parseInt(height) : vh * 0.75;

    // Default cascading spawn locations
    const defaultX = isCustomSize ? (vw / 2) - (parsedWidth / 2) + (stackIndex * 30) : (vw * 0.15) + (stackIndex * 20);
    const defaultY = isCustomSize ? (vh / 2) - (parsedHeight / 2) + (stackIndex * 30) : (vh * 0.10) + (stackIndex * 20);

    setPos({ x: defaultX, y: defaultY });
    setSize({ width: parsedWidth, height: parsedHeight });
    setMounted(true);
  }, [width, height, stackIndex]);

  if (!mounted) return null;

  // Alt-Tab Layout Mathematics
  const altTabWidth = window.innerWidth * 0.4;
  const altTabHeight = window.innerHeight * 0.4;
  const altTabX = (window.innerWidth / 2) - (altTabWidth / 2) + (stackIndex * 40); // Cascade slightly behind
  const altTabY = (window.innerHeight / 2) - (altTabHeight / 2);

  const currentPos = isAltTabbing ? { x: altTabX, y: altTabY } : (isMaximized ? { x: 0, y: 0 } : pos);
  const currentSize = isAltTabbing ? { width: altTabWidth, height: altTabHeight } : (isMaximized ? { width: "100%", height: "100%" } : size);

  return (
    <div style={{
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      zIndex,
      display: "flex", // Keep it in layout but controlled
    }}>
      <Rnd
        size={currentSize}
        position={currentPos}
        onDragStop={(e, d) => { if (!isMaximized && !isAltTabbing) setPos({ x: d.x, y: d.y }); }}
        onResizeStop={(e, direction, ref, delta, position) => {
          if (!isMaximized && !isAltTabbing) {
            setSize({ width: ref.offsetWidth, height: ref.offsetHeight });
            setPos(position);
          }
        }}
        minWidth={300}
        minHeight={250}
        bounds="parent"
        dragHandleClassName="win-titlebar"
        onMouseDown={onClick}
        style={{
          pointerEvents: isMinimized ? "none" : "auto",
          transition: isAltTabbing ? "all 0.4s cubic-bezier(0.25, 1, 0.5, 1)" : "none",
          zIndex: 10,
        }}
        disableDragging={isAltTabbing || isMaximized}
        enableResizing={!isAltTabbing && !isMaximized}
      >
        <motion.div
          animate={{
            opacity: isMinimized ? 0 : 1,
            scale: isMinimized ? 0.3 : 1,
            y: isMinimized ? 400 : 0
          }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          style={{ width: "100%", height: "100%" }}
        >
          <div style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(15, 23, 42, 0.85)",
            backdropFilter: "blur(40px)",
            border: `1px solid rgba(139, 92, 246, 0.3)`,
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: isFocused ? "0 25px 50px rgba(0,0,0,0.7), 0 0 40px rgba(236, 72, 153, 0.15)" : "0 10px 30px rgba(0,0,0,0.5)",
          }}>
            {/* Windows 11 Title Bar */}
            <div className="win-titlebar" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid rgba(255,255,255,0.05)`, height: "36px", background: "linear-gradient(90deg, rgba(236,72,153,0.1) 0%, rgba(99,102,241,0.1) 100%)", cursor: "move" }}>
              <div style={{ color: "white", fontSize: "12px", paddingLeft: "15px", display: "flex", alignItems: "center", gap: "8px", fontFamily: "sans-serif", fontWeight: 500 }}>
                <div style={{ width: 12, height: 12, backgroundColor: color, borderRadius: "2px" }} /> {title}
              </div>

              <div style={{ display: "flex", height: "100%" }}>
                <div onClick={(e) => { e.stopPropagation(); onMinimize(); }} style={{ padding: "0 15px", display: "flex", alignItems: "center", cursor: "pointer", color: "white", transition: "background 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)"} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}>
                  <Minus size={14} />
                </div>
                <div onClick={(e) => { e.stopPropagation(); onMaximize(); }} style={{ padding: "0 15px", display: "flex", alignItems: "center", cursor: "pointer", color: "white", transition: "background 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)"} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}>
                  <Square size={12} strokeWidth={2.5} style={{ transform: isMaximized ? "scale(0.8)" : "none" }} />
                </div>
                <div
                  onClick={(e) => { e.stopPropagation(); onClose(); }}
                  style={{ padding: "0 15px", display: "flex", alignItems: "center", cursor: "pointer", color: "white", transition: "background 0.2s" }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#e81123"}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                >
                  <X size={14} />
                </div>
              </div>
            </div>
            <div style={{ flex: 1, padding: "20px", color: "var(--text-color)", overflowY: "auto", fontFamily: "sans-serif", backgroundColor: "rgba(0, 0, 0, 0.2)" }}>

              {/* User Profile OS App */}
              {id === 'about' && (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", paddingTop: "20px", height: "100%" }}>
                  <div style={{ width: "100px", height: "100px", borderRadius: "50%", background: "linear-gradient(135deg, #ec4899, #8b5cf6, #3b82f6)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px", boxShadow: "0 10px 20px rgba(0,0,0,0.5)", border: "2px solid rgba(255,255,255,0.2)", overflow: "hidden" }}>
                    <img src="/assets/MohammadAyoub.png" alt="Mohammad Ayoub" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <User size={50} color="white" />
                  </div>
                  <h1 style={{ fontSize: "28px", fontWeight: 600, marginBottom: "5px" }}>Mohammad Ayoub</h1>
                  <div style={{ color: "#06b6d4", fontSize: "14px", marginBottom: "20px", letterSpacing: "1px", textTransform: "uppercase" }}>Computer Science Graduate • HTU</div>

                  <p style={{ maxWidth: "550px", lineHeight: "1.6", color: "rgba(255,255,255,0.8)", fontSize: "15px" }}>
                    A versatile computer science graduate with hands-on experience across <strong>full-stack development</strong>,
                    <strong> mobile applications</strong>, and <strong>systems engineering</strong>.
                    Always eager to explore new technologies and tackle any challenge that comes my way —
                    from building databases from scratch in C to shipping enterprise web apps designed for scale.
                  </p>

                  <div style={{ padding: "0 20px", marginTop: "40px", width: "100%" }}>
                    <h2 style={{ fontSize: "14px", fontWeight: 600, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "20px", textAlign: "left" }}>Technical Capabilities</h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "10px", textAlign: "left" }}>
                      {ALL_SKILLS.map((skill, idx) => (
                        <div key={idx} style={{ padding: "10px", backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "6px" }}>
                          <div style={{ fontSize: "12px", fontWeight: 500, color: "white" }}>{skill.name}</div>
                          <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)" }}>{skill.category}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "15px", marginTop: "35px", flexWrap: "wrap", justifyContent: "center" }}>
                    <div 
                      onClick={() => openProject('contact')} 
                      style={{ textDecoration: "none", padding: "10px 24px", backgroundColor: "#8b5cf6", color: "white", borderRadius: "20px", fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", boxShadow: "0 4px 15px rgba(139, 92, 246, 0.3)" }}
                    >
                      <Mail size={16} /> Email
                    </div>
                    <a href="https://www.linkedin.com/in/mohammad-ayoub091/" target="_blank" style={{ textDecoration: "none", padding: "10px 24px", backgroundColor: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "20px", fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}><Linkedin size={16} /> LinkedIn</a>
                    <a href="https://github.com/M7mdAyoub" target="_blank" style={{ textDecoration: "none", padding: "10px 24px", backgroundColor: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "20px", fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}><Github size={16} /> GitHub</a>
                  </div>
                </div>
              )}

              {/* File Explorer OS App */}
              {id === 'projects' && (
                <div style={{ display: "flex", height: "100%" }}>
                  {/* Nav */}
                  <div style={{ width: "160px", borderRight: "1px solid rgba(255,255,255,0.1)", paddingRight: "15px", marginRight: "15px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "5px" }}>Development</div>
                    <div style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "13px", color: "var(--keyword-color)", cursor: "pointer" }}><FolderArchive size={16} /> All Projects</div>
                    <div style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "13px", cursor: "pointer" }}><Smartphone size={16} /> Mobile</div>
                    <div style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "13px", cursor: "pointer" }}><Globe size={16} /> Web Apps</div>
                    <div style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "13px", cursor: "pointer" }}><Database size={16} /> Systems</div>
                  </div>
                  {/* Grid */}
                  <div style={{ flex: 1 }}>
                    <h2 style={{ fontSize: "18px", marginBottom: "20px", fontWeight: 400, borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "10px" }}>Showcase Gallery</h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))", gap: "20px" }}>

                      <div onDoubleClick={() => openProject('project_pta')} style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer", padding: "15px", borderRadius: "8px", backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)"} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.02)"}>
                        <Smartphone size={50} color="#06b6d4" strokeWidth={1} style={{ marginBottom: "12px" }} />
                        <div style={{ fontSize: "12px", textAlign: "center", fontWeight: 500 }}>PTA Academy<br /><span style={{ fontSize: "10px", color: "rgba(255,255,255,0.5)", fontWeight: 400 }}>Flutter/Firebase</span></div>
                      </div>

                      <div onDoubleClick={() => openProject('project_unidb')} style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer", padding: "15px", borderRadius: "8px", backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)"} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.02)"}>
                        <Database size={50} color="#ec4899" strokeWidth={1} style={{ marginBottom: "12px" }} />
                        <div style={{ fontSize: "12px", textAlign: "center", fontWeight: 500 }}>UniDB Kernel<br /><span style={{ fontSize: "10px", color: "rgba(255,255,255,0.5)", fontWeight: 400 }}>C/Engine Dev</span></div>
                      </div>

                      <div onDoubleClick={() => openProject('project_naturedesk')} style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer", padding: "15px", borderRadius: "8px", backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)"} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.02)"}>
                        <Briefcase size={50} color="#8b5cf6" strokeWidth={1} style={{ marginBottom: "12px" }} />
                        <div style={{ fontSize: "12px", textAlign: "center", fontWeight: 500 }}>NatureDesk<br /><span style={{ fontSize: "10px", color: "rgba(255,255,255,0.5)", fontWeight: 400 }}>ASP.NET Core</span></div>
                      </div>

                      <div onDoubleClick={() => openProject('project_chickanji')} style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer", padding: "15px", borderRadius: "8px", backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)"} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.02)"}>
                        <Globe size={50} color="#f59e0b" strokeWidth={1} style={{ marginBottom: "12px" }} />
                        <div style={{ fontSize: "12px", textAlign: "center", fontWeight: 500 }}>Chickanji Web<br /><span style={{ fontSize: "10px", color: "rgba(255,255,255,0.5)", fontWeight: 400 }}>PHP/JS Stack</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Timeline OS App */}
              {id === 'experience' && (
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "25px", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "15px" }}>
                    <Briefcase size={32} color="#f59e0b" strokeWidth={1.5} />
                    <h2 style={{ fontSize: "20px", fontWeight: 400 }}>Professional Experience</h2>
                  </div>

                  <div style={{ position: "relative", paddingLeft: "30px", borderLeft: "2px solid rgba(255,255,255,0.1)", marginLeft: "15px" }}>

                    <div style={{ marginBottom: "40px", position: "relative" }}>
                      <div style={{ position: "absolute", left: "-37px", top: "5px", width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#f59e0b", border: "2px solid #1e1e1e", boxShadow: "0 0 10px #f59e0b" }} />
                      <h3 style={{ color: "#f59e0b", fontSize: "18px", marginBottom: "4px" }}>Full-Stack Development Junior @ Vatrenas</h3>
                      <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", marginBottom: "12px" }}>Jul 2025 – Feb 2026</div>
                      <ul style={{ paddingLeft: "15px", fontSize: "14px", color: "rgba(255,255,255,0.9)", lineHeight: "1.6" }}>
                        <li>Architected and deployed a new product-level subscription layer, engineering complex revenue-sharing logic.</li>
                        <li>Led research and implementation of Redis and Elasticsearch, documenting caching strategies and search architecture.</li>
                        <li>Designed a custom synonym-generation pipeline for multilingual search using database-driven Rake tasks and OpenAI API.</li>
                        <li>Spearheaded end-to-end validation for a critical checkout database restructure, testing financial calculations.</li>
                        <li>Enforced strict B2B data visibility rules and built robust brand activation/deactivation logic.</li>
                        <li>Engineered a dynamic content management system and extended reporting pipelines with advanced Excel exports.</li>
                        <li>Optimized platform stability by resolving complex caching layer issues and fixing critical front-end bugs.</li>
                      </ul>
                    </div>

                    <div style={{ marginBottom: "30px", position: "relative" }}>
                      <div style={{ position: "absolute", left: "-37px", top: "5px", width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.3)", border: "2px solid #1e1e1e" }} />
                      <h3 style={{ color: "white", fontSize: "18px", marginBottom: "4px" }}>Freelance Front-end Developer</h3>
                      <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", marginBottom: "12px" }}>Feb 2023 – Nov 2023 • Remote – Amman, Jordan</div>
                      <ul style={{ paddingLeft: "15px", fontSize: "14px", color: "rgba(255,255,255,0.9)", lineHeight: "1.6" }}>
                        <li>Collaborated remotely with stakeholders to gather requirements and deliver timely updates.</li>
                        <li>Utilized WordPress and Adalo to build low-code and no-code solutions for local businesses and startups.</li>
                        <li>Ensured high client satisfaction and repeat work through responsive design delivery.</li>
                      </ul>
                    </div>

                  </div>
                </div>
              )}

              {/* List OS App */}
              {id === 'certs' && (
                <div>
                  <h2 style={{ fontSize: "18px", fontWeight: 400, marginBottom: "20px", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "10px" }}>Verified Credentials</h2>
                  <div style={{ backgroundColor: "rgba(0,0,0,0.3)", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.05)" }}>
                    {[
                      { name: "VATRENAS - Internship Certificate", issuer: "Vatrenas B2B", icon: "🏆", id: "vatrenas" },
                      { name: "Red Hat System Administration I", issuer: "Red Hat", icon: "🛡️", id: "redhat" },
                      { name: "Data Manipulation with pandas", issuer: "DataCamp", icon: "🐼", id: "pandas" },
                      { name: "Introduction to NumPy", issuer: "DataCamp", icon: "🔢", id: "numpy" },
                      { name: "Intermediate Python", issuer: "DataCamp", icon: "🐍", id: "python_mid" },
                      { name: "Introduction to Python", issuer: "DataCamp", icon: "🚀", id: "python_intro" },
                    ].map((cert, i) => (
                      <div
                        key={i}
                        onDoubleClick={() => openProject('cert_' + cert.id)}
                        style={{ padding: "15px", borderBottom: i === 5 ? "none" : "1px solid rgba(255,255,255,0.05)", display: "flex", alignItems: "center", gap: "15px", cursor: "pointer", transition: "background 0.2s" }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)"}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                      >
                        <div style={{ fontSize: "20px" }}>{cert.icon}</div>
                        <div>
                          <h4 style={{ margin: 0, fontSize: "14px", fontWeight: 500 }}>{cert.name}</h4>
                          <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", marginTop: "2px" }}>{cert.issuer}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── Project Viewers ── */}
              {id === 'project_pta' && (
                <div style={{ display: "flex", flexDirection: isMaximized ? "row" : "column", height: "100%", gap: "20px" }}>
                  <div style={{ flex: isMaximized ? "0 0 65%" : "0 0 320px", borderRadius: "6px", overflow: "hidden", position: "relative", boxShadow: "0 10px 20px rgba(0,0,0,0.4)", backgroundColor: "#000" }}>
                    <img src={PROJECT_GALLERIES.project_pta.images[slideIndex]} style={{ width: "100%", height: "100%", objectFit: "contain", transition: "all 0.3s ease" }} />

                    <button onClick={() => setSlideIndex((prev) => (prev - 1 + PROJECT_GALLERIES.project_pta.images.length) % PROJECT_GALLERIES.project_pta.images.length)} style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.5)", border: "none", borderRadius: "50%", color: "white", padding: "8px", cursor: "pointer", display: "flex", alignItems: "center" }}>
                      <ChevronLeft size={20} />
                    </button>
                    <button onClick={() => setSlideIndex((prev) => (prev + 1) % PROJECT_GALLERIES.project_pta.images.length)} style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.5)", border: "none", borderRadius: "50%", color: "white", padding: "8px", cursor: "pointer", display: "flex", alignItems: "center" }}>
                      <ChevronRight size={20} />
                    </button>

                    <div style={{ position: "absolute", bottom: "10px", right: "10px", backgroundColor: "rgba(0,0,0,0.6)", padding: "2px 8px", borderRadius: "4px", fontSize: "10px", color: "white" }}>
                      {slideIndex + 1} / {PROJECT_GALLERIES.project_pta.images.length}
                    </div>
                  </div>
                  <div style={{ flex: 1, overflowY: isMaximized ? "auto" : "visible", paddingRight: isMaximized ? "10px" : "0" }}>
                    <h2 style={{ fontSize: "24px", fontWeight: 600, marginBottom: "8px" }}>Professional Taekwondo Academy</h2>
                    <div style={{ color: "#06b6d4", fontSize: "13px", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "1.5px", fontWeight: 600 }}>{PROJECT_GALLERIES.project_pta.labels?.[slideIndex] || "Overview"}</div>
                    <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px", marginBottom: "15px" }}>Flutter • Firebase • WhatsApp API</div>
                    <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.8)", lineHeight: "1.7" }}>
                      Co-developed the TeamsCave sports management ecosystem. This specific whitelabel product for PTA empowers students and parents with streamlined attendance, event registration, and secure digital identity management.
                    </p>
                    <div style={{ marginTop: "20px", display: "flex", gap: "15px" }}>
                      <a href="https://drive.google.com/uc?export=download&id=1TpUETH8vr7AbCuVcziwxZH4M088Uxn_t" style={{ backgroundColor: "#06b6d4", color: "black", padding: "8px 20px", borderRadius: "4px", textDecoration: "none", fontWeight: 600, fontSize: "14px" }}>Download APK 📥</a>
                    </div>
                  </div>
                </div>
              )}

              {id === 'project_unidb' && (
                <div style={{ display: "flex", flexDirection: isMaximized ? "row" : "column", height: "100%", gap: "20px" }}>
                  <div style={{ flex: isMaximized ? "0 0 65%" : "0 0 320px", borderRadius: "6px", overflow: "hidden", position: "relative", boxShadow: "0 10px 20px rgba(0,0,0,0.4)", backgroundColor: "#000" }}>
                    <img src={PROJECT_GALLERIES.project_unidb.images[slideIndex]} style={{ width: "100%", height: "100%", objectFit: "contain", transition: "all 0.3s ease" }} />
                    <button onClick={() => setSlideIndex((prev) => (prev - 1 + PROJECT_GALLERIES.project_unidb.images.length) % PROJECT_GALLERIES.project_unidb.images.length)} style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.5)", border: "none", borderRadius: "50%", color: "white", padding: "8px", cursor: "pointer", display: "flex", alignItems: "center" }}>
                      <ChevronLeft size={20} />
                    </button>
                    <button onClick={() => setSlideIndex((prev) => (prev + 1) % PROJECT_GALLERIES.project_unidb.images.length)} style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.5)", border: "none", borderRadius: "50%", color: "white", padding: "8px", cursor: "pointer", display: "flex", alignItems: "center" }}>
                      <ChevronRight size={20} />
                    </button>
                    <div style={{ position: "absolute", bottom: "10px", right: "10px", backgroundColor: "rgba(0,0,0,0.6)", padding: "2px 8px", borderRadius: "4px", fontSize: "10px", color: "white" }}>
                      {slideIndex + 1} / {PROJECT_GALLERIES.project_unidb.images.length}
                    </div>
                  </div>
                  <div style={{ flex: 1, overflowY: isMaximized ? "auto" : "visible", paddingRight: isMaximized ? "10px" : "0" }}>
                    <h2 style={{ fontSize: "24px", fontWeight: 600, marginBottom: "8px" }}>UniDB — Custom Database System</h2>
                    <div style={{ color: "#ec4899", fontSize: "13px", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "1.5px", fontWeight: 600 }}>{PROJECT_GALLERIES.project_unidb.labels?.[slideIndex] || "Database Engine"}</div>
                    <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px", marginBottom: "15px" }}>C • Node.js • Binary Storage • Hash Indexing</div>
                    <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.8)", lineHeight: "1.7" }}>
                      Built a relational database management system from scratch in C with zero external DB dependencies.
                      Implemented binary storage formats, hash-based indexing for O(1) lookups, and concurrency controls.
                      Wrapped with a modern Node.js administrative interface.
                    </p>
                    <div style={{ marginTop: "20px", display: "flex", gap: "15px" }}>
                      <a href="https://github.com/M7mdAyoub/Database-Management-System" target="_blank" style={{ border: "1px solid #ec4899", color: "#ec4899", padding: "8px 20px", borderRadius: "4px", textDecoration: "none", fontWeight: 600, fontSize: "14px" }}>Source Code ↗</a>
                      <a href="https://unidb.onrender.com" target="_blank" style={{ backgroundColor: "#ec4899", color: "white", padding: "8px 20px", borderRadius: "4px", textDecoration: "none", fontWeight: 600, fontSize: "14px" }}>Live Project ↗</a>
                    </div>
                  </div>
                </div>
              )}

              {id === 'project_naturedesk' && (
                <div style={{ display: "flex", flexDirection: isMaximized ? "row" : "column", height: "100%", gap: "20px" }}>
                  <div style={{ flex: isMaximized ? "0 0 65%" : "0 0 320px", borderRadius: "6px", overflow: "hidden", position: "relative", boxShadow: "0 10px 20px rgba(0,0,0,0.4)", backgroundColor: "#000" }}>
                    <img src={PROJECT_GALLERIES.project_naturedesk.images[slideIndex]} style={{ width: "100%", height: "100%", objectFit: "contain", transition: "all 0.3s ease" }} />
                    <button onClick={() => setSlideIndex((prev) => (prev - 1 + PROJECT_GALLERIES.project_naturedesk.images.length) % PROJECT_GALLERIES.project_naturedesk.images.length)} style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.5)", border: "none", borderRadius: "50%", color: "white", padding: "8px", cursor: "pointer", display: "flex", alignItems: "center" }}>
                      <ChevronLeft size={20} />
                    </button>
                    <button onClick={() => setSlideIndex((prev) => (prev + 1) % PROJECT_GALLERIES.project_naturedesk.images.length)} style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.5)", border: "none", borderRadius: "50%", color: "white", padding: "8px", cursor: "pointer", display: "flex", alignItems: "center" }}>
                      <ChevronRight size={20} />
                    </button>
                    <div style={{ position: "absolute", bottom: "10px", right: "10px", backgroundColor: "rgba(0,0,0,0.6)", padding: "2px 8px", borderRadius: "4px", fontSize: "10px", color: "white" }}>
                      {slideIndex + 1} / {PROJECT_GALLERIES.project_naturedesk.images.length}
                    </div>
                  </div>
                  <div style={{ flex: 1, overflowY: isMaximized ? "auto" : "visible", paddingRight: isMaximized ? "10px" : "0" }}>
                    <h2 style={{ fontSize: "24px", fontWeight: 600, marginBottom: "8px" }}>NatureDesk — Helpdesk System</h2>
                    <div style={{ color: "#8b5cf6", fontSize: "13px", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "1.5px", fontWeight: 600 }}>{PROJECT_GALLERIES.project_naturedesk.labels?.[slideIndex] || "Enterprise Helpdesk"}</div>
                    <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px", marginBottom: "15px" }}>ASP.NET Core • C# • SQL Server • Bootstrap</div>
                    <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.8)", lineHeight: "1.7" }}>
                      A full-featured IT ticketing system supporting role-based access control and bilingual (EN/AR) support.
                      Features include real-time analytics, automated ticket lifecycle tracking, and an extensive administrative suite.
                    </p>
                    <div style={{ marginTop: "20px", display: "flex", gap: "15px" }}>
                      <a href="https://github.com/M7mdAyoub/TicketingSystem" target="_blank" style={{ border: "1px solid #8b5cf6", color: "#8b5cf6", padding: "8px 20px", borderRadius: "4px", textDecoration: "none", fontWeight: 600, fontSize: "14px" }}>Source Code ↗</a>
                      <a href="https://freakingaverage-naturedesk.hf.space" target="_blank" style={{ backgroundColor: "#8b5cf6", color: "white", padding: "8px 20px", borderRadius: "4px", textDecoration: "none", fontWeight: 600, fontSize: "14px" }}>Live Project ↗</a>
                    </div>
                  </div>
                </div>
              )}

              {id === 'project_chickanji' && (
                <div style={{ display: "flex", flexDirection: isMaximized ? "row" : "column", height: "100%", gap: "20px" }}>
                  <div style={{ flex: isMaximized ? "0 0 65%" : "0 0 320px", borderRadius: "6px", overflow: "hidden", position: "relative", boxShadow: "0 10px 20px rgba(0,0,0,0.4)", backgroundColor: "#000" }}>
                    <img src={PROJECT_GALLERIES.project_chickanji.images[slideIndex]} style={{ width: "100%", height: "100%", objectFit: "contain", transition: "all 0.3s ease" }} />
                    <button onClick={() => setSlideIndex((prev) => (prev - 1 + PROJECT_GALLERIES.project_chickanji.images.length) % PROJECT_GALLERIES.project_chickanji.images.length)} style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.5)", border: "none", borderRadius: "50%", color: "white", padding: "8px", cursor: "pointer", display: "flex", alignItems: "center" }}>
                      <ChevronLeft size={20} />
                    </button>
                    <button onClick={() => setSlideIndex((prev) => (prev + 1) % PROJECT_GALLERIES.project_chickanji.images.length)} style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.5)", border: "none", borderRadius: "50%", color: "white", padding: "8px", cursor: "pointer", display: "flex", alignItems: "center" }}>
                      <ChevronRight size={20} />
                    </button>
                    <div style={{ position: "absolute", bottom: "10px", right: "10px", backgroundColor: "rgba(0,0,0,0.6)", padding: "2px 8px", borderRadius: "4px", fontSize: "10px", color: "white" }}>
                      {slideIndex + 1} / {PROJECT_GALLERIES.project_chickanji.images.length}
                    </div>
                  </div>
                  <div style={{ flex: 1, overflowY: isMaximized ? "auto" : "visible", paddingRight: isMaximized ? "10px" : "0" }}>
                    <h2 style={{ fontSize: "24px", fontWeight: 600, marginBottom: "8px" }}>Chickanji Restaurant Web</h2>
                    <div style={{ color: "#f59e0b", fontSize: "13px", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "1.5px", fontWeight: 600 }}>{PROJECT_GALLERIES.project_chickanji.labels?.[slideIndex] || "Full-Stack Web"}</div>
                    <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px", marginBottom: "15px" }}>PHP • JavaScript • MySQL</div>
                    <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.8)", lineHeight: "1.7" }}>
                      End-to-end food ordering platform with administrative management.
                      Implemented a custom shopping cart, order tracking system, and menu administration dashboards.
                    </p>
                    <div style={{ marginTop: "20px", display: "flex", gap: "15px" }}>
                      <a href="https://github.com/M7mdAyoub/chickanji" target="_blank" style={{ border: "1px solid #f59e0b", color: "#f59e0b", padding: "8px 20px", borderRadius: "4px", textDecoration: "none", fontWeight: 600, fontSize: "14px" }}>Source Code ↗</a>
                      <a href="http://chickanji.infinityfree.me" target="_blank" style={{ backgroundColor: "#f59e0b", color: "white", padding: "8px 20px", borderRadius: "4px", textDecoration: "none", fontWeight: 600, fontSize: "14px" }}>Live Project ↗</a>
                    </div>
                  </div>
                </div>
              )}

              {/* Certificate Viewers */}
              {id === 'cert_vatrenas' && (
                <div style={{ display: "flex", flexDirection: "column", height: "100%", gap: "10px" }}>
                  <div style={{ flex: 1, borderRadius: "4px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", backgroundColor: "#000" }}>
                    <img src="/certificates/vatrenas.jpg" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                  </div>
                  <div style={{ textAlign: "center", paddingBottom: "10px" }}>
                    <h3 style={{ fontSize: "16px", margin: "5px 0" }}>Vatrenas B2B - Internship Completion</h3>
                    <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px" }}>Professional Endorsement</div>
                  </div>
                </div>
              )}

              {id === 'cert_redhat' && (
                <div style={{ display: "flex", flexDirection: "column", height: "100%", gap: "10px" }}>
                  <div style={{ flex: 1, borderRadius: "4px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", backgroundColor: "#000" }}>
                    <img src="/certificates/redhat.png" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                  </div>
                  <div style={{ textAlign: "center", paddingBottom: "10px" }}>
                    <h3 style={{ fontSize: "16px", margin: "5px 0" }}>Red Hat System Administration I</h3>
                    <div style={{ color: "#ef4444", fontSize: "12px" }}>Certified Academic Performance</div>
                  </div>
                </div>
              )}

              {(id.startsWith('cert_python') || id === 'cert_pandas' || id === 'cert_numpy') && (
                <div style={{ display: "flex", flexDirection: "column", height: "100%", gap: "10px" }}>
                  <div style={{ flex: 1, borderRadius: "4px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", backgroundColor: "#000" }}>
                    <img src={`/certificates/${id.replace('cert_', '')}.png`} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                  </div>
                  <div style={{ textAlign: "center", paddingBottom: "10px" }}>
                    <h3 style={{ fontSize: "16px", margin: "5px 0" }}>DataCamp Statement of Accomplishment</h3>
                    <div style={{ color: "#06b6d4", fontSize: "12px" }}>Verified via DataCamp Profile</div>
                  </div>
                </div>
              )}

              {id === 'contact' && <ContactForm />}

            </div>
          </div>
        </motion.div>
      </Rnd>
    </div>
  );
}
