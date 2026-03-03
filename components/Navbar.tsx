'use client';

import { motion } from 'framer-motion';

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            style={{
                position: 'fixed',
                top: '2rem',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 1000,
                backgroundColor: 'rgba(12, 12, 12, 0.7)',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--border-color)',
                padding: '0.8rem 2.5rem',
                borderRadius: '50px',
                display: 'flex',
                gap: '2.5rem',
                fontSize: '0.8rem',
                letterSpacing: '0.2rem',
                textTransform: 'uppercase',
            }}
        >
            <a href="#about" style={{ fontWeight: 600 }}>About</a>
            <a href="#experience" style={{ fontWeight: 600 }}>Experince</a>
            <a href="#projects" style={{ fontWeight: 600 }}>Projects</a>
            <a href="#skills" style={{ fontWeight: 600 }}>Skills</a>
            <a href="#certificates" style={{ fontWeight: 600 }}>Certificates</a>
        </motion.nav>
    );
}
