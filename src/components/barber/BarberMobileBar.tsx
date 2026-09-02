"use client";

import { useEffect, useState } from "react";
import { whatsappHref } from "@/integrations/whatsapp";

export function BarberMobileBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector(".bb-hero");
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsVisible(heroBottom < 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto flex items-center gap-2 w-full max-w-xs bg-neutral-900/90 backdrop-blur-md border border-neutral-800 p-1.5 rounded-2xl shadow-2xl">
        <a href="/servicos" className="flex-1 py-2.5 text-center text-xs font-bold tracking-wider uppercase text-neutral-300 hover:text-white transition-colors">
          Serviços
        </a>
        <a className="flex-1 py-2.5 text-center text-xs font-bold tracking-wider uppercase bg-neutral-100 text-neutral-900 rounded-xl hover:bg-white transition-colors" href={whatsappHref({ kind: "schedule" })} target="_blank" rel="noopener noreferrer">
          Agendar ↗
        </a>
      </div>
    </div>
  );
}
