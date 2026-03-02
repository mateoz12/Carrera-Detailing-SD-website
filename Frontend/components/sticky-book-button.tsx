"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function StickyBookButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
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
          className="fixed right-6 bottom-6 z-50 bg-primary px-6 py-3 text-xs font-medium uppercase tracking-widest text-primary-foreground shadow-lg transition-opacity hover:opacity-90 md:hidden"
          aria-label="Book now"
        >
          Book Now
        </motion.a>
      )}
    </AnimatePresence>
  )
}
