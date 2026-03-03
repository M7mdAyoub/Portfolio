'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface Project {
    title: string;
    tech: string;
    description: string;
    tag: string;
    thumbnail: string;
    gallery?: string[];
    galleryLabels?: string[];
    repo?: string;
    link?: string;
    apkLink?: string;
}

const projects: Project[] = [
    {
        title: "PTA — Professional Taekwondo Academy",
        tech: "Flutter, Firebase, WhatsApp API",
        description: "Co-developed the TeamsCave sports management ecosystem, taking full ownership of the premium whitelabel mobile application. This specific design for PTA empowers students and parents with streamlined attendance, event registration, and secure digital identity management.",
        tag: "Mobile Whitelabel",
        thumbnail: "/pta/landingpage.jpg",
        apkLink: "https://drive.google.com/uc?export=download&id=1TpUETH8vr7AbCuVcziwxZH4M088Uxn_t",
        gallery: [
            "/pta/landingpage.jpg",
            "/pta/loginpage.jpg",
            "/pta/playerdashboard.jpg",
            "/pta/createpasswordpage.jpg",
            "/pta/playerinfopage.jpg",
            "/pta/attendancepage.jpg",
            "/pta/childrenlist.jpg",
            "/pta/paymentpage.jpg",
            "/pta/eventspage.jpg",
            "/pta/eventsdetailspage.jpg",
        ],
        galleryLabels: [
            "Landing Screen", "Login", "Player Dashboard", "Setup Password", "Profile Details",
            "Attendance Log", "Children Management", "Payment Record", "Upcoming Events", "Event Logistics"
        ]
    },
    {
        title: "Chickanji Restaurant Web",
        tech: "HTML, CSS, JavaScript, PHP, XAMPP",
        description: "Developed a basic food ordering website for a fictional chicken restaurant, implementing PHP with XAMPP for database connectivity. Managed all stages of front-end and back-end development.",
        tag: "Full-Stack Web",
        thumbnail: "/chickanji/portfolio_home_1772438436394.png",
        repo: "https://github.com/M7mdAyoub/chickanji",
        gallery: [
            "/chickanji/portfolio_home_1772438436394.png",
            "/chickanji/portfolio_menu_1772438431068.png",
            "/chickanji/portfolio_about_1772438441646.png",
            "/chickanji/portfolio_contact_1772438445792.png",
            "/chickanji/portfolio_cart_1772438449835.png",
            "/chickanji/portfolio_cart_1772438456403.png",
            "/chickanji/portfolio_login_1772438483754.png",
            "/chickanji/portfolio_signup_1772438484294.png",
            "/chickanji/portfolio_admin_overview_1772438460834.png",
            "/chickanji/portfolio_admin_menu_1772438461552.png",
            "/chickanji/portfolio_admin_add_modal_png_1772439393078.png",
            "/chickanji/portfolio_admin_edit_modal_png_1772439403419.png",
            "/chickanji/portfolio_admin_search_png_1772439387071.png",
        ],
        galleryLabels: [
            "Home", "Menu", "About", "Contact", "Cart", "Cart (Filled)",
            "Login", "Sign Up", "Admin Overview", "Admin Menu",
            "Admin Add", "Admin Edit", "Admin Search"
        ]
    },
    {
        title: "UniDB — Database Management System",
        tech: "C, Node.js, Express, HTML, CSS, JavaScript",
        description: "Built a relational database management system from scratch in C — no external DB engines. Implemented binary storage, hash indexing, concurrency control, and cascading operations. Added a modern web interface using Node.js and Express that reads/writes the same binary files.",
        tag: "Systems Engineering",
        thumbnail: "/unidb/02_dashboard.png",
        repo: "https://github.com/M7mdAyoub/Database-Management-System",
        link: "https://unidb.onrender.com",
        gallery: [
            "/unidb/01_login.png",
            "/unidb/02_dashboard.png",
            "/unidb/03_students.png",
            "/unidb/04_courses.png",
            "/unidb/05_instructors.png",
            "/unidb/06_enrollments.png",
            "/unidb/07_payments.png",
            "/unidb/08_assignments.png",
            "/unidb/09_activity_log.png",
        ],
        galleryLabels: [
            "Login", "Dashboard", "Students", "Courses", "Instructors",
            "Enrollments", "Payments", "Assignments", "Activity Log"
        ]
    },
    {
        title: "NatureDesk — Ticketing System",
        tech: "ASP.NET Core MVC, C#, SQL Server, Bootstrap",
        description: "A full-featured IT helpdesk ticketing system with role-based access, bilingual support (English/Arabic), real-time dashboard analytics, ticket lifecycle management, and category/user administration.",
        tag: "Enterprise Web",
        thumbnail: "/naturedesk/01_landing_page.png",
        repo: "https://github.com/M7mdAyoub/TicketingSystem",
        link: "https://freakingaverage-naturedesk.hf.space",
        gallery: [
            "/naturedesk/01_landing_page.png",
            "/naturedesk/02_landing_features.png",
            "/naturedesk/03_landing_cta.png",
            "/naturedesk/04_login_english.png",
            "/naturedesk/05_login_arabic.png",
            "/naturedesk/06_dashboard.png",
            "/naturedesk/07_tickets_list.png",
            "/naturedesk/08_categories_list.png",
            "/naturedesk/09_users_list.png",
            "/naturedesk/10_create_ticket.png",
            "/naturedesk/11_ticket_details.png",
        ],
        galleryLabels: [
            "Landing Page", "Features", "Call to Action", "Login (EN)", "Login (AR)",
            "Dashboard", "Tickets List", "Categories", "Users List",
            "Create Ticket", "Ticket Details"
        ]
    }
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showApkWarning, setShowApkWarning] = useState(false);

    const openModal = (proj: Project) => {
        if (proj.gallery && proj.gallery.length > 0) {
            setCurrentSlide(0);
            setSelectedProject(proj);
        }
    };

    const closeModal = () => {
        setSelectedProject(null);
        setShowApkWarning(false);
    };

    const nextSlide = () => {
        if (selectedProject?.gallery) {
            setCurrentSlide((prev) => (prev + 1) % selectedProject.gallery!.length);
        }
    };

    const prevSlide = () => {
        if (selectedProject?.gallery) {
            setCurrentSlide((prev) => (prev - 1 + selectedProject.gallery!.length) % selectedProject.gallery!.length);
        }
    };

    return (
        <section id="projects">
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '5rem' }}>
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="brush-text"
                        style={{ fontSize: '4rem', margin: 0 }}
                    >
                        Projects
                    </motion.h2>
                    <div style={{ textAlign: 'right', fontSize: '0.8rem', color: 'var(--muted-text)', textTransform: 'uppercase', letterSpacing: '0.3rem' }}>
                        Development Showcases
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                    {projects.map((proj, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bento-item"
                            style={{ padding: 0, cursor: proj.gallery ? 'pointer' : 'default' }}
                            onClick={() => openModal(proj)}
                        >
                            <div style={{ position: 'relative', width: '100%', height: '220px', overflow: 'hidden' }}>
                                <motion.img
                                    whileHover={{ scale: 1.1 }}
                                    src={proj.thumbnail}
                                    alt={proj.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = 'https://images.unsplash.com/photo-1542332213-9b5a5a3fab35?q=80&w=2070&auto=format&fit=crop';
                                    }}
                                />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, var(--card-bg))' }} />
                                <div style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    background: 'var(--accent-color)',
                                    color: 'white',
                                    padding: '0.3rem 0.8rem',
                                    fontSize: '0.7rem',
                                    letterSpacing: '0.1rem'
                                }}>
                                    {proj.tag}
                                </div>

                                {proj.gallery && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                        style={{
                                            position: 'absolute',
                                            inset: 0,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            background: 'rgba(0, 0, 0, 0.4)',
                                            backdropFilter: 'blur(2px)',
                                        }}
                                    >
                                        <span style={{
                                            color: 'white',
                                            fontSize: '0.9rem',
                                            letterSpacing: '0.2rem',
                                            textTransform: 'uppercase',
                                            border: '1px solid rgba(255,255,255,0.5)',
                                            padding: '0.6rem 1.5rem',
                                            backgroundColor: 'rgba(188, 24, 35, 0.3)',
                                        }}>
                                            View Showcase 🖼
                                        </span>
                                    </motion.div>
                                )}
                            </div>

                            <div style={{ padding: '2rem' }}>
                                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--secondary-color)' }}>{proj.title}</h3>
                                <p style={{ fontSize: '0.8rem', color: 'var(--muted-text)', marginBottom: '1.2rem', fontWeight: 600 }}>{proj.tech}</p>
                                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-color)', opacity: 0.9 }}>{proj.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* ── Full-Screen Gallery Modal ── */}
            <AnimatePresence>
                {selectedProject && selectedProject.gallery && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={closeModal}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            zIndex: 10000,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'rgba(0, 0, 0, 0.85)',
                            backdropFilter: 'blur(10px)',
                            cursor: 'pointer',
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.85, opacity: 0 }}
                            transition={{ type: 'spring', damping: 20, stiffness: 200 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                position: 'relative',
                                maxWidth: '1100px',
                                width: '90vw',
                                maxHeight: '85vh',
                                background: 'var(--card-bg)',
                                border: '1px solid var(--border-color)',
                                boxShadow: '0 0 60px rgba(188, 24, 35, 0.15), 0 0 120px rgba(0,0,0,0.6)',
                                display: 'flex',
                                flexDirection: 'column',
                                overflow: 'hidden',
                                cursor: 'default',
                            }}
                        >
                            {/* Modal Header */}
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '1.2rem 2rem',
                                borderBottom: '1px solid var(--border-color)',
                                background: 'rgba(0,0,0,0.3)',
                            }}>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', color: 'var(--secondary-color)', margin: 0 }}>
                                        {selectedProject.title}
                                    </h3>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.3rem' }}>
                                        <p style={{ fontSize: '0.75rem', color: 'var(--muted-text)', margin: 0, letterSpacing: '0.1rem' }}>
                                            {selectedProject.tech}
                                        </p>
                                        {selectedProject.link && (
                                            <a
                                                href={selectedProject.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    fontSize: '0.7rem',
                                                    color: 'var(--accent-color)',
                                                    border: '1px solid var(--accent-color)',
                                                    padding: '0.2rem 0.6rem',
                                                    letterSpacing: '0.1rem',
                                                    textTransform: 'uppercase',
                                                    textDecoration: 'none',
                                                }}
                                            >
                                                Live ↗
                                            </a>
                                        )}
                                        {selectedProject.repo && (
                                            <a
                                                href={selectedProject.repo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    fontSize: '0.7rem',
                                                    color: 'var(--muted-text)',
                                                    border: '1px solid var(--border-color)',
                                                    padding: '0.2rem 0.6rem',
                                                    letterSpacing: '0.1rem',
                                                    textTransform: 'uppercase',
                                                    textDecoration: 'none',
                                                }}
                                            >
                                                Repo ↗
                                            </a>
                                        )}
                                        {selectedProject.apkLink && (
                                            <button
                                                onClick={() => setShowApkWarning(true)}
                                                style={{
                                                    fontSize: '0.7rem',
                                                    background: 'var(--accent-color)',
                                                    color: 'white',
                                                    border: 'none',
                                                    padding: '0.2rem 0.8rem',
                                                    letterSpacing: '0.1rem',
                                                    textTransform: 'uppercase',
                                                    cursor: 'pointer',
                                                }}
                                            >
                                                Download APK 📥
                                            </button>
                                        )}
                                    </div>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.2, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={closeModal}
                                    style={{
                                        background: 'none',
                                        border: '1px solid var(--border-color)',
                                        color: 'var(--text-color)',
                                        fontSize: '1.5rem',
                                        width: '40px',
                                        height: '40px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                    }}
                                >
                                    ✕
                                </motion.button>
                            </div>

                            {/* Image Slider */}
                            <div style={{
                                flex: 1,
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'hidden',
                                background: '#0a0a0a',
                                minHeight: '400px',
                            }}>
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={currentSlide}
                                        src={selectedProject.gallery[currentSlide]}
                                        alt={`${selectedProject.title} - ${selectedProject.galleryLabels?.[currentSlide] || `Slide ${currentSlide + 1}`}`}
                                        initial={{ opacity: 0, x: 60 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -60 }}
                                        transition={{ duration: 0.35 }}
                                        style={{
                                            maxWidth: '100%',
                                            maxHeight: '55vh',
                                            objectFit: 'contain',
                                        }}
                                    />
                                </AnimatePresence>

                                {/* APK Warning Overlay */}
                                <AnimatePresence>
                                    {showApkWarning && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            style={{
                                                position: 'absolute',
                                                inset: 0,
                                                zIndex: 100,
                                                background: 'rgba(0,0,0,0.9)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                padding: '2rem'
                                            }}
                                        >
                                            <motion.div
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                style={{
                                                    background: 'var(--bg-color)',
                                                    border: '2px solid var(--accent-color)',
                                                    padding: '2.5rem',
                                                    maxWidth: '450px',
                                                    textAlign: 'center',
                                                    position: 'relative'
                                                }}
                                            >
                                                <h4 style={{ color: 'var(--accent-color)', fontSize: '1.5rem', marginBottom: '1rem' }}>Android App (APK)</h4>
                                                <p style={{ color: 'var(--text-color)', lineHeight: '1.6', marginBottom: '2rem', fontSize: '1rem' }}>
                                                    This is a direct APK file download for Android devices. You will need to allow installation from "Unknown Sources" in your device settings to install it.
                                                </p>
                                                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                                                    <button
                                                        onClick={() => setShowApkWarning(false)}
                                                        style={{
                                                            background: 'none',
                                                            border: '1px solid var(--border-color)',
                                                            color: 'var(--text-color)',
                                                            padding: '0.8rem 1.5rem',
                                                            cursor: 'pointer'
                                                        }}
                                                    >
                                                        Cancel
                                                    </button>
                                                    <a
                                                        href={selectedProject.apkLink}
                                                        download
                                                        onClick={() => setShowApkWarning(false)}
                                                        style={{
                                                            background: 'var(--accent-color)',
                                                            color: 'white',
                                                            textDecoration: 'none',
                                                            padding: '0.8rem 1.5rem',
                                                            cursor: 'pointer'
                                                        }}
                                                    >
                                                        Download Anyway
                                                    </a>
                                                </div>
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Prev Button */}
                                <motion.button
                                    whileHover={{ scale: 1.15, backgroundColor: 'var(--accent-color)' }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={prevSlide}
                                    style={{
                                        position: 'absolute',
                                        left: '1rem',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        background: 'rgba(26, 26, 26, 0.8)',
                                        border: '1px solid var(--border-color)',
                                        color: 'var(--text-color)',
                                        width: '45px',
                                        height: '45px',
                                        fontSize: '1.3rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        backdropFilter: 'blur(5px)',
                                    }}
                                >
                                    ‹
                                </motion.button>

                                {/* Next Button */}
                                <motion.button
                                    whileHover={{ scale: 1.15, backgroundColor: 'var(--accent-color)' }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={nextSlide}
                                    style={{
                                        position: 'absolute',
                                        right: '1rem',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        background: 'rgba(26, 26, 26, 0.8)',
                                        border: '1px solid var(--border-color)',
                                        color: 'var(--text-color)',
                                        width: '45px',
                                        height: '45px',
                                        fontSize: '1.3rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        backdropFilter: 'blur(5px)',
                                    }}
                                >
                                    ›
                                </motion.button>
                            </div>

                            {/* Footer: Label + Dot Indicators + Counter */}
                            <div style={{
                                padding: '1rem 2rem',
                                borderTop: '1px solid var(--border-color)',
                                background: 'rgba(0,0,0,0.3)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}>
                                <span style={{
                                    color: 'var(--text-color)',
                                    fontSize: '0.85rem',
                                    fontWeight: 600,
                                    letterSpacing: '0.05rem',
                                }}>
                                    {selectedProject.galleryLabels?.[currentSlide] || `Slide ${currentSlide + 1}`}
                                </span>

                                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                    {selectedProject.gallery.map((_, idx) => (
                                        <motion.div
                                            key={idx}
                                            onClick={() => setCurrentSlide(idx)}
                                            animate={{
                                                width: idx === currentSlide ? '20px' : '8px',
                                                backgroundColor: idx === currentSlide ? 'var(--accent-color)' : 'var(--border-color)',
                                            }}
                                            style={{
                                                height: '8px',
                                                borderRadius: '4px',
                                                cursor: 'pointer',
                                            }}
                                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                        />
                                    ))}
                                </div>

                                <span style={{
                                    color: 'var(--muted-text)',
                                    fontSize: '0.8rem',
                                    letterSpacing: '0.1rem',
                                }}>
                                    {currentSlide + 1} / {selectedProject.gallery.length}
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
