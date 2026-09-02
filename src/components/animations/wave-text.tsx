"use client";

import { motion } from "motion/react";
import React from "react";

interface WaveTextProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
  dynamic?: boolean;
  subtle?: boolean;
}

export function WaveText({ text, className, delay = 0, once = true, dynamic = false, subtle = false }: WaveTextProps) {
  const wordVariant = dynamic
    ? {
        hidden: { opacity: 0, y: 50, scale: 0.9, rotate: -5 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          rotate: 0,
          transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
        },
      }
    : subtle
    ? {
        hidden: { opacity: 0, y: 15 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const },
        },
      }
    : {
        hidden: { opacity: 0, y: 25, rotate: -2 },
        show: {
          opacity: 1,
          y: 0,
          rotate: 0,
          transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
        },
      };

  const words = text.split(" ");

  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="show"
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { delay } }
      }}
    >
      {words.map((word, i) => (
        <React.Fragment key={i}>
          <motion.span
            variants={wordVariant}
            style={{ display: "inline-block", willChange: "transform, opacity" }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && <span style={{ display: "inline-block", width: "0.5em" }} />}
        </React.Fragment>
      ))}
    </motion.span>
  );
}
