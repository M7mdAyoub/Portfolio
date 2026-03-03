'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type ElementType = 'lantern' | 'sakura' | 'firefly';

interface AtmosphericElement {
    id: number;
    type: ElementType;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
    color: string;
    kanji?: string;
    rotation?: number;
}

export default function Particles() {
    const [elements, setElements] = useState<AtmosphericElement[]>([]);

    useEffect(() => {
        const isMobile = window.innerWidth < 768;
        const multiplier = isMobile ? 0.3 : 1; // 70% fewer particles on mobile for high FPS

        const newElements: AtmosphericElement[] = [];

        // 1. Floating Lanterns (Upward) - Reduced for subtlety
        const lanternCount = Math.floor(8 * multiplier);
        for (let i = 0; i < lanternCount; i++) {
            newElements.push({
                id: i,
                type: 'lantern',
                x: Math.random() * 100,
                y: 110, // Start below bottom
                size: Math.random() * 40 + 60,
                duration: Math.random() * 20 + 30,
                delay: Math.random() * -50,
                color: i % 2 === 0 ? 'rgba(188, 24, 35, 0.4)' : 'rgba(212, 175, 55, 0.3)',
                kanji: i % 3 === 0 ? '祭' : i % 5 === 0 ? '灯' : undefined,
            });
        }

        // 2. Falling Sakuras (Downward)
        const sakuraCount = Math.floor(50 * multiplier);
        for (let i = 20; i < 20 + sakuraCount; i++) {
            newElements.push({
                id: i,
                type: 'sakura',
                x: Math.random() * 100,
                y: -10, // Start above top
                size: Math.random() * 10 + 10,
                duration: Math.random() * 10 + 15,
                delay: Math.random() * -30,
                color: '#FFB7C5',
                rotation: Math.random() * 360,
            });
        }

        // 3. Fireflies (Hotaru)
        const fireflyCount = Math.floor(40 * multiplier);
        for (let i = 70; i < 70 + fireflyCount; i++) {
            newElements.push({
                id: i,
                type: 'firefly',
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 4 + 2,
                duration: Math.random() * 4 + 4,
                delay: Math.random() * -10,
                color: Math.random() > 0.5 ? '#A3E635' : '#FFD700',
            });
        }

        setElements(newElements);
    }, []);

    return (
        <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
            {elements.map((el) => {
                if (el.type === 'lantern') {
                    return (
                        <motion.div
                            key={el.id}
                            initial={{ y: '120vh', opacity: 0 }}
                            animate={{
                                y: '-40vh',
                                x: ['0%', '10%', '-5%', '0%'],
                                opacity: [0, 1, 1, 0],
                            }}
                            transition={{
                                duration: el.duration,
                                repeat: Infinity,
                                delay: el.delay,
                                ease: 'linear',
                            }}
                            style={{
                                position: 'absolute',
                                left: `${el.x}%`,
                                width: el.size,
                                height: el.size * 1.3,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <div style={{
                                position: 'relative',
                                width: '100%',
                                height: '100%',
                                background: `radial-gradient(circle at center, ${el.color}, transparent 80%)`,
                                borderRadius: '15%',
                                border: '1px solid rgba(255,255,255,0.2)',
                                boxShadow: `0 0 50px ${el.color}`,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                overflow: 'hidden'
                            }}>
                                <motion.div
                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    style={{ fontSize: el.size * 0.4, color: 'white', fontWeight: 900, textShadow: '0 0 10px white', textAlign: 'center' }}
                                >
                                    {el.kanji}
                                </motion.div>
                                <div style={{ position: 'absolute', top: 0, width: '100%', height: '5px', background: '#111' }} />
                                <div style={{ position: 'absolute', bottom: 0, width: '100%', height: '5px', background: '#111' }} />
                            </div>
                        </motion.div>
                    );
                } else if (el.type === 'sakura') {
                    return (
                        <motion.div
                            key={el.id}
                            initial={{ y: '-10vh', opacity: 0, rotate: el.rotation }}
                            animate={{
                                y: '110vh',
                                x: ['0px', '50px', '-20px', '30px'],
                                rotate: [el.rotation ?? 0, (el.rotation ?? 0) + 720],
                                rotateY: [0, 360, 0, 360],
                                opacity: [0, 0.8, 0.8, 0],
                            }}
                            transition={{
                                duration: el.duration,
                                repeat: Infinity,
                                delay: el.delay,
                                ease: "linear"
                            }}
                            style={{
                                position: 'absolute',
                                left: `${el.x}%`,
                                width: el.size,
                                height: el.size,
                                backgroundColor: el.color,
                                borderRadius: '100% 0% 100% 0% / 100% 0% 100% 0%',
                                boxShadow: `0 0 10px ${el.color}`,
                            }}
                        />
                    );
                } else {
                    // Firefly (Hotaru)
                    return (
                        <motion.div
                            key={el.id}
                            animate={{
                                x: [0, 30, -20, 0],
                                y: [0, -40, 20, 0],
                                opacity: [0, 1, 0, 0.8, 0],
                                scale: [1, 1.5, 1, 1.2, 1],
                            }}
                            transition={{
                                duration: el.duration,
                                repeat: Infinity,
                                delay: el.delay,
                                ease: "easeInOut"
                            }}
                            style={{
                                position: 'absolute',
                                left: `${el.x}%`,
                                top: `${el.y}%`,
                                width: el.size,
                                height: el.size,
                                backgroundColor: el.color,
                                borderRadius: '50%',
                                boxShadow: `0 0 20px ${el.color}`,
                                filter: 'blur(1px)',
                            }}
                        />
                    );
                }
            })}
        </div>
    );
}
