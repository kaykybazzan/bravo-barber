'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const phrases = [
  'Mais do que só um corte',
  'é o seu estilo',
  'do seu jeito',
]

const wordVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.015,
      staggerDirection: 1,
    },
  },
}

const letterVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    rotateX: -45,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.4,
      ease: [0.215, 0.61, 0.355, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    y: -18,
    filter: 'blur(6px)',
    transition: {
      duration: 0.3,
      ease: [0.55, 0.055, 0.675, 0.19] as const,
    },
  },
}

export default function Preloader({
  onComplete,
}: {
  onComplete?: () => void
}) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  useEffect(() => {
    const isLastPhrase = index === phrases.length - 1

    const timer = setTimeout(
      () => {
        if (isLastPhrase) {
          document.body.style.overflow = 'unset'
          onComplete?.()
        } else {
          setIndex((prev) => prev + 1)
        }
      },
      isLastPhrase ? 1500 : 1200
    )

    return () => clearTimeout(timer)
  }, [index, onComplete])

  // Subida reta e limpa sem SVG curvo
  const slideUp = {
    initial: { y: 0 },
    exit: {
      y: '-100%',
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1] as const,
      },
    },
  }

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0D0D0D] text-[#F4F0EA]"
    >
      <div className="relative z-10 flex h-[180px] w-full items-center justify-center px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            variants={wordVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`flex flex-wrap justify-center origin-center font-serif text-2xl font-light tracking-wide sm:text-4xl md:text-5xl ${
              index === 2 ? 'text-[#C5A059]' : 'text-[#F4F0EA]'
            }`}
            style={{ perspective: 1000 }}
          >
            {phrases[index].split('').map((char, charIdx) => (
              <motion.span
                key={`${char}-${charIdx}`}
                variants={letterVariants}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
