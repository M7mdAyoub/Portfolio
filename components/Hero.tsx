'use client';

import { motion } from 'framer-motion';
import ThreeScene from './ThreeScene';

export default function Hero() {
    return (
        <section className="hero" style={{ textAlign: 'center', position: 'relative', overflow: 'hidden', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ThreeScene />

            {/* Floating Background Kanji */}
            <motion.div
                animate={{ y: [0, -30, 0], opacity: [0.02, 0.05, 0.02] }}
                transition={{ duration: 15, repeat: Infinity }}
                style={{ position: 'absolute', left: '10%', top: '20%', fontSize: '15rem', pointerEvents: 'none' }}
            >
                志
            </motion.div>
            <motion.div
                animate={{ y: [0, 30, 0], opacity: [0.02, 0.05, 0.02] }}
                transition={{ duration: 20, repeat: Infinity }}
                style={{ position: 'absolute', right: '10%', bottom: '20%', fontSize: '15rem', pointerEvents: 'none' }}
            >
                夢
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                style={{ zIndex: 10, position: 'relative' }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}
                >
                    <div style={{ display: 'none', width: '40px', height: '1px', background: 'var(--accent-color)' }} className="hero-divider" />
                    <span className="hero-subtitle" style={{ textTransform: 'uppercase', color: 'var(--secondary-color)', fontWeight: 600 }}>
                        Computer Science Graduate
                    </span>
                    <div style={{ display: 'none', width: '40px', height: '1px', background: 'var(--accent-color)' }} className="hero-divider" />
                </motion.div>

                <h1 className="hero-title" style={{ marginTop: '0', color: 'var(--text-color)', lineHeight: 0.9 }}>
                    <span style={{ display: 'block', opacity: 0.8 }}>MOHAMMAD</span>
                    <span className="gradient-text" style={{ fontStyle: 'italic' }}>AYOUB</span>
                </h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    style={{ maxWidth: '750px', margin: '3rem auto', fontSize: '1.2rem', color: 'var(--muted-text)', lineHeight: '2' }}
                >
                    A versatile computer science graduate passionate about building <span style={{ color: 'var(--text-color)' }}>robust software</span>, solving complex problems, and <span style={{ color: 'var(--accent-color)' }}>continuously adapting</span> to new technologies.
                </motion.p>

                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        display: 'inline-block',
                        padding: '1.2rem 3rem',
                        border: '1px solid var(--accent-color)',
                        color: 'var(--text-color)',
                        fontSize: '0.9rem',
                        letterSpacing: '0.3rem',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        backgroundColor: 'rgba(188, 24, 35, 0.1)',
                        backdropFilter: 'blur(5px)'
                    }}
                >
                    Explore Works
                </motion.div>
            </motion.div>

            {/* Decorative Red Sun */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                    position: 'absolute',
                    top: '20%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '300px',
                    height: '300px',
                    background: 'var(--accent-color)',
                    borderRadius: '50%',
                    filter: 'blur(80px)',
                    zIndex: -1,
                }}
            />

            <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', opacity: 0.5 }}>
                <div style={{ width: '1px', height: '60px', background: 'var(--text-color)', margin: '0 auto' }}></div>
                <span style={{ fontSize: '0.8rem', letterSpacing: '0.2rem', writingMode: 'vertical-rl', marginTop: '1rem' }}>SCROLL</span>
            </div>
        </section>
    );
}
