"use client";

import { cn } from "@/utils/cn";

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  shimmerColor?: string;
  shimmerSize?: string;
  shimmerDuration?: string;
  background?: string;
}

export function ShimmerButton({
  children,
  className,
  shimmerColor = "#ffffff",
  shimmerSize = "110%",
  shimmerDuration = "3s",
  background = "rgba(0,0,0,1)",
  ...props
}: ShimmerButtonProps) {
  return (
    <button
      className={cn(
        "relative overflow-hidden rounded-md px-6 py-2 font-medium text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]",
        className
      )}
      style={{
        background,
      }}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div
        className="absolute inset-0 -translate-x-full animate-shimmer"
        style={{
          background: `linear-gradient(90deg, transparent, ${shimmerColor}, transparent)`,
          backgroundSize: shimmerSize,
          animation: `shimmer ${shimmerDuration} infinite`,
        }}
      />
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </button>
  );
}
