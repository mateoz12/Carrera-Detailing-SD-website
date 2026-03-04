"use client"

import { useState, useRef, useCallback } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
}: {
  beforeSrc: string
  afterSrc: string
  beforeAlt: string
  afterAlt: string
}) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
      const percent = (x / rect.width) * 100
      setSliderPosition(percent)
    },
    []
  )

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return
      handleMove(e.clientX)
    },
    [isDragging, handleMove]
  )

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      handleMove(e.touches[0].clientX)
    },
    [handleMove]
  )

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] w-full cursor-col-resize select-none overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      role="slider"
      aria-label="Before and after comparison slider"
      aria-valuenow={Math.round(sliderPosition)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setSliderPosition((p) => Math.max(0, p - 2))
        if (e.key === "ArrowRight") setSliderPosition((p) => Math.min(100, p + 2))
      }}
    >
      {/* After Image (full) */}
      <Image
        src={afterSrc}
        alt={afterAlt}
        fill
        className="object-cover"
      />

      {/* Before Image (clipped) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          className="object-cover"
        />
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 z-10 w-0.5 bg-foreground"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-foreground bg-background/80 backdrop-blur-sm">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-foreground">
            <path d="M5 3L1 8L5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11 3L15 8L11 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="pointer-events-none absolute top-4 left-4 z-20 bg-background/80 px-3 py-1 text-xs font-light uppercase tracking-widest text-foreground backdrop-blur-sm">
        Before
      </div>
      <div className="pointer-events-none absolute top-4 right-4 z-20 bg-background/80 px-3 py-1 text-xs font-light uppercase tracking-widest text-foreground backdrop-blur-sm">
        After
      </div>
    </div>
  )
}

export function BeforeAfter() {
  return (
    <section id="results" className="bg-secondary/30 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-gold">
            Our Work
          </p>
          <h2 className="font-serif text-[1.7rem] font-light text-foreground uppercase tracking-widest md:text-[2rem] lg:text-[2.7rem]">
            <span className="text-balance">Results Speak for Themselves</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3 }}
          >
            <BeforeAfterSlider
              beforeSrc="/images/before-interior.jpg"
              afterSrc="/images/after-interior.jpg"
              beforeAlt="Car interior before detailing"
              afterAlt="Car interior after detailing"
            />
            <p className="mt-3 text-center text-xs font-light uppercase tracking-[0.2em] text-muted-foreground">
              Full Interior
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, delay: 0.15 }}
          >
            <BeforeAfterSlider
              beforeSrc="/images/before-seats.jpg"
              afterSrc="/images/after-seats.jpg"
              beforeAlt="Leather seats before detailing"
              afterAlt="Leather seats after detailing"
            />
            <p className="mt-3 text-center text-xs font-light uppercase tracking-[0.2em] text-muted-foreground">
              Leather Restoration
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, delay: 0.3 }}
          >
            <BeforeAfterSlider
              beforeSrc="/images/before-dashboard.jpg"
              afterSrc="/images/after-dashboard.jpg"
              beforeAlt="Dashboard before detailing"
              afterAlt="Dashboard after detailing"
            />
            <p className="mt-3 text-center text-xs font-light uppercase tracking-[0.2em] text-muted-foreground">
              Dashboard & Console
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
