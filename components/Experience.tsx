'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const experiences = [
    {
        role: "Full-Stack Development Junior",
        company: "Vatrenas",
        period: "Jul 2025 – Feb 2026",
        description: "Vatrenas is a B2B e-commerce platform connecting vendors and shops for wholesale trade.",
        points: [
            "Architected and deployed a new product-level subscription layer, engineering complex revenue-sharing logic.",
            "Led research and implementation of Redis and Elasticsearch, documenting caching strategies and search architecture.",
            "Designed a custom synonym-generation pipeline for multilingual search using database-driven Rake tasks and OpenAI API.",
            "Spearheaded end-to-end validation for a critical checkout database restructure, testing financial calculations.",
            "Enforced strict B2B data visibility rules and built robust brand activation/deactivation logic.",
            "Engineered a dynamic content management system and extended reporting pipelines with advanced Excel exports.",
            "Optimized platform stability by resolving complex caching layer issues and fixing critical front-end bugs."
        ]
    },
    {
        role: "Freelance Front-end Developer",
        company: "Remote – Amman, Jordan",
        period: "Feb 2023 – Nov 2023",
        description: "Developed and deployed responsive websites for multiple clients.",
        points: [
            "Collaborated remotely with stakeholders to gather requirements and deliver timely updates.",
            "Utilized WordPress and Adalo to build low-code and no-code solutions for local businesses and startups.",
            "Ensured high client satisfaction and repeat work through responsive design delivery."
        ]
    }
];

export default function Experience() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    return (
        <section id="experience" ref={containerRef} style={{ position: 'relative' }}>
            <div className="container">
                <div className="section-header">
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
                        <h2 className="brush-text" style={{ fontSize: '4.5rem', margin: 0 }}>
                            Experience
                        </h2>
                        <div style={{ width: '100px', height: '2px', background: 'var(--accent-color)', marginTop: '1.5rem' }} />
                    </motion.div>
                    <div className="section-subtitle">
                        History
                    </div>
                </div>

                <div style={{ position: 'relative' }}>
                    <motion.div style={{ position: 'absolute', left: '0', top: '0', width: '2px', height: '100%', background: 'var(--accent-color)', originY: 0, scaleY: scrollYProgress, zIndex: 2 }} />
                    <div style={{ position: 'absolute', left: '0', top: '0', width: '2px', height: '100%', background: 'var(--border-color)', zIndex: 1 }} />

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.2 }}
                                style={{ position: 'relative', paddingLeft: '3rem' }}
                            >
                                <div style={{
                                    position: 'absolute',
                                    left: '-6px',
                                    top: '10px',
                                    width: '14px',
                                    height: '14px',
                                    background: 'var(--accent-color)',
                                    borderRadius: '50%',
                                    boxShadow: '0 0 10px var(--accent-color)',
                                    zIndex: 3
                                }} />

                                <span style={{ fontSize: '0.9rem', color: 'var(--secondary-color)', fontWeight: 'bold' }}>{exp.period}</span>
                                <h3 style={{ fontSize: '1.8rem', margin: '0.5rem 0' }}>{exp.role} @ <span style={{ color: 'var(--accent-color)' }}>{exp.company}</span></h3>
                                <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text-color)', fontStyle: 'italic', opacity: 0.8 }}>{exp.description}</p>

                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {exp.points.map((pt, i) => (
                                        <li key={i} style={{ marginBottom: '0.8rem', color: 'var(--muted-text)', display: 'flex', gap: '0.8rem', alignItems: 'flex-start', lineHeight: '1.6' }}>
                                            <span style={{ color: 'var(--accent-color)', marginTop: '0.2rem' }}>✦</span> {pt}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
