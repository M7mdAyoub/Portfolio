"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Wifi, Battery, Signal, User, FolderArchive, Briefcase, Award, Mail, 
  Github, Linkedin, ChevronLeft, Smartphone, Globe, Database, MapPin
} from "lucide-react";

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

const PROJECT_GALLERIES: Record<string, { title: string, tech: string, desc: string, github?: string, live?: string, images: string[], labels?: string[] }> = {
  project_pta: {
    title: "Professional Taekwondo Academy",
    tech: "Flutter • Firebase • WhatsApp API",
    desc: "Sports management ecosystem for PTA with student attendance, event registration, and digital identity management.",
    live: "https://drive.google.com/uc?export=download&id=1TpUETH8vr7AbCuVcziwxZH4M088Uxn_t",
    images: ["/pta/landingpage.jpg", "/pta/loginpage.jpg", "/pta/playerdashboard.jpg", "/pta/createpasswordpage.jpg", "/pta/playerinfopage.jpg", "/pta/attendancepage.jpg", "/pta/childrenlist.jpg", "/pta/paymentpage.jpg", "/pta/eventspage.jpg", "/pta/eventsdetailspage.jpg"],
    labels: ["Landing Screen", "Login", "Player Dashboard", "Setup Password", "Profile Details", "Attendance Log", "Children Management", "Payment Record", "Upcoming Events", "Event Logistics"]
  },
  project_unidb: {
    title: "UniDB Kernel",
    tech: "C • Node.js • Binary Storage",
    desc: "Relational database management system built from scratch in C. Features binary storage and hash-based indexing.",
    github: "https://github.com/M7mdAyoub/Database-Management-System",
    live: "https://unidb.onrender.com",
    images: ["/unidb/01_login.png", "/unidb/02_dashboard.png", "/unidb/03_students.png", "/unidb/04_courses.png", "/unidb/05_instructors.png", "/unidb/06_enrollments.png", "/unidb/07_payments.png", "/unidb/08_assignments.png", "/unidb/09_activity_log.png"],
    labels: ["Login", "Dashboard", "Students", "Courses", "Instructors", "Enrollments", "Payments", "Assignments", "Activity Log"]
  },
  project_naturedesk: {
    title: "NatureDesk",
    tech: "ASP.NET Core • C# • SQL Server",
    desc: "Enterprise IT ticketing system with role-based access, analytics, and bilingual support (EN/AR).",
    github: "https://github.com/M7mdAyoub/TicketingSystem",
    live: "https://freakingaverage-naturedesk.hf.space",
    images: ["/naturedesk/01_landing_page.png", "/naturedesk/02_landing_features.png", "/naturedesk/03_landing_cta.png", "/naturedesk/04_login_english.png", "/naturedesk/05_login_arabic.png", "/naturedesk/06_dashboard.png", "/naturedesk/07_tickets_list.png", "/naturedesk/08_categories_list.png", "/naturedesk/09_users_list.png", "/naturedesk/10_create_ticket.png", "/naturedesk/11_ticket_details.png"],
    labels: ["Landing Page", "Features", "Call to Action", "Login (EN)", "Login (AR)", "Dashboard", "Tickets List", "Categories", "Users List", "Create Ticket", "Ticket Details"]
  },
  project_chickanji: {
    title: "Chickanji Web",
    tech: "PHP • JavaScript • MySQL",
    desc: "Food ordering platform with admin dashboards, custom shopping cart, and order tracking.",
    github: "https://github.com/M7mdAyoub/chickanji",
    live: "http://chickanji.infinityfree.me",
    images: ["/chickanji/portfolio_home_1772438436394.png", "/chickanji/portfolio_menu_1772438431068.png", "/chickanji/portfolio_about_1772438441646.png", "/chickanji/portfolio_contact_1772438445792.png", "/chickanji/portfolio_cart_1772438449835.png", "/chickanji/portfolio_cart_1772438456403.png", "/chickanji/portfolio_login_1772438483754.png", "/chickanji/portfolio_signup_1772438484294.png", "/chickanji/portfolio_admin_overview_1772438460834.png", "/chickanji/portfolio_admin_menu_1772438461552.png", "/chickanji/portfolio_admin_add_modal_png_1772439393078.png", "/chickanji/portfolio_admin_edit_modal_png_1772439403419.png", "/chickanji/portfolio_admin_search_png_1772439387071.png"],
    labels: ["Home", "Menu", "About", "Contact", "Cart", "Cart (Filled)", "Login", "Sign Up", "Admin Overview", "Admin Menu", "Admin Add", "Admin Edit", "Admin Search"]
  }
};

