"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const codeLines = [
  "class MohammadAyoub",
  "  attr_accessor :name, :role, :tech_stack",
  "",
  "  def initialize",
  "    @name = 'Mohammad Ayoub'",
  "    @role = 'Full-Stack Developer'",
  "    @tech_stack = ['Next.js', 'Flutter', 'ASP.NET Core', 'C']",
  "  end",
  "",
  "  def build_experience",
  "    'HTU Graduate | Junior Full-Stack @ Vatrenas'",
  "  end",
  "end",
  "",
  "dev = MohammadAyoub.new",
  "puts dev.build_experience"
];

const fullCodeString = codeLines.join('\n');

export default function LiveCodingIntro() {
  const [displayedText, setDisplayedText] = useState("");
  const [, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    let typingInterval: NodeJS.Timeout;
    let timeout1: NodeJS.Timeout;
    let timeout2: NodeJS.Timeout;
    let isCancelled = false; // Strict Mode safety toggle
    
    const typeCode = () => {
      if (isCancelled) return;
      setIsTyping(true);
      
      typingInterval = setInterval(() => {
        if (isCancelled) {
          clearInterval(typingInterval);
          return;
        }
        
        setDisplayedText(fullCodeString.slice(0, index));
        index++;
        
        if (index > fullCodeString.length + 1) {
          clearInterval(typingInterval);
          setIsTyping(false);
          
          // Wait briefly, then trigger "Select All / Delete" flash effect
          timeout1 = setTimeout(() => {
            if (isCancelled) return;
            setDisplayedText(""); // The "flash delete"
            index = 0;
            // Loop again
            timeout2 = setTimeout(typeCode, 500); 
          }, 3000); // Wait 3 seconds to read
        }
      }, 50); // Typing speed
    };

    typeCode();

    return () => {
      isCancelled = true;
      clearInterval(typingInterval);
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  return (
    <div style={{ position: "absolute", inset: "16px 20px", zIndex: 5, pointerEvents: "none" }}>
      <pre style={{ margin: 0, paddingLeft: "24px", borderLeft: "1px solid #44475a", fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "14px", lineHeight: "1.6", color: "#f8f8f2", whiteSpace: "pre-wrap" }}>
        <span dangerouslySetInnerHTML={{ __html: highlightSyntax(displayedText) }} />
        {/* Synchronized blinking cursor at the end of the text */}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          style={{ 
            display: "inline-block", 
            width: "8px", 
            height: "16px", 
            backgroundColor: "#ff79c6", 
            marginLeft: "3px",
            verticalAlign: "middle",
            boxShadow: "0 0 5px #ff79c6"
          }}
        />
      </pre>
    </div>
  );
}

// Simple syntax highlighting to add colors
function highlightSyntax(text: string) {
  // Ruby keywords
  let highlighted = text.replace(/\b(class|def|end|attr_accessor|return|puts|new)\b/g, '<span style="color:#ff79c6; font-weight: bold;">$&</span>');
  // Instance variables
  highlighted = highlighted.replace(/@[a-zA-Z_]+/g, '<span style="color:#bd93f9">$&</span>'); 
  // Strings
  highlighted = highlighted.replace(/'.*?'/g, '<span style="color:#f1fa8c">$&</span>');
  // Class Names
  highlighted = highlighted.replace(/\b(MohammadAyoub)\b/g, '<span style="color:#8be9fd; font-style: italic;">$&</span>');
  // Symbols
  highlighted = highlighted.replace(/(:[a-zA-Z_]+)/g, '<span style="color:#50fa7b">$&</span>');
  return highlighted;
}
