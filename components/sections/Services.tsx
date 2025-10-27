"use client"
import { useState } from "react"
import AnimatedSection from "@/components/ui/animated-section"
import { ChevronUp, ChevronDown } from "lucide-react"

export default function Services() {
  const [activeServiceIndex, setActiveServiceIndex] = useState<number | null>(null)
  const [activePillarIndex, setActivePillarIndex] = useState<number | null>(null)

  const coreServices = [
    {
      title: "PR Campaigns",
      description:
        "Estrategias de relaciones públicas que posicionan tu marca en los medios más relevantes y generan conversación auténtica.",
    },
    {
      title: "Creative Production",
      description:
        "Producción audiovisual de alto impacto: desde conceptualización hasta entrega final. Contenido que cautiva y convierte.",
    },
    {
      title: "Marketing Solutions",
      description:
        "Estrategias de marketing digital integradas que impulsan el crecimiento de tu marca en todos los canales.",
    },
  ]

  const pillars = [
    {
      title: "Influencer Marketing",
      description: "Conexiones auténticas con creadores de contenido que amplifican tu mensaje de marca.",
    },
    {
      title: "Brand Strategy",
      description: "Posicionamiento estratégico que diferencia tu marca en el mercado.",
    },
    {
      title: "Content Creation",
      description: "Contenido creativo que genera engagement y construye comunidad.",
    },
    {
      title: "Media Relations",
      description: "Relaciones sólidas con medios clave para máxima visibilidad.",
    },
    {
      title: "Growth Marketing",
      description: "Estrategias de crecimiento escalables basadas en datos.",
    },
  ]

  return (
    <section id="services" className="py-24 md:py-32 bg-muted/20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-balance">
              Nuestros <span className="bg-gradient-to-r from-cyan-500 via-sky-600 to-indigo-600 bg-clip-text text-transparent">
                servicios
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Soluciones integrales para impulsar tu marca al siguiente nivel
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {coreServices.map((service, index) => (
              <div 
                key={index} 
                className="service-card-container"
                onClick={() => setActiveServiceIndex(activeServiceIndex === index ? null : index)}
              >
                <div className={`service-card ${activeServiceIndex === index ? 'active' : ''}`}>
                  <div className="front-content">
                    <p className="service-title">{service.title}</p>
                  </div>
                  <div className="content">
                    <p className="heading">{service.title}</p>
                    <p className="description">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-balance">
              Nuestros 5 <span className="gradient-text">pilares</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {pillars.map((pillar, index) => (
                <div key={index} className="pillar-container">
                  <div 
                    className={`pillar-card ${activePillarIndex === index ? 'active' : ''}`}
                    onClick={() => setActivePillarIndex(activePillarIndex === index ? null : index)}
                  >
                    <div className="face back">
                      <div className="pillar-content">
                        <b className="pillar-title">{pillar.title}</b>
                        <p className="pillar-description">{pillar.description}</p>
                      </div>
                    </div>
                    <div className="face front">
                      <div className="front-inner">
                        <span className="pillar-front-title">{pillar.title}</span>
                        {activePillarIndex === index ? (
                          <ChevronUp className="chevron-icon" />
                        ) : (
                          <ChevronDown className="chevron-icon" />
                        )}
                      </div>
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