function MobileContactForm() {
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
    <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "white" }}>Get in Touch</h2>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "12px", marginTop: "5px" }}>
          Message <strong style={{color:"#8b5cf6"}}>mrm7md091@gmail.com</strong>
        </p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <input type="hidden" name="access_key" value="a46ff3c7-a2c0-416c-ab1c-1023f473fcac" />
        <input type="text" name="name" placeholder="Name" required style={{ padding: "12px", borderRadius: "8px", backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "white" }} />
        <input type="email" name="email" placeholder="Email" required style={{ padding: "12px", borderRadius: "8px", backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "white" }} />
        <textarea name="message" placeholder="Message" rows={5} required style={{ padding: "12px", borderRadius: "8px", backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "white", resize: "none" }} />
        
        {status === "success" && (
          <div style={{ padding: "12px", backgroundColor: "rgba(16, 185, 129, 0.1)", border: "1px solid rgba(16, 185, 129, 0.3)", borderRadius: "8px", color: "#10b981", fontSize: "13px", textAlign: "center" }}>
            Sent successfully!
          </div>
        )}

        {status === "error" && (
          <div style={{ padding: "12px", backgroundColor: "rgba(239, 68, 68, 0.1)", border: "1px solid rgba(239, 68, 68, 0.3)", borderRadius: "8px", color: "#ef4444", fontSize: "13px", textAlign: "center" }}>
            Failed to send message.
          </div>
        )}

        <button 
          type="submit" 
          disabled={status === "submitting"}
          style={{ padding: "14px", borderRadius: "8px", backgroundColor: "#8b5cf6", border: "none", color: "white", fontWeight: 700, fontSize: "14px", opacity: status === "submitting" ? 0.7 : 1 }}
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}

