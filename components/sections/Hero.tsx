"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useTheme } from "@/components/theme-provider"
import { useEffect, useState } from "react"

export default function Hero() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <section
        className="relative flex items-center justify-center overflow-hidden pt-20 pb-12 md:pt-24 md:pb-16 lg:pb-20"
        style={{ minHeight: "clamp(500px, 60vh, 700px)" }}
      >
        <div className="container mx-auto px-6 sm:px-8 z-10">
          <div className="max-w-5xl mx-auto text-center space-y-5 md:space-y-6">
            <div className="h-20 bg-muted/20 rounded-lg animate-pulse" />
            <div className="h-12 bg-muted/10 rounded-lg animate-pulse" />
            <div className="h-12 w-48 mx-auto bg-muted/20 rounded-full animate-pulse" />
          </div>
        </div>
      </section>
    )
  }

  const gradient = "bg-gradient-to-r from-cyan-500 via-sky-600 to-indigo-600"
  const isDark = theme === "dark"

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden pt-20 pb-12 md:pt-24 md:pb-16 lg:pb-20"
      style={{
        minHeight: "clamp(500px, 60vh, 700px)",
        backgroundColor: isDark ? "oklch(0.12 0.03 270)" : "oklch(0.98 0.01 270)",
      }}
    >
      {/* Gradiente animado de fondo */}
      <div
        className="absolute inset-0 opacity-40 dark:opacity-30"
        style={{
          backgroundImage: isDark
            ? "linear-gradient(135deg, oklch(0.65 0.2 240 / 0.2), oklch(0.6 0.18 260 / 0.2), oklch(0.58 0.22 270 / 0.2))"
            : "linear-gradient(135deg, oklch(0.55 0.18 240 / 0.2), oklch(0.5 0.15 260 / 0.2), oklch(0.48 0.2 270 / 0.2))",
          backgroundSize: "200% 200%",
          animation: "gradient-shift 15s ease infinite",
        }}
      />

      <div className="container mx-auto px-6 sm:px-8 z-10">
        <div className="max-w-5xl mx-auto text-center space-y-5 md:space-y-6">
          {/* Título principal con efecto shine */}
          <motion.h1
            className="font-bold leading-tight tracking-tight"
            style={{
              fontSize: "clamp(2.25rem, 7vw, 5rem)",
              color: isDark ? "oklch(0.95 0.01 270)" : "oklch(0.15 0.03 270)",
              backgroundImage: isDark
                ? "radial-gradient(circle at center, oklch(0.95 0.01 270 / 0.85), transparent), linear-gradient(to right, oklch(0.65 0.2 240), oklch(0.6 0.18 260), oklch(0.58 0.22 270))"
                : "radial-gradient(circle at center, oklch(0.15 0.03 270 / 0.85), transparent), linear-gradient(to right, oklch(0.55 0.18 240), oklch(0.5 0.15 260), oklch(0.48 0.2 270))",
              backgroundSize: "200% 100%, 200% 100%",
              backgroundPosition: "-200% 50%, 0% 50%",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "shine 6s linear infinite",
            } as React.CSSProperties}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Transformamos Ideas en Realidad Digital
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            className="font-medium leading-relaxed px-4"
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
              color: isDark ? "oklch(0.65 0.02 270)" : "oklch(0.45 0.03 270)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Agencia de Producción Creativa, Relaciones Públicas & Marketing
          </motion.p>

          {/* Botón CTA */}
          <motion.div
            className="flex justify-center pt-3 md:pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="#contact"
              className={`
                rounded-full font-bold text-white uppercase tracking-wide
                ${gradient} shadow-lg hover:shadow-xl
                transition-all duration-300 hover:scale-105 active:scale-95
                relative overflow-hidden group
              `}
              style={{
                padding: "clamp(0.65rem, 1.8vw, 0.9rem) clamp(1.5rem, 3.5vw, 2.25rem)",
                fontSize: "clamp(0.8rem, 1.4vw, 0.95rem)",
              }}
            >
              <span className="relative z-10">Comenzar Proyecto</span>
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-sky-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Keyframes para animaciones */}
      <style jsx>{`
        @keyframes shine {
          0% {
            background-position: -200% 50%, 200% 50%;
          }
          100% {
            background-position: -200% 50%, -200% 50%;
          }
        }
        
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  )
}
