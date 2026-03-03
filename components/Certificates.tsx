'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Award, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const certificates = [
    { name: "VATRENAS - Certificate of Internship", date: "2026", issuer: "Vatrenas B2B", image: "/certificates/certificate1.jpg" },
    { name: "Red Hat System Administration I (RH124)", date: "2023", issuer: "Red Hat", image: "/certificates/certificate2.png" },
    { name: "Data Manipulation with pandas", date: "2023", issuer: "DataCamp", image: "/certificates/certificate3.png" },
    { name: "Introduction to NumPy", date: "2023", issuer: "DataCamp", image: "/certificates/certificate4.png" },
    { name: "Intermediate Python", date: "2023", issuer: "DataCamp", image: "/certificates/certificate5.png" },
    { name: "Introduction to Python", date: "2023", issuer: "DataCamp", image: "/certificates/certificate6.png" }
];

export default function Certificates() {
    const [index, setIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const offsetStep = isMobile ? 260 : 350;
    const cardWidth = isMobile ? 310 : 400;

    const next = () => {
        setIndex((prev) => (prev + 1) % certificates.length);
    };

    const prev = () => {
        setIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
    };

    return (
        <section id="certificates" style={{ position: 'relative', overflow: 'hidden', padding: '10rem 0' }}>
            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                {/* Header */}
                <div className="section-header">
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
                        <h2 className="brush-text" style={{ fontSize: '4.5rem', margin: 0 }}>
                            Credentials
                        </h2>
                        <div style={{ width: '100px', height: '2px', background: 'var(--accent-color)', marginTop: '1.5rem' }} />
                    </motion.div>

                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                        <div className="section-subtitle" style={{ margin: 0, textAlign: 'right', display: isMobile ? 'none' : 'block' }}>
                            Professional Achievements
                        </div>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <button onClick={prev} style={navBtnStyle}><ChevronLeft size={24} /></button>
                            <button onClick={next} style={navBtnStyle}><ChevronRight size={24} /></button>
                        </div>
                    </div>
                </div>

                {/* 3D Carousel Container */}
                <div
                    ref={containerRef}
                    style={{
                        height: '500px',
                        perspective: '1000px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative'
                    }}
                >
                    {certificates.map((cert, i) => {
                        const offset = (i - index + certificates.length) % certificates.length;
                        // Handle circular offset for a smooth 3D loop
                        let displayOffset = offset;
                        if (offset > certificates.length / 2) displayOffset -= certificates.length;
                        if (offset < -certificates.length / 2) displayOffset += certificates.length;

                        const isCenter = displayOffset === 0;

                        return (
                            <motion.div
                                key={i}
                                initial={false}
                                animate={{
                                    x: displayOffset * offsetStep,
                                    scale: isCenter ? 1 : 0.8,
                                    rotateY: displayOffset * (isMobile ? -15 : -30),
                                    z: isCenter ? 0 : -200,
                                    opacity: Math.abs(displayOffset) > 2 ? 0 : 1 - Math.abs(displayOffset) * 0.3,
                                }}
                                transition={{ type: 'spring', damping: 20, stiffness: 100 }}
                                style={{
                                    position: 'absolute',
                                    width: `${cardWidth}px`,
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    backdropFilter: 'blur(10px)',
                                    borderRadius: '24px',
                                    border: isCenter ? '2px solid var(--accent-color)' : '1px solid rgba(255,255,255,0.1)',
                                    padding: '1.5rem',
                                    boxShadow: isCenter ? '0 20px 60px rgba(188, 24, 35, 0.2)' : 'none',
                                    zIndex: isCenter ? 10 : 1,
                                    cursor: isCenter ? 'grab' : 'pointer'
                                }}
                                onClick={() => !isCenter && setIndex(i)}
                                drag={isCenter ? "x" : false}
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.2}
                                onDragEnd={(e, { offset, velocity }) => {
                                    const swipe = Math.abs(offset.x) * velocity.x;
                                    if (swipe < -1000) {
                                        next();
                                    } else if (swipe > 1000) {
                                        prev();
                                    } else if (offset.x < -50) {
                                        next();
                                    } else if (offset.x > 50) {
                                        prev();
                                    }
                                }}
                            >
                                <div style={{
                                    width: '100%',
                                    height: '250px',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    background: '#000',
                                    marginBottom: '1.5rem',
                                    border: '1px solid rgba(255,255,255,0.05)'
                                }}>
                                    <img
                                        src={cert.image}
                                        alt={cert.name}
                                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                    />
                                </div>

                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-color)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1rem', marginBottom: '1rem' }}>
                                        <ShieldCheck size={14} />
                                        {cert.issuer}
                                    </div>
                                    <h4 style={{ fontSize: '1.3rem', color: 'var(--text-color)', marginBottom: '0.5rem', fontWeight: 500 }}>{cert.name}</h4>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--muted-text)' }}>Verified {cert.date}</div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Carousel indicators */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', marginTop: '4rem' }}>
                    {certificates.map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                width: i === index ? 30 : 8,
                                backgroundColor: i === index ? 'var(--accent-color)' : 'rgba(255,255,255,0.2)'
                            }}
                            onClick={() => setIndex(i)}
                            style={{ height: '8px', borderRadius: '4px', cursor: 'pointer' }}
                        />
                    ))}
                </div>
            </div>

            {/* Background Decorative Element */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80%',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(188, 24, 35, 0.2), transparent)',
                zIndex: 1
            }} />
        </section>
    );
}

const navBtnStyle: React.CSSProperties = {
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    color: 'white',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
};
