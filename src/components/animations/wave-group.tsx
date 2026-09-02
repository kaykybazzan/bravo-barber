"use client";

import { motion } from "motion/react";
import React from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const WaveGroup = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <motion.div
    className={className}
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
  >
    {children}
  </motion.div>
);

export const WaveItem = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <motion.div variants={itemVariants} className={className}>
    {children}
  </motion.div>
);
