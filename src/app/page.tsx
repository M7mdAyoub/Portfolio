"use client";

import { useState, useEffect } from "react";
import HeroIntro from "@/components/HeroIntro";
import LaptopFrame from "@/components/LaptopFrame";
import SmartphoneFrame from "@/components/SmartphoneFrame";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <main id="main-scroll-container" style={{ 
      backgroundColor: "#05050a",
      height: "100vh",
      overflowY: "auto",
      overflowX: "hidden",
      scrollSnapType: "y mandatory",
    }}>
      <HeroIntro />
      {isMobile ? <SmartphoneFrame /> : <LaptopFrame />}
    </main>
  );
}
