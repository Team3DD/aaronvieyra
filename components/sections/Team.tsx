"use client"

import TiltCard from "@/components/ui/tilt-card"
import AnimatedSection from "@/components/ui/animated-section"
import Image from "next/image"

const teamMembers = [
  {
    name: "Aarón Vieyra",
    role: "Founder & Director",
    bio: "Visionario estratega con más de 10 años de experiencia en comunicación corporativa y relaciones públicas. Lidera proyectos de alto impacto para marcas globales.",
    image: "/aaron.jpg",
  },
]

export default function Team() {
  return (
    <section
      id="team"
      className="relative overflow-hidden py-24 md:py-32 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
    >
      {/* Fondo decorativo con gradiente nebuloso */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-sky-600 to-indigo-600 opacity-10 dark:opacity-15 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="grid items-center gap-16 md:grid-cols-2">
            {/* Lado izquierdo: texto descriptivo */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold leading-tight text-gray-900 dark:text-white sm:text-5xl">
                ¡Hola! Soy <br className="block sm:hidden" />
                <span className="bg-gradient-to-r from-cyan-500 via-sky-600 to-indigo-600 bg-clip-text text-transparent">
                  Aarón Vieyra
                </span>
              </h2>

              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-lg">
                Visionario estratega con más de 10 años de experiencia en comunicación corporativa y relaciones públicas. Lidero proyectos de alto impacto para marcas globales con un enfoque creativo y humano.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-400">
                <span className="relative inline-block">
                  <span className="absolute bottom-0.5 left-0 w-full h-2 bg-gradient-to-r from-cyan-500 via-sky-600 to-indigo-600 opacity-40 rounded"></span>
                  <span className="relative font-semibold">¿Tienes una pregunta?</span>
                </span>
                <br className="block sm:hidden" />
                Escríbeme en{" "}
                <a
                  href="#"
                  className="font-medium text-sky-600 dark:text-sky-400 hover:underline transition-all duration-200"
                >
                  Twitter
                </a>
              </p>
            </div>

            {/* Lado derecho: tarjeta con TiltCard */}
            <div className="flex justify-center">
              {teamMembers.map((member) => (
                <TiltCard key={member.name}>
                  <div className="overflow-hidden rounded-2xl bg-white/80 dark:bg-slate-800/60 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 max-w-sm">
                    <div className="aspect-square overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 space-y-3">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {member.name}
                      </h3>
                      <p className="bg-gradient-to-r from-cyan-500 via-sky-600 to-indigo-600 bg-clip-text text-transparent font-semibold">
                        {member.role}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
