"use client";

import { useEffect, useRef, useState } from "react";
import { clientConfig } from "@/config/client.config";
import { cn } from "@/utils/cn";

export function Map({ className, ratio = "aspect-[16/10] md:aspect-[16/9]" }: { className?: string; ratio?: string }) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !mapRef.current || !clientConfig.address.geo) return;

    // Initialize map only once
    if (mapInstanceRef.current) return;

    const { latitude, longitude } = clientConfig.address.geo;

    // Dynamically import Leaflet only on client side
    import("leaflet").then((L) => {
      // Create map instance
      const map = L.map(mapRef.current!, {
        center: [latitude, longitude],
        zoom: 17,
        zoomControl: false,
        attributionControl: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        boxZoom: false,
        keyboard: false,
      });

      // Add satellite imagery tile layer (Esri World Imagery)
      L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
        attribution: '&copy; <a href="https://www.esri.com/">Esri</a>',
        maxZoom: 19,
      }).addTo(map);

      // Create custom marker
      const customIcon = L.divIcon({
        className: "custom-map-marker",
        html: `
          <div class="marker-container">
            <div class="marker-pulse"></div>
            <div class="marker-inner">
              <div class="marker-dot"></div>
            </div>
          </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
      });

      // Add marker to map
      L.marker([latitude, longitude], { icon: customIcon }).addTo(map);

      mapInstanceRef.current = map;
    });

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [isMounted]);

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a1a] shadow-2xl min-h-[320px] md:min-h-[420px]",
        ratio,
        className,
      )}
    >
      <div ref={mapRef} className="size-full" />
    </div>
  );
}
