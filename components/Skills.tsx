'use client';

import { motion } from 'framer-motion';
import {
    Code2,
    Globe,
    Smartphone,
    Database,
    Cloud,
    Cpu,
    Layers,
    Layout,
    Terminal,
    Server,
    Zap,
    Shield,
    Search,
    GitBranch,
    Container,
    Flame,
    Box,
    FileCode,
    Palette
} from 'lucide-react';

const skills = [
    { name: "C#  /  ASP.NET Core", icon: <Code2 size={24} />, category: "Backend Framework", span: 'col-span-2' },
    { name: "JavaScript", icon: <FileCode size={24} />, category: "Core Language", span: 'col-span-1' },
    { name: "Node.js / Express", icon: <Server size={24} />, category: "Backend Runtime", span: 'col-span-1' },
    { name: "Next.js", icon: <Layers size={24} />, category: "Modern Frontend", span: 'col-span-1' },
    { name: "HTML / CSS", icon: <Palette size={24} />, category: "Web Foundations", span: 'col-span-1' },
    { name: "Flutter", icon: <Smartphone size={24} />, category: "Mobile UX", span: 'col-span-1' },
    { name: "Firebase", icon: <Flame size={24} />, category: "BaaS / Auth", span: 'col-span-1' },
    { name: "C", icon: <Cpu size={24} />, category: "Systems Programming", span: 'col-span-1' },
    { name: "Python", icon: <Terminal size={24} />, category: "Scripting / AI", span: 'col-span-1' },
    { name: "SQL Server", icon: <Database size={24} />, category: "Database", span: 'col-span-2' },
    { name: "PHP / XAMPP", icon: <Globe size={24} />, category: "Classic Web Stack", span: 'col-span-1' },
    { name: "Odoo ERP", icon: <Box size={24} />, category: "Enterprise", span: 'col-span-1' },
    { name: "GitHub", icon: <GitBranch size={24} />, category: "Version Control", span: 'col-span-1' },
    { name: "Docker", icon: <Container size={24} />, category: "Containerization", span: 'col-span-1' },
    { name: "Bootstrap", icon: <Layout size={24} />, category: "UI Framework", span: 'col-span-1' },
    { name: "Redis", icon: <Zap size={24} />, category: "Caching", span: 'col-span-1' },
    { name: "Elasticsearch", icon: <Search size={24} />, category: "Search Tech", span: 'col-span-1' },
    { name: "Red Hat", icon: <Shield size={24} />, category: "System Admin", span: 'col-span-1' },
    { name: "Ruby on Rails", icon: <Code2 size={24} />, category: "Backend Framework", span: 'col-span-1' },
    { name: "Cloud Computing", icon: <Cloud size={24} />, category: "Infrastructure", span: 'col-span-1' },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function Skills() {
    return (
        <section id="skills">
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="brush-text"
                        style={{ fontSize: '3.5rem', margin: 0 }}
                    >
                        Capabilities
                    </motion.h2>
                    <p style={{ maxWidth: '300px', color: 'var(--muted-text)', fontSize: '0.9rem', textAlign: 'right' }}>
                        A fusion of enterprise engineering and modern web craftsmanship.
                    </p>
                </div>

                <motion.div
                    className="bento-grid"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className={`bento-item ${skill.span || ''}`}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                gridColumn: skill.span === 'col-span-2' ? 'span 2' : 'span 1'
                            }}
                        >
                            <div style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>{skill.icon}</div>
                            <div>
                                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>{skill.name}</h4>
                                <p style={{ fontSize: '0.7rem', color: 'var(--secondary-color)', textTransform: 'uppercase', letterSpacing: '0.1rem' }}>{skill.category}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
