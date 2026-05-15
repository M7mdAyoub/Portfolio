"use client";

import { useState, useEffect } from "react";
import HeroIntro from "@/components/HeroIntro";
import dynamic from "next/dynamic";

const LaptopFrame = dynamic(() => import("@/components/LaptopFrame"), { ssr: false });
const SmartphoneFrame = dynamic(() => import("@/components/SmartphoneFrame"), { ssr: false });

export default function Home() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(window.innerWidth < 768 || isMobileUA);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <main id="main-scroll-container" style={{ 
      backgroundColor: "#05050a",
      height: "100dvh",
      overflowY: "auto",
      overflowX: "hidden",
      scrollSnapType: "y mandatory",
    }}>
      <HeroIntro />
      {isMobile === null ? null : (isMobile ? <SmartphoneFrame /> : <LaptopFrame />)}
    </main>
  );
}
