"use client";

import { Icon } from "./Icon";
import { whatsappHref } from "@/integrations/whatsapp";
import { CONVERSION_EVENTS, trackEvent } from "@/analytics/track";
import { useScrolledPast } from "@/hooks/useScrollPosition";
import { cn } from "@/utils/cn";

/** Appears after the hero so it never covers the first screen on mobile. */
export function WhatsAppFloating() {
  const visible = useScrolledPast(420);

  return (
    <a
      href={whatsappHref({ kind: "general" })}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      onClick={() => trackEvent(CONVERSION_EVENTS.whatsappClick, { source: "floating" })}
      className={cn(
        "fixed bottom-5 right-5 z-[var(--nx-z-floating)] grid size-14 place-items-center rounded-full",
        "bg-[var(--nx-whatsapp)] text-white shadow-lift transition-[opacity,transform] duration-[var(--nx-duration)] ease-brand-out",
        "hover:scale-105 focus-visible:scale-105",
        visible ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0",
      )}
    >
      <Icon name="whatsapp" size={28} />
    </a>
  );
}
