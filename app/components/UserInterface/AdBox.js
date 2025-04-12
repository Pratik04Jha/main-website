"use client";
import React, { useState } from "react";

const AdBox = () => {
  const [cursorPos, setCursorPos] = useState({ x: 100, y: 100 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCursorPos({ x, y });
  };

  return (
    <div
      className="h-80 w-80 border border-white/10 rounded-lg cursor-pointer group relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isHovered ? "opacity-70" : "opacity-70"
        }`}
      >
        <div
          className="w-full h-full bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(255,255,255,0.1)_0%,transparent_80%)]"
          style={{
            "--x": `${cursorPos.x}px`,
            "--y": `${cursorPos.y}px`,
          }}
        />
      </div>
    </div>
  );
};

export default AdBox;
