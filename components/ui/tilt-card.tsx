"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface TiltCardProps {
  children: ReactNode
  className?: string
}

export default function TiltCard({ children, className = "" }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Dynamic import for Vanilla Tilt to optimize bundle
    import("vanilla-tilt").then((VanillaTilt) => {
      if (cardRef.current) {
        VanillaTilt.default.init(cardRef.current, {
          max: 15,
          speed: 400,
          glare: true,
          "max-glare": 0.3,
          scale: 1.05,
          perspective: 1000,
        })
      }
    })

    return () => {
      if (cardRef.current && (cardRef.current as any).vanillaTilt) {
        ;(cardRef.current as any).vanillaTilt.destroy()
      }
    }
  }, [])

  return (
    <div ref={cardRef} className={`tilt-card ${className}`}>
      {children}
    </div>
  )
}
