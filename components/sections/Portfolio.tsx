"use client"

import { useState } from "react"
import Image from "next/image"
import AnimatedSection from "@/components/ui/animated-section"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      title: "Campaña Editorial Vogue",
      category: "Editoriales",
      image: "/fashion-editorial-magazine-spread.webp",
      description: "Producción completa para portada y editorial de 12 páginas en Vogue México.",
      width: 800,
      height: 1200,
    },
    {
      title: "Lanzamiento Producto Tech",
      category: "Influencer Marketing",
      image: "/tech-product-launch.webp",
      description: "Estrategia de influencer marketing para lanzamiento de smartphone con 50M+ impresiones.",
      width: 1200,
      height: 800,
    },
    {
      title: "Campaña Sostenibilidad",
      category: "Producciones",
      image: "/sustainability-campaign-production.webp",
      description: "Producción audiovisual de campaña de sostenibilidad para marca global.",
      width: 800,
      height: 800,
    },
    {
      title: "Fashion Week Coverage",
      category: "Editoriales",
      image: "/fashion-week-runway-show.webp",
      description: "Cobertura completa y gestión de prensa para desfile en Fashion Week.",
      width: 800,
      height: 1200,
    },
    {
      title: "Colaboración Influencer",
      category: "Influencer Marketing",
      image: "/influencer-collaboration-content.webp",
      description: "Gestión de colaboración con top influencers para marca de belleza.",
      width: 800,
      height: 800,
    },
    {
      title: "Video Corporativo",
      category: "Producciones",
      image: "/corporate-video-production.webp",
      description: "Producción de video corporativo de alto impacto para empresa Fortune 500.",
      width: 1200,
      height: 800,
    },
    {
      title: "Evento de Marca",
      category: "Producciones",
      image: "/brand-event-production.webp",
      description: "Producción integral de evento de lanzamiento con 500+ asistentes.",
      width: 800,
      height: 1200,
    },
    {
      title: "Campaña Digital",
      category: "Marketing",
      image: "/digital-marketing-campaign.webp",
      description: "Campaña digital multiplataforma con alcance de 10M+ usuarios.",
      width: 1200,
      height: 800,
    },
    {
      title: "Sesión Fotográfica",
      category: "Editoriales",
      image: "/professional-photo-shoot.webp",
      description: "Sesión fotográfica de producto para campaña internacional.",
      width: 800,
      height: 1200,
    },
    {
      title: "Estrategia de Contenido",
      category: "Marketing",
      image: "/content-strategy-planning.webp",
      description: "Desarrollo de estrategia de contenido anual para marca líder.",
      width: 800,
      height: 800,
    },
  ]

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-balance">
              Nuestro <span className="bg-gradient-to-r from-cyan-500 via-sky-600 to-indigo-600 bg-clip-text text-transparent">
                portafolio
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Proyectos que demuestran nuestra excelencia creativa
            </p>
          </div>

          {/* Masonry grid with natural image sizes */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="break-inside-avoid cursor-pointer group"
                onClick={() => setSelectedProject(index)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50 hover:border-primary/50">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={project.width}
                    height={project.height}
                    className="w-full h-auto group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
                      <p className="gradient-text text-sm font-semibold">{project.category}</p>
                      <h3 className="text-background text-xl font-bold">{project.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* Project Dialog */}
      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl">
          {selectedProject !== null && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl">{projects[selectedProject].title}</DialogTitle>
                <DialogDescription className="text-lg">{projects[selectedProject].category}</DialogDescription>
              </DialogHeader>
              <Image
                src={projects[selectedProject].image}
                alt={projects[selectedProject].title}
                width={projects[selectedProject].width}
                height={projects[selectedProject].height}
                className="w-full h-auto rounded-lg"
                sizes="(max-width: 768px) 100vw, 896px"
              />
              <p className="text-lg leading-relaxed">{projects[selectedProject].description}</p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
