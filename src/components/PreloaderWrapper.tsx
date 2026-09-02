'use client'

import { useState, createContext, useContext } from 'react'
import { AnimatePresence } from 'motion/react'
import Preloader from './Preloader'

const LoadingContext = createContext<{ isLoaded: boolean }>({ isLoaded: false })

export function useLoading() {
  return useContext(LoadingContext)
}

export default function PreloaderWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <LoadingContext.Provider value={{ isLoaded: !isLoading }}>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      {children}
    </LoadingContext.Provider>
  )
}
