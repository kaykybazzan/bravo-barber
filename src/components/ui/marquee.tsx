"use client";

import { useRef, useEffect, useCallback } from "react";

interface MarqueeProps {
  children: React.ReactNode;
  pauseOnHover?: boolean;
  className?: string;
  duration?: number;
}

export function Marquee({ children, pauseOnHover = true, className = "", duration = 40 }: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true) as HTMLElement;
        duplicatedItem.setAttribute("aria-hidden", "true");
        scrollerRef.current?.appendChild(duplicatedItem);
      });
    }
  }, []);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  return (
    <div
      ref={containerRef}
      className={`scroller ${className}`}
      style={{
        overflow: "hidden",
        maskImage: "linear-gradient(to right, transparent, white 10%, white 90%, transparent)",
      }}
    >
      <div
        ref={scrollerRef}
        className="scroller__inner"
        style={{
          display: "flex",
          gap: "30px",
          paddingBlock: "13px",
          animation: `marquee ${duration}s linear infinite`,
          ...(pauseOnHover && { animationPlayState: "hover" }),
        }}
        onMouseEnter={pauseOnHover ? (e) => e.currentTarget.style.animationPlayState = "paused" : undefined}
        onMouseLeave={pauseOnHover ? (e) => e.currentTarget.style.animationPlayState = "running" : undefined}
      >
        {children}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
