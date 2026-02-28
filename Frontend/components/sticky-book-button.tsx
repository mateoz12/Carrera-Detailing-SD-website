"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function StickyBookButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#book"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 border border-foreground bg-foreground px-6 py-3 text-xs font-medium tracking-[0.2em] uppercase text-primary-foreground shadow-2xl transition-all duration-300 hover:bg-transparent hover:text-foreground md:hidden"
        >
          Book Now
        </motion.a>
      )}
    </AnimatePresence>
  )
}
