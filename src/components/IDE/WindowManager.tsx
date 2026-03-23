"use client";

import { AnimatePresence, motion } from "framer-motion";
import Window from "./Window";
import { WINDOW_DATA } from "./WindowsDesktop";

interface WindowManagerProps {
  focusStack: string[];
  minimized: string[];
  maximized: string[];
  onClose: (id: string) => void;
  onFocus: (id: string) => void;
  onMinimize: (id: string) => void;
  onMaximize: (id: string) => void;
}

export default function WindowManager({ 
  focusStack, 
  minimized, 
  maximized, 
  onClose, 
  onFocus, 
  onMinimize, 
  onMaximize 
}: WindowManagerProps) {
  const isAltTabbing = false; // Placeholder for future alt-tab logic if needed

  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 10 }}>
      {/* Alt+Tab backdrop (optional/reserved) */}
      <AnimatePresence>
        {isAltTabbing && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.4)",
              zIndex: 900
            }}
          />
        )}
      </AnimatePresence>

      {/* Render windows from the shared focusStack */}
      {focusStack.map((id, index) => {
        const data = (WINDOW_DATA as Record<string, any>)[id];
        if (!data) return null;
        const isFocused = index === focusStack.length - 1;
        const isMaximized = maximized.includes(id);
        const isMinimized = minimized.includes(id);
        
        return (
          <Window 
            key={id}
            id={id}
            title={data.title}
            color={data.color}
            width={data.width}
            height={data.height}
            zIndex={100 + index}
            isFocused={isFocused}
            isMaximized={isMaximized}
            isMinimized={isMinimized}
            isAltTabbing={isAltTabbing}
            stackIndex={index}
            totalStack={focusStack.length}
            onClose={() => onClose(id)}
            onClick={() => onFocus(id)}
            onMinimize={() => onMinimize(id)}
            onMaximize={() => onMaximize(id)}
          />
        );
      })}
    </div>
  );
}
