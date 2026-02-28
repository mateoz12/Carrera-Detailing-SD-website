"use client"

import { useState, useRef, useCallback } from "react"
import { motion } from "framer-motion"

interface BeforeAfterSliderProps {
  image: string
  alt: string
  label: string
}

function BeforeAfterSlider({ image, alt, label }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setPosition(percent)
  }, [])

  const handleMouseDown = () => {
    isDragging.current = true
  }

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging.current) return
      updatePosition(e.clientX)
    },
    [updatePosition]
  )

  const handleMouseUp = () => {
    isDragging.current = false
  }

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      updatePosition(e.touches[0].clientX)
    },
    [updatePosition]
  )

  return (
    <div className="space-y-4">
      <div
        ref={containerRef}
        className="relative aspect-[4/3] cursor-ew-resize select-none overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        role="slider"
        aria-label={`Before and after comparison: ${label}`}
        aria-valuenow={Math.round(position)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
      >
        {/* After (full image) */}
        <img
          src={image}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
          crossOrigin="anonymous"
        />

        {/* Before (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img
            src={image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover brightness-50 contrast-75 saturate-50"
            crossOrigin="anonymous"
          />
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 z-10 w-px bg-foreground"
          style={{ left: `${position}%` }}
        >
          <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-foreground bg-background/80 backdrop-blur-sm">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="text-foreground"
            >
              <path d="M4 8H12M4 8L6 6M4 8L6 10M12 8L10 6M12 8L10 10" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <span className="absolute top-4 left-4 z-10 bg-background/70 px-3 py-1 text-xs tracking-[0.2em] uppercase text-foreground backdrop-blur-sm">
          Before
        </span>
        <span className="absolute top-4 right-4 z-10 bg-background/70 px-3 py-1 text-xs tracking-[0.2em] uppercase text-foreground backdrop-blur-sm">
          After
        </span>
      </div>
      <p className="text-center text-xs font-light tracking-[0.2em] uppercase text-muted-foreground">
        {label}
      </p>
    </div>
  )
}

const slides = [
  {
    image: "/images/before-after-1.jpg",
    alt: "Before and after seat restoration",
    label: "Seat Restoration",
  },
  {
    image: "/images/before-after-2.jpg",
    alt: "Before and after carpet extraction",
    label: "Carpet Extraction",
  },
  {
    image: "/images/before-after-3.jpg",
    alt: "Before and after dashboard detailing",
    label: "Dashboard Detail",
  },
]

export function BeforeAfter() {
  return (
    <section id="results" className="bg-secondary py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 text-center"
        >
          <p className="mb-4 text-xs font-light tracking-[0.4em] uppercase text-accent">
            Our Work
          </p>
          <h2 className="font-serif text-4xl font-light tracking-tight text-foreground text-balance md:text-5xl">
            Results Speak for Themselves
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {slides.map((slide, i) => (
            <motion.div
              key={slide.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.3,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <BeforeAfterSlider
                image={slide.image}
                alt={slide.alt}
                label={slide.label}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
