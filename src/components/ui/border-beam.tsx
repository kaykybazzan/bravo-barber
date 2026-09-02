"use client";

import { useEffect, useState } from "react";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

export function BorderBeam({
  className = "",
  size = 200,
  duration = 15,
  colorFrom = "#ffaa40",
  colorTo = "#a855f7",
  delay = 0,
}: BorderBeamProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        borderRadius: "inherit",
        padding: "2px",
        background: `linear-gradient(90deg, ${colorFrom}, ${colorTo}, ${colorFrom})`,
        backgroundSize: `${size}% 100%`,
        animation: `border-beam ${duration}s linear infinite`,
        animationDelay: `${delay}s`,
        mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        maskComposite: "exclude",
        WebkitMaskComposite: "xor",
        pointerEvents: "none",
      }}
      className={className}
    >
      <style jsx>{`
        @keyframes border-beam {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
}
