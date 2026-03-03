import './globals.css';
import type { Metadata } from 'next';
import Cursor from '@/components/Cursor';
import Particles from '@/components/Particles';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
    title: 'Mohammad Ayoub | Full-Stack Developer',
    description: 'Portfolio of Mohammad Ayoub - A modern Japanese-themed journey through software engineering.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <div className="grain-overlay" />
                <Cursor />
                <Particles />
                <Navbar />
                <div className="kanji-bg">ポートフォリオ</div>
                {children}
            </body>
        </html>
    );
}
