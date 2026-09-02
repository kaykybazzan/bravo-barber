"use client";

import { motion } from "motion/react";

const ITEMS = [
  "CORTE SIGNATURE",
  "FADE PRECISION",
  "BARBA RITUAL",
  "TESOURA & TEXTURA",
  "CLUB COMBO",
  "ACABAMENTO EXPRESS",
  "BRAVO BARBER CLUB",
];

export function HighlightsMarquee() {
  const track = [...ITEMS, ...ITEMS]; // duplicado para o loop fechar sem salto

  return (
    <div className="marquee-wrap">
      <motion.div
        className="marquee-track"
        animate={{ x: ["-50%", "0%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {track.map((word, i) => (
          <span className="marquee-item" key={i}>
            {word}
            <span className="marquee-dot">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
