"use client"

import { useTheme } from "@/components/theme-provider"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Moon, Sun, Menu, X } from "lucide-react"

const MENU_ITEMS = [
  { name: "Inicio", href: "#inicio" },
  { name: "Servicios", href: "#servicios" },
  { name: "Portafolio", href: "#portafolio" },
  { name: "Contacto", href: "#contacto" },
]

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl rounded-full border border-white/20 dark:border-slate-800/50 backdrop-blur-lg bg-white/60 dark:bg-slate-900/60 shadow-md">
        <div className="flex items-center justify-between px-6 py-3">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/logo.svg" 
              alt="Logo" 
              width={74} 
              height={74} 
              className="object-contain select-none" 
              priority 
            />
          </Link>
          <div className="h-6 w-24 bg-muted/20 rounded animate-pulse" />
        </div>
      </header>
    )
  }

  const isDark = theme === "dark"
  const textColor = isDark ? "text-gray-100" : "text-gray-800"
  const gradient = "bg-gradient-to-r from-cyan-500 via-sky-600 to-indigo-600"

  const letterVariants = {
    initial: { y: 0, opacity: 1, x: 0 },
    hover: (i: number) => ({
      y: -4,
      x: i * 1.5,
      opacity: 0.95,
      transition: { duration: 0.25, delay: i * 0.02, ease: "easeOut" },
    }),
    exit: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: { duration: 0.25, ease: "easeInOut" },
    },
  }

  return (
    <header
      className="
        fixed top-4 left-1/2 -translate-x-1/2 z-50
        w-[90%] max-w-5xl
        rounded-full border border-white/20 dark:border-slate-800/50
        backdrop-blur-lg bg-white/60 dark:bg-slate-900/60
        shadow-md transition-all duration-500
      "
    >
      <div className="flex items-center justify-between px-6 py-3">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/logo.svg" 
            alt="Logo" 
            width={74} 
            height={74} 
            className="object-contain select-none dark:invert transition-all duration-300" 
            priority 
          />
        </Link>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex items-center gap-8">
          {MENU_ITEMS.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className={`relative text-sm font-semibold tracking-wide ${textColor}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.span className="flex" initial="initial" animate={hoveredIndex === index ? "hover" : "exit"}>
                {item.name.split("").map((char, i) => (
                  <motion.span key={i} custom={i} variants={letterVariants}>
                    <span
                      className={`inline-block transition-colors duration-300 ${
                        hoveredIndex === index ? `${gradient} bg-clip-text text-transparent` : ""
                      }`}
                    >
                      {char}
                    </span>
                  </motion.span>
                ))}
              </motion.span>
              <motion.div
                layoutId={`underline-${index}`}
                className={`absolute left-0 bottom-0 h-[2px] w-full rounded-full ${gradient} origin-left ${
                  hoveredIndex === index ? "scale-x-100" : "scale-x-0"
                } transition-transform duration-500 ease-out`}
              />
            </motion.a>
          ))}
        </nav>

        {/* ACCIONES */}
        <div className="flex items-center gap-4">
          {/* TOGGLE TEMA */}
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Cambiar tema"
            className="transition-transform duration-300 hover:scale-110"
          >
            {isDark ? <Sun className={`w-4 h-4 ${textColor}`} /> : <Moon className={`w-4 h-4 ${textColor}`} />}
          </button>

          {/* BOTÓN PRINCIPAL */}
          <Link
            href="#comenzar"
            className={`
              hidden sm:inline-block
              rounded-full px-5 py-1.5 text-sm font-semibold text-white
              ${gradient} shadow-sm hover:shadow-md
              transition-all duration-300 hover:scale-105
            `}
          >
            Comenzar
          </Link>

          {/* BOTÓN HAMBURGUESA (MÓVIL) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menú"
            className="md:hidden transition-transform duration-300 hover:scale-110"
          >
            {isOpen ? <X className={`w-5 h-5 ${textColor}`} /> : <Menu className={`w-5 h-5 ${textColor}`} />}
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="
              absolute top-[65px] left-0 w-full rounded-3xl border border-white/20 dark:border-slate-800/40
              bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg
              shadow-md md:hidden
            "
          >
            <ul className="flex flex-col items-center py-6 space-y-6">
              {MENU_ITEMS.map((item, index) => (
                <motion.li key={index} whileHover={{ scale: 1.05 }} onClick={() => setIsOpen(false)}>
                  <Link
                    href={item.href}
                    className={`text-base font-semibold ${textColor} hover:${gradient} transition-all`}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
              <li>
                <Link
                  href="#comenzar"
                  onClick={() => setIsOpen(false)}
                  className={`
                    rounded-full px-6 py-2 text-sm font-semibold text-white
                    ${gradient} shadow-sm hover:shadow-md
                    transition-all duration-300
                  `}
                >
                  Comenzar
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
