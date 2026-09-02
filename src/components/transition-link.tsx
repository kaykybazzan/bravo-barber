"use client";

import { useTransitionRouter } from "next-view-transitions";
import { ReactNode } from "react";

function pageAnimation() {
  document.documentElement.animate(
    [{ opacity: 1 }, { opacity: 0 }],
    {
      duration: 400,
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );
  document.documentElement.animate(
    [{ opacity: 0 }, { opacity: 1 }],
    {
      duration: 500,
      delay: 200,
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
}

export function TransitionLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const router = useTransitionRouter();

  return (
    <a
      href={href}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        router.push(href, { onTransitionReady: pageAnimation });
      }}
    >
      {children}
    </a>
  );
}
