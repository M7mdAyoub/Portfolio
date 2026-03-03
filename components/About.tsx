'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <section id="about" ref={containerRef} style={{ position: 'relative' }}>
            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', marginBottom: '4rem' }}>
                    <motion.h2
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="brush-text"
                        style={{ fontSize: '4.5rem', margin: 0 }}
                    >
                        About
                    </motion.h2>
                    <span style={{ fontSize: '0.9rem', color: 'var(--accent-color)', letterSpacing: '0.2rem' }}>PROFILE</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '6rem', alignItems: 'center' }}>
                    <motion.div style={{ y: y1 }}>
                        <h3 style={{ color: 'var(--secondary-color)', marginBottom: '1.5rem', fontSize: '2.2rem' }}>Professional Summary</h3>
                        <p style={{ fontSize: '1.3rem', lineHeight: '2.2', color: 'var(--muted-text)' }}>
                            A computer science graduate with hands-on experience across <strong style={{ color: 'var(--text-color)' }}>full-stack development</strong>,
                            <strong style={{ color: 'var(--text-color)' }}> mobile applications</strong>, and <strong style={{ color: 'var(--text-color)' }}>systems engineering</strong>.
                            Always eager to explore new technologies and tackle any challenge that comes my way — from building databases from scratch to shipping enterprise web apps.
                        </p>

                        <div style={{ marginTop: '3rem' }}>
                            <h4 style={{ color: 'var(--text-color)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1rem' }}>Education</h4>
                            <p style={{ fontSize: '1.1rem', color: 'var(--muted-text)' }}>
                                Bachelor’s Degree in Computer Science<br />
                                <span style={{ color: 'var(--secondary-color)' }}>Al Hussein Technical University (HTU)</span><br />
                                Amman, Jordan • Feb 2026
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        style={{
                            y: y2,
                            opacity: 0,
                            scale: 0.8,
                            padding: '3rem',
                            position: 'relative',
                            aspectRatio: '1',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            backgroundColor: 'rgba(188, 24, 35, 0.05)',
                            border: '1px solid rgba(188, 24, 35, 0.5)',
                            boxShadow: '0 0 30px rgba(188, 24, 35, 0.1), inset 0 0 20px rgba(188, 24, 35, 0.05)',
                            overflow: 'hidden'
                        }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', damping: 10 }}
                        className="bento-item"
                    >
                        {/* Hanko Stamp Signature vertical stripe */}
                        <div style={{
                            position: 'absolute',
                            left: '0',
                            top: '0',
                            bottom: '0',
                            width: '40px',
                            backgroundColor: 'var(--accent-color)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            opacity: 0.8,
                            boxShadow: '2px 0 10px rgba(0,0,0,0.5)'
                        }}>
                            <span style={{
                                writingMode: 'vertical-rl',
                                color: 'var(--bg-color)',
                                fontWeight: 700,
                                letterSpacing: '0.5rem',
                                fontSize: '1.2rem',
                                textShadow: 'none'
                            }}>
                                献 身
                            </span>
                        </div>

                        {/* Background faded Kanji */}
                        <div style={{
                            position: 'absolute',
                            right: '-10%',
                            bottom: '-10%',
                            fontSize: '12rem',
                            fontFamily: 'serif',
                            color: 'var(--accent-color)',
                            opacity: 0.05,
                            pointerEvents: 'none',
                            userSelect: 'none'
                        }}>
                            創
                        </div>

                        <div style={{ paddingLeft: '2rem', position: 'relative', zIndex: 2 }}>
                            <p style={{
                                fontSize: '1.2rem',
                                lineHeight: '1.9',
                                color: 'var(--text-color)',
                                fontStyle: 'italic',
                                fontWeight: 300
                            }}>
                                "Bridging complex logic with intuitive design. Driven by continuous learning and the pursuit of digital craftsmanship."
                            </p>
                        </div>
                    </motion.div>                </div>
            </div>
        </section>
    );
}