export default function MobileOS({ onExit }: { onExit: () => void }) {
  const [time, setTime] = useState("");
  const [activeApp, setActiveApp] = useState<string | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const updateTime = () => setTime(new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }));
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const apps = [
    { id: "about", name: "About", icon: <User size={28} color="#fff" />, color: "linear-gradient(135deg, #ec4899, #8b5cf6)" },
    { id: "projects", name: "Projects", icon: <FolderArchive size={28} color="#fff" />, color: "linear-gradient(135deg, #06b6d4, #3b82f6)" },
    { id: "experience", name: "Experience", icon: <Briefcase size={28} color="#fff" />, color: "linear-gradient(135deg, #f59e0b, #ef4444)" },
    { id: "certs", name: "Certs", icon: <Award size={28} color="#fff" />, color: "linear-gradient(135deg, #10b981, #059669)" },
    { id: "contact", name: "Contact", icon: <Mail size={28} color="#fff" />, color: "linear-gradient(135deg, #6366f1, #8b5cf6)" },
  ];

  const handleAppOpen = (id: string) => {
    setSlideIndex(0);
    setActiveApp(id);
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", backgroundColor: "#020202", fontFamily: "var(--font-inter), sans-serif" }}>
      
      {/* ── Background Wallpaper ── */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <div style={{ position: "absolute", top: "0%", left: "0%", width: "150vw", height: "150vw", background: "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 60%)", filter: "blur(60px)", transform: "translate(-20%, -20%)" }} />
        <div style={{ position: "absolute", bottom: "0%", right: "0%", width: "150vw", height: "150vw", background: "radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 60%)", filter: "blur(60px)", transform: "translate(20%, 20%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)" }} />
      </div>

      {/* ── Status Bar ── */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "44px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", padding: "0 24px 8px 24px", zIndex: 50, color: "white" }}>
        <div style={{ fontSize: "14px", fontWeight: 700 }}>{time}</div>
        <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
          <Signal size={14} strokeWidth={2.5} />
          <Wifi size={14} strokeWidth={2.5} />
          <Battery size={16} strokeWidth={2} />
        </div>
      </div>

      {/* ── Home Screen ── */}
      <div style={{ position: "relative", zIndex: 10, height: "100%", display: "flex", flexDirection: "column", paddingTop: "80px", paddingBottom: "20px" }}>
        
        {/* App Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "25px 0", padding: "0 20px" }}>
          {apps.map((app) => (
            <motion.div 
              key={app.id} 
              onClick={() => handleAppOpen(app.id)}
              whileTap={{ scale: 0.9 }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", cursor: "pointer" }}
            >
              <div style={{ width: "60px", height: "60px", background: app.color, borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 16px rgba(0,0,0,0.4)" }}>
                {app.icon}
              </div>
              <span style={{ color: "white", fontSize: "11px", fontWeight: 500, textShadow: "0 1px 3px rgba(0,0,0,0.8)" }}>{app.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Lock Device Link */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "30px" }}>
          <motion.div
            onClick={onExit}
            whileTap={{ opacity: 0.5 }}
            style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", cursor: "pointer", letterSpacing: "1px", textTransform: "uppercase" }}
          >
            Lock Device
          </motion.div>
        </div>

        {/* Dock */}
        <div style={{ margin: "0 20px", padding: "18px", backgroundColor: "rgba(255,255,255,0.15)", backdropFilter: "blur(40px)", borderRadius: "30px", display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid rgba(255,255,255,0.1)" }}>
           <a href="https://github.com/Mohammad-Ayoub" target="_blank" rel="noreferrer" style={{ width: "55px", height: "55px", backgroundColor: "rgba(0,0,0,0.5)", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", color: "white", textDecoration: "none" }}>
             <Github size={28} />
           </a>
           <a href="https://www.linkedin.com/in/mohammad-ayoub091/" target="_blank" rel="noreferrer" style={{ width: "55px", height: "55px", backgroundColor: "#0a66c2", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", color: "white", textDecoration: "none" }}>
             <Linkedin size={28} />
           </a>
           <div onClick={() => handleAppOpen('contact')} style={{ width: "55px", height: "55px", backgroundColor: "#8b5cf6", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", color: "white", cursor: "pointer" }}>
             <Mail size={28} />
           </div>
        </div>
      </div>

      {/* ── App Views ── */}
      <AnimatePresence>
        {activeApp && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            style={{
              position: "absolute", inset: 0, zIndex: 100,
              backgroundColor: "#0d0d15",
              display: "flex", flexDirection: "column"
            }}
          >
            {/* App Header */}
            <div style={{ paddingTop: "60px", paddingBottom: "15px", paddingLeft: "15px", paddingRight: "15px", display: "flex", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.05)", backgroundColor: "rgba(13,13,21,0.95)", backdropFilter: "blur(20px)" }}>
              <button 
                onClick={() => {
                  if (activeApp.startsWith("project_")) setActiveApp("projects");
                  else if (activeApp.startsWith("cert_")) setActiveApp("certs");
                  else setActiveApp(null);
                }}
                style={{ background: "none", border: "none", color: "#8b5cf6", display: "flex", alignItems: "center", fontSize: "16px", cursor: "pointer", padding: 0, fontWeight: 600 }}
              >
                <ChevronLeft size={24} /> Back
              </button>
              <div style={{ flex: 1, textAlign: "center", color: "white", fontWeight: 700, fontSize: "16px", paddingRight: "40px" }}>
                 {activeApp.startsWith("project_") ? "Project Details" : (activeApp.startsWith("cert_") ? "Credential" : (apps.find(a => a.id === activeApp)?.name || "App"))}
              </div>
            </div>

            {/* App Content Area */}
            <div style={{ flex: 1, overflowY: "auto", padding: "20px", color: "white", paddingBottom: "50px" }}>
              
              {/* About App */}
              {activeApp === "about" && (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                  <div style={{ width: "120px", height: "120px", borderRadius: "50%", background: "linear-gradient(135deg, #ec4899, #8b5cf6)", marginBottom: "20px", padding: "3px", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
                    <div style={{ width: "100%", height: "100%", borderRadius: "50%", overflow: "hidden", backgroundColor: "#000" }}>
                      <img src="/assets/MohammadAyoub.png" alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                  </div>
                  <h1 style={{ fontSize: "28px", fontWeight: 800 }}>Mohammad Ayoub</h1>
                  <div style={{ color: "#06b6d4", fontSize: "14px", fontWeight: 600, margin: "8px 0 20px 0", letterSpacing: "1px" }}>COMPUTER SCIENCE • HTU</div>
                  
                  <p style={{ fontSize: "15px", lineHeight: "1.7", color: "rgba(255,255,255,0.8)", marginBottom: "40px" }}>
                    Versatile developer with hands-on experience in full-stack engineering and mobile systems. Committed to building efficient, scalable software from the ground up.
                  </p>
                  
                  <div style={{ width: "100%", textAlign: "left" }}>
                    <h3 style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "15px", fontWeight: 700 }}>Technical Capabilities</h3>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                      {ALL_SKILLS.map((s, i) => (
                        <div key={i} style={{ backgroundColor: "rgba(255,255,255,0.03)", padding: "12px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.05)" }}>
                          <div style={{ fontSize: "13px", fontWeight: 600 }}>{s.name}</div>
                          <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", marginTop: "2px" }}>{s.category}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Projects App */}
              {activeApp === "projects" && (
                <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                  {[
                    { id: "project_pta", name: "PTA Academy", tech: "Flutter / Firebase", icon: <Smartphone color="#06b6d4" /> },
                    { id: "project_unidb", name: "UniDB Kernel", tech: "C Language", icon: <Database color="#ec4899" /> },
                    { id: "project_naturedesk", name: "NatureDesk", tech: "ASP.NET Core", icon: <Briefcase color="#8b5cf6" /> },
                    { id: "project_chickanji", name: "Chickanji", tech: "PHP / JS", icon: <Globe color="#f59e0b" /> },
                  ].map((p) => (
                    <motion.div 
                      key={p.id} 
                      onClick={() => handleAppOpen(p.id)}
                      whileTap={{ scale: 0.98, backgroundColor: "rgba(255,255,255,0.1)" }}
                      style={{ backgroundColor: "rgba(255,255,255,0.04)", padding: "18px", borderRadius: "16px", display: "flex", alignItems: "center", gap: "18px", border: "1px solid rgba(255,255,255,0.05)" }}
                    >
                      <div style={{ width: "48px", height: "48px", borderRadius: "12px", backgroundColor: "rgba(0,0,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {p.icon}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: "16px", fontWeight: 700 }}>{p.name}</div>
                        <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", marginTop: "2px" }}>{p.tech}</div>
                      </div>
                      <ChevronLeft size={20} style={{ transform: "rotate(180deg)", color: "rgba(255,255,255,0.2)" }} />
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Individual Project Views */}
              {activeApp.startsWith("project_") && (
                <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                  <div style={{ width: "100%", aspectRatio: "1.2", backgroundColor: "#000", borderRadius: "16px", overflow: "hidden", position: "relative", marginBottom: "25px", boxShadow: "0 10px 30px rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.1)" }}>
                     <img src={PROJECT_GALLERIES[activeApp].images[slideIndex]} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                     
                     <div style={{ position: "absolute", bottom: "15px", width: "100%", display: "flex", justifyContent: "center", gap: "25px" }}>
                       <button onClick={() => setSlideIndex((p) => Math.max(0, p - 1))} style={{ background: "rgba(0,0,0,0.7)", border: "none", color: "white", padding: "8px 15px", borderRadius: "8px", fontWeight: 600 }}>Prev</button>
                       <button onClick={() => setSlideIndex((p) => Math.min(PROJECT_GALLERIES[activeApp].images.length - 1, p + 1))} style={{ background: "rgba(0,0,0,0.7)", border: "none", color: "white", padding: "8px 15px", borderRadius: "8px", fontWeight: 600 }}>Next</button>
                     </div>
                     <div style={{ position: "absolute", top: "15px", right: "15px", backgroundColor: "rgba(0,0,0,0.6)", padding: "4px 8px", borderRadius: "6px", fontSize: "11px" }}>
                        {slideIndex + 1} / {PROJECT_GALLERIES[activeApp].images.length}
                     </div>
                  </div>
                  
                  <h2 style={{ fontSize: "24px", fontWeight: 800 }}>{PROJECT_GALLERIES[activeApp].title}</h2>
                  <div style={{ color: "#8b5cf6", fontSize: "13px", fontWeight: 600, marginTop: "6px", letterSpacing: "1px" }}>{PROJECT_GALLERIES[activeApp].tech}</div>
                  
                  <p style={{ color: "rgba(255,255,255,0.8)", marginTop: "20px", lineHeight: "1.7", fontSize: "15px" }}>
                    {PROJECT_GALLERIES[activeApp].labels?.[slideIndex] || "Overview"} — {PROJECT_GALLERIES[activeApp].desc}
                  </p>

                  <div style={{ marginTop: "30px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    {PROJECT_GALLERIES[activeApp].live && (
                      <a href={PROJECT_GALLERIES[activeApp].live} target="_blank" rel="noreferrer" style={{ width: "100%", textAlign: "center", backgroundColor: activeApp === "project_pta" ? "#06b6d4" : "#8b5cf6", color: activeApp === "project_pta" ? "black" : "white", padding: "14px", borderRadius: "10px", textDecoration: "none", fontWeight: 700, fontSize: "14px" }}>
                        {activeApp === "project_pta" ? "Download APK 📥" : "View Live Project"}
                      </a>
                    )}
                    {PROJECT_GALLERIES[activeApp].github && (
                      <a href={PROJECT_GALLERIES[activeApp].github} target="_blank" rel="noreferrer" style={{ width: "100%", textAlign: "center", border: "1px solid #8b5cf6", color: "#8b5cf6", padding: "14px", borderRadius: "10px", textDecoration: "none", fontWeight: 700, fontSize: "14px" }}>
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* Experience App */}
              {activeApp === "experience" && (
                <div style={{ paddingLeft: "15px", borderLeft: "2px solid rgba(255,255,255,0.1)", marginLeft: "10px" }}>
                  <div style={{ marginBottom: "40px", position: "relative" }}>
                    <div style={{ position: "absolute", left: "-22px", top: "8px", width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#f59e0b", boxShadow: "0 0 10px #f59e0b" }} />
                    <h3 style={{ color: "#f59e0b", fontSize: "18px", fontWeight: 700 }}>Full-Stack Jr @ Vatrenas</h3>
                    <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", margin: "4px 0 15px 0", fontWeight: 500 }}>Jul 2025 – Feb 2026</div>
                    <ul style={{ paddingLeft: "15px", fontSize: "14px", color: "rgba(255,255,255,0.9)", lineHeight: "1.7" }}>
                      <li>Built complex subscription & revenue systems.</li>
                      <li>Deployed Redis and Elasticsearch caching.</li>
                      <li>Designed OpenAI-driven search pipelines.</li>
                      <li>Managed enterprise data visibility rules.</li>
                    </ul>
                  </div>
                  <div style={{ position: "relative" }}>
                    <div style={{ position: "absolute", left: "-22px", top: "8px", width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.3)" }} />
                    <h3 style={{ color: "white", fontSize: "18px", fontWeight: 700 }}>Freelance Front-end</h3>
                    <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", margin: "4px 0 15px 0", fontWeight: 500 }}>Feb 2023 – Nov 2023</div>
                    <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)", lineHeight: "1.7" }}>Delivered robust low-code and web solutions for local startups in Amman, Jordan.</p>
                  </div>
                </div>
              )}

              {/* Certs App */}
              {activeApp === "certs" && (
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    { id: "vatrenas", name: "VATRENAS - Internship", issuer: "Vatrenas B2B", icon: "🏆" },
                    { id: "redhat", name: "Red Hat System Admin I", issuer: "Red Hat", icon: "🛡️" },
                    { id: "pandas", name: "Data Manipulation (pandas)", issuer: "DataCamp", icon: "🐼" },
                    { id: "numpy", name: "Intro to NumPy", issuer: "DataCamp", icon: "🔢" },
                    { id: "python_mid", name: "Intermediate Python", issuer: "DataCamp", icon: "🐍" },
                    { id: "python_intro", name: "Introduction to Python", issuer: "DataCamp", icon: "🚀" },
                  ].map((cert, i) => (
                    <motion.div 
                      key={i} 
                      onClick={() => handleAppOpen("cert_" + cert.id)}
                      whileTap={{ scale: 0.98 }}
                      style={{ backgroundColor: "rgba(255,255,255,0.04)", padding: "18px", borderRadius: "14px", fontSize: "14px", display: "flex", alignItems: "center", gap: "15px", border: "1px solid rgba(255,255,255,0.05)" }}
                    >
                      <div style={{ fontSize: "22px" }}>{cert.icon}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 700 }}>{cert.name}</div>
                        <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", marginTop: "2px" }}>{cert.issuer}</div>
                      </div>
                      <ChevronLeft size={18} style={{ transform: "rotate(180deg)", opacity: 0.3 }} />
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Individual Cert Viewers */}
              {activeApp.startsWith("cert_") && (
                <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                  <div style={{ flex: 1, backgroundColor: "#000", borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", marginBottom: "20px" }}>
                     <img 
                      src={activeApp === "cert_redhat" ? "/certificates/redhat.png" : (activeApp === "cert_vatrenas" ? "/certificates/vatrenas.jpg" : `/certificates/${activeApp.replace('cert_', '')}.png`)} 
                      style={{ width: "100%", height: "100%", objectFit: "contain" }} 
                     />
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: 700 }}>Verified Credential</h2>
                    <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", marginTop: "5px" }}>{activeApp.replace("cert_", "").toUpperCase()}</p>
                  </div>
                </div>
              )}

              {/* Contact App */}
              {activeApp === "contact" && <MobileContactForm />}

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
