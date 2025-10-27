"use client"

import { useEffect, useRef } from "react"
import { Lightbulb, Search, Palette, Rocket, BarChart } from "lucide-react"
import AnimatedSection from "@/components/ui/animated-section"

export default function Process() {
  const processRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger)

        const ctx = gsap.context(() => {
          // Animate progress line
          gsap.to(".progress-line", {
            scrollTrigger: {
              trigger: ".process-timeline",
              start: "top 60%",
              end: "bottom 40%",
              scrub: 1,
            },
            scaleY: 1,
            transformOrigin: "top",
            ease: "none",
          })

          // Animate each phase
          gsap.utils.toArray(".process-phase").forEach((phase: any, index) => {
            gsap.from(phase, {
              scrollTrigger: {
                trigger: phase,
                start: "top 80%",
              },
              opacity: 0,
              x: index % 2 === 0 ? -50 : 50,
              duration: 0.8,
              ease: "power3.out",
            })
          })
        }, processRef)

        return () => ctx.revert()
      })
    })
  }, [])

  const phases = [
    {
      icon: Lightbulb,
      title: "Descubrimiento",
      description: "Analizamos tu marca, objetivos y audiencia para crear una estrategia personalizada.",
    },
    {
      icon: Search,
      title: "Investigación",
      description: "Estudiamos el mercado, competencia y tendencias para identificar oportunidades únicas.",
    },
    {
      icon: Palette,
      title: "Creación",
      description: "Desarrollamos conceptos creativos y contenido que resuena con tu audiencia.",
    },
    {
      icon: Rocket,
      title: "Lanzamiento",
      description: "Ejecutamos campañas coordinadas en todos los canales para máximo impacto.",
    },
    {
      icon: BarChart,
      title: "Optimización",
      description: "Medimos resultados y optimizamos continuamente para superar objetivos.",
    },
  ]

  return (
    <section id="process" ref={processRef} className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-balance">
              Nuestro <span className="bg-gradient-to-r from-cyan-500 via-sky-600 to-indigo-600 bg-clip-text text-transparent">
                proceso
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Un enfoque estructurado que garantiza resultados excepcionales
            </p>
          </div>

          <div className="process-timeline relative max-w-4xl mx-auto">
            {/* Progress line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border">
              <div className="progress-line absolute inset-0 bg-gradient-to-b from-primary via-secondary to-accent scale-y-0" />
            </div>

            <div className="space-y-16">
              {phases.map((phase, index) => (
                <div
                  key={index}
                  className={`process-phase relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Icon */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-card border-4 border-background flex items-center justify-center z-10 backdrop-blur-lg bg-white/80 dark:bg-slate-800/80">
                    <phase.icon className="text-primary" size={28} />
                  </div>

                  {/* Content - Glass effect igual al navbar */}
                  <div className={`ml-24 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                    <div className="
                      p-6 rounded-2xl space-y-3 
                      border border-white/20 dark:border-slate-800/50
                      backdrop-blur-lg bg-white/60 dark:bg-slate-900/60
                      shadow-md hover:shadow-xl
                      hover:scale-105 transition-all duration-300
                    ">
                      <h3 className="text-2xl font-bold text-foreground">{phase.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
