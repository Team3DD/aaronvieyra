"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from "lucide-react"
import AnimatedSection from "@/components/ui/animated-section"

export default function Contact() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setLoading(false)
    alert("¡Gracias por tu mensaje! Te contactaremos pronto.")
  }

  const gradient = "bg-gradient-to-r from-cyan-500 via-sky-600 to-indigo-600"

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const contactInfoItems = [
    {
      icon: Mail,
      title: "Email",
      value: "hola@tikipr.com",
      link: "mailto:hola@tikipr.com",
    },
    {
      icon: Phone,
      title: "Teléfono",
      value: "+52 55 1234 5678",
      link: "tel:+525512345678",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      value: "Ciudad de México, México",
      link: null,
    },
  ]

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ]

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Fondo decorativo sutil */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <AnimatedSection>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-balance">
              Hablemos de tu{" "}
              <span className="bg-gradient-to-r from-cyan-500 via-sky-600 to-indigo-600 bg-clip-text text-transparent">
                proyecto
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Estamos listos para llevar tu marca al siguiente nivel
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Contact Cards */}
              <motion.div variants={itemVariants} className="space-y-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-500 via-sky-600 to-indigo-600 bg-clip-text text-transparent">
                  Información de contacto
                </h3>
                
                <div className="space-y-4">
                  {contactInfoItems.map((item, index) => {
                    const Component = item.link ? 'a' : 'div'
                    return (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Component
                          {...(item.link ? { href: item.link } : {})}
                          className="flex items-center gap-4 group cursor-pointer p-5 rounded-2xl border border-border backdrop-blur-lg bg-card/50 hover:bg-card/80 transition-all duration-300"
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ type: "spring", stiffness: 400, duration: 0.6 }}
                            className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 via-sky-600 to-indigo-600 flex items-center justify-center shadow-md"
                          >
                            <item.icon className="text-white" size={20} />
                          </motion.div>
                          <div>
                            <p className="font-bold text-foreground text-sm">{item.title}</p>
                            <p className="text-muted-foreground text-sm">{item.value}</p>
                          </div>
                        </Component>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-500 via-sky-600 to-indigo-600 bg-clip-text text-transparent">
                  Síguenos
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 via-sky-600 to-indigo-600 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <social.icon className="text-white" size={20} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-3xl border border-white/20 dark:border-slate-800/50 backdrop-blur-lg bg-white/60 dark:bg-slate-900/60 shadow-lg"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-foreground">
                    Nombre completo
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    placeholder="Tu nombre"
                    className="w-full"
                  />
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="tu@email.com"
                    className="w-full"
                  />
                </motion.div>

                {/* Company */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <label htmlFor="company" className="block text-sm font-semibold mb-2 text-foreground">
                    Empresa
                  </label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Tu empresa (opcional)"
                    className="w-full"
                  />
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-foreground">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    required
                    placeholder="Cuéntanos sobre tu proyecto..."
                    rows={5}
                    className="w-full resize-none"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  className="pt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`
                      w-full rounded-xl font-bold text-white uppercase tracking-wide
                      ${gradient} shadow-md hover:shadow-xl
                      transition-all duration-300
                      relative overflow-hidden group
                      disabled:opacity-70 disabled:cursor-not-allowed
                      py-4 text-sm
                    `}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {loading ? (
                        <>
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Enviando...
                        </>
                      ) : (
                        "Enviar Mensaje"
                      )}
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-sky-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
