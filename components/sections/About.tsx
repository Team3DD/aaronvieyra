"use client"

import { useEffect, useRef } from "react"
import { CheckCircle2 } from "lucide-react"
import AnimatedSection from "@/components/ui/animated-section"

export default function About() {
  const statsRef = useRef<HTMLDivElement>(null)
  const stat1Ref = useRef<HTMLDivElement>(null)
  const stat2Ref = useRef<HTMLDivElement>(null)
  const stat3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger)

        const ctx = gsap.context(() => {
          // Animate values list
          gsap.from(".value-item", {
            scrollTrigger: {
              trigger: ".values-list",
              start: "top 80%",
            },
            opacity: 0,
            x: -50,
            duration: 0.6,
            stagger: 0.2,
            ease: "power3.out",
          })

          // Counter animation for stat 1: +1000
          gsap.to(stat1Ref.current, {
            scrollTrigger: {
              trigger: stat1Ref.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            innerText: 1000,
            duration: 2,
            snap: { innerText: 1 },
            ease: "power1.inOut",
            onUpdate: function() {
              if (stat1Ref.current) {
                const value = Math.ceil(Number(stat1Ref.current.innerText))
                stat1Ref.current.innerText = `+${value}`
              }
            }
          })

          // Counter animation for stat 2: 4.5
          gsap.to(stat2Ref.current, {
            scrollTrigger: {
              trigger: stat2Ref.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            innerText: 4.5,
            duration: 2,
            snap: { innerText: 0.1 },
            ease: "power1.inOut",
            onUpdate: function() {
              if (stat2Ref.current) {
                const value = Number(stat2Ref.current.innerText).toFixed(1)
                stat2Ref.current.innerText = value
              }
            }
          })

          // Counter animation for stat 3: 100
          gsap.to(stat3Ref.current, {
            scrollTrigger: {
              trigger: stat3Ref.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            innerText: 100,
            duration: 2,
            snap: { innerText: 1 },
            ease: "power1.inOut",
            onUpdate: function() {
              if (stat3Ref.current) {
                const value = Math.ceil(Number(stat3Ref.current.innerText))
                stat3Ref.current.innerText = `${value}%`
              }
            }
          })
        }, statsRef)

        return () => ctx.revert()
      })
    })
  }, [])

  const values = [
    "Estrategias de comunicación personalizadas",
    "Producción creativa de alto impacto",
    "Relaciones públicas efectivas",
    "Marketing digital innovador",
    "Gestión de influencers y embajadores",
  ]

  return (
    <section id="about" ref={statsRef} className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold text-balance">
                Transformamos ideas en <span className="bg-gradient-to-r from-cyan-500 via-sky-600 to-indigo-600 bg-clip-text text-transparent">
                experiencias memorables</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                En TIKI PR, somos expertos en crear narrativas que conectan marcas con audiencias. Nuestra misión es
                posicionar tu marca de manera orgánica y auténtica.
              </p>

              <div className="values-list space-y-4 pt-4">
                {values.map((value, index) => (
                  <div key={index} className="value-item flex items-start gap-3">
                    <CheckCircle2 className="text-secondary mt-1 flex-shrink-0" size={24} />
                    <p className="text-lg">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="
                p-12 rounded-3xl space-y-8
                border border-white/20 dark:border-slate-800/50
                backdrop-blur-lg bg-white/60 dark:bg-slate-900/60
                shadow-lg
              ">
                <div className="text-center space-y-2">
                  <div ref={stat1Ref} className="text-6xl md:text-7xl font-bold text-primary">
                    +0
                  </div>
                  <p className="text-xl text-muted-foreground">Publicaciones exitosas</p>
                </div>
                <div className="text-center space-y-2">
                  <div ref={stat2Ref} className="text-5xl md:text-6xl font-bold text-secondary">
                    0
                  </div>
                  <p className="text-xl text-muted-foreground">Años de experiencia comprobada</p>
                </div>
                <div className="text-center space-y-2">
                  <div ref={stat3Ref} className="text-5xl md:text-6xl font-bold text-accent">
                    0%
                  </div>
                  <p className="text-xl text-muted-foreground">Compromiso con resultados</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
