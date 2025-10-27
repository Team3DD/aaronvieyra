import Hero from "@/components/sections/Hero"
import Header from "@/components/sections/Header"
import About from "@/components/sections/About"
import Team from "@/components/sections/Team"
import Services from "@/components/sections/Services"
import Process from "@/components/sections/Process"
import Clients from "@/components/sections/Clients"
import Portfolio from "@/components/sections/Portfolio"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/sections/Footer"

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Header />
      <Hero />
      <Clients />
      <About />
      <Team />
      <Services />
      <Process />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}
