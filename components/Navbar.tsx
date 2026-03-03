'use client';

import { motion } from 'framer-motion';

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="main-navbar"
        >
            <a href="#about" style={{ fontWeight: 600 }}>About</a>
            <a href="#experience" style={{ fontWeight: 600 }}>Experience</a>
            <a href="#projects" style={{ fontWeight: 600 }}>Projects</a>
            <a href="#skills" style={{ fontWeight: 600 }}>Skills</a>
            <a href="#certificates" style={{ fontWeight: 600 }}>Certificates</a>
        </motion.nav>
    );
}
