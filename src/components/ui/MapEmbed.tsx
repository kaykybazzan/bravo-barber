"use client";

interface MapEmbedProps {
  className?: string
}

export default function MapEmbed({ className = '' }: MapEmbedProps) {
  return (
    <div className={`relative w-full h-[350px] md:h-[480px] rounded-2xl overflow-hidden border border-white/10 ${className}`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.123456789!2d-49.2718!3d-26.8233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjYsNDknNDMuOSJTIDQ5wrAxNicxOC41Ilc!5e0!3m2!1wpt-BR!2sbr!4v1700000000000!5m2!1wpt-BR!2sbr&maptype=satellite"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full border-0 absolute inset-0"
      />
    </div>
  )
}
