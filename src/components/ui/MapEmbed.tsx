"use client";

import { useSyncExternalStore } from "react";
import { mapsDirectionsHref } from "@/integrations/maps";
import { clientConfig } from "@/config/client.config";
import {
  cookieConsentServerSnapshot,
  readCookieConsent,
  subscribeCookieConsent,
} from "@/analytics/consent";
import { uiContent } from "@/data/ui";
import { formatFullAddress } from "@/utils/format";
import { cn } from "@/utils/cn";
import { Map } from "./Map";

/** Modern dark-themed map with custom markers. With cookie consent enabled,
 * third-party map content stays blocked until opt-in; essential-only visitors
 * still get an external link. */
export function MapEmbed({ className, ratio = "aspect-[16/10]" }: { className?: string; ratio?: string }) {
  const consent = useSyncExternalStore(
    subscribeCookieConsent,
    readCookieConsent,
    cookieConsentServerSnapshot,
  );

  if (!clientConfig.features.maps) return null;

  const requiresConsent = clientConfig.features.cookieBanner;
  const canEmbed = !requiresConsent || consent === "accepted";

  if (!canEmbed) {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#1a1a1a] p-6 text-center shadow-2xl",
          ratio,
          className,
        )}
      >
        <p className="font-heading text-h4 font-semibold text-white">{uiContent.map.blockedTitle}</p>
        <p className="mt-2 max-w-md text-sm text-gray-400">{uiContent.map.blockedText}</p>
        <p className="mt-3 text-sm text-gray-400">{formatFullAddress(clientConfig.address)}</p>
        <a
          href={mapsDirectionsHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex min-h-[var(--nx-tap-min)] items-center rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-[#B8874D] hover:bg-white/10 transition-colors"
        >
          {uiContent.map.externalCta}
        </a>
      </div>
    );
  }

  return <Map className={className} ratio={ratio} />;
}
