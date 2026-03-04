'use client';

import { motion, Variants } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Certificates from '@/components/Certificates';

const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

function AnimatedSection({ children, id }: { children: React.ReactNode, id?: string }) {
    return (
        <motion.div
            id={id}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px" }}
            variants={sectionVariants}
            className="snap-target"
        >
            {children}
        </motion.div>
    );
}

export default function Page() {
    // Smart Scroll System: snaps for short sections, free-scrolls for tall ones
    useEffect(() => {
        let isScrolling = false;
        let timeoutId: NodeJS.Timeout;
        const EDGE_THRESHOLD = 50; // px tolerance for "at the edge"

        const handleWheel = (e: WheelEvent) => {
            // Ignore horizontal scrolls (like swiping through the certificate carousel)
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

            const direction = e.deltaY > 0 ? 1 : -1;
            const snapItems = Array.from(document.querySelectorAll('.snap-target'));
            const viewportHeight = window.innerHeight;

            // Find currently visible section
            let currentIdx = 0;
            let minDistance = Infinity;

            snapItems.forEach((item, idx) => {
                const rect = item.getBoundingClientRect();
                if (Math.abs(rect.top) < minDistance) {
                    minDistance = Math.abs(rect.top);
                    currentIdx = idx;
                }
            });

            const currentEl = snapItems[currentIdx];
            const rect = currentEl.getBoundingClientRect();
            const sectionHeight = rect.height;
            const fitsInViewport = sectionHeight <= viewportHeight + EDGE_THRESHOLD;

            // If the section is taller than the viewport, allow free scrolling
            // until the user reaches the edge
            if (!fitsInViewport) {
                const atTop = rect.top >= -EDGE_THRESHOLD;
                const atBottom = rect.bottom <= viewportHeight + EDGE_THRESHOLD;

                // Scrolling down but haven't reached the bottom of this section yet
                if (direction > 0 && !atBottom) return;
                // Scrolling up but haven't reached the top of this section yet
                if (direction < 0 && !atTop) return;
            }

            // At this point we want to snap — prevent default and animate
            e.preventDefault();

            if (isScrolling) return;
            isScrolling = true;

            // Calculate next section
            const nextIdx = Math.max(0, Math.min(currentIdx + direction, snapItems.length - 1));
            if (nextIdx === currentIdx) {
                isScrolling = false;
                return;
            }

            // Custom Fluid "Japanese Theme" Scroll Animation
            const startY = window.scrollY;
            const targetY = snapItems[nextIdx].getBoundingClientRect().top + startY;
            const distance = targetY - startY;
            const duration = 400;
            let startTime: number | null = null;

            // Easing function: easeOutQuint
            const easeOutQuint = (t: number) => 1 - Math.pow(1 - t, 5);

            const animation = (currentTime: number) => {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const progress = Math.min(timeElapsed / duration, 1);

                const easeProgress = easeOutQuint(progress);
                window.scrollTo(0, startY + distance * easeProgress);

                if (timeElapsed < duration) {
                    requestAnimationFrame(animation);
                }
            };

            requestAnimationFrame(animation);

            // Cooldown to prevent multiple sections scrolling
            timeoutId = setTimeout(() => {
                isScrolling = false;
            }, duration + 100);
        };

        window.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleWheel);
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <main>
            <div className="snap-target">
                <Hero />
            </div>
            <div style={{ padding: '0 5%', position: 'relative', zIndex: 10 }}>

                <AnimatedSection><About /></AnimatedSection>
                <AnimatedSection><Experience /></AnimatedSection>
                <AnimatedSection><Projects /></AnimatedSection>
                <AnimatedSection><Skills /></AnimatedSection>
                <AnimatedSection><Certificates /></AnimatedSection>

                <footer className="snap-target" style={{ padding: '5rem 0', textAlign: 'center', borderTop: '1px solid var(--border-color)', marginTop: '5rem', scrollSnapAlign: 'end' }}>

                    <p style={{ color: 'var(--muted-text)', fontSize: '0.9rem' }}>
                        Designed by Mohammad Ayoub © 2026. Inspired by modern minimalism.
                    </p>
                    <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '2rem', opacity: 0.5 }}>
                        <a href="mailto:mrm7md091@gmail.com">EMAIL</a>
                        <a href="https://www.linkedin.com/in/mohammad-ayoub091/">LINKEDIN</a>
                    </div>
                </footer>
            </div>
        </main>
    );
}
