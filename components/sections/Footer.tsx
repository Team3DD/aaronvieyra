"use client"

import Image from "next/image"
import { Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image 
                src="/logo.svg" 
                alt="TIKI PR Logo" 
                width={74} 
                height={74} 
                className="object-contain select-none dark:invert transition-all duration-300" 
                priority 
              />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Comunicamos y posicionamos marcas con impacto orgánico y positivo.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Servicios</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  PR Campaigns
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Creative Production
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Marketing Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Influencer Marketing
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Legal</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="/aviso-privacidad" className="hover:text-primary transition-colors">
                  Aviso de Privacidad
                </a>
              </li>
              <li>
                <a href="/terminos" className="hover:text-primary transition-colors">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="/cookies" className="hover:text-primary transition-colors">
                  Política de Cookies
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Contacto</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail size={20} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:hola@tikipr.com" className="hover:text-primary transition-colors">
                  hola@tikipr.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={20} className="mt-0.5 flex-shrink-0" />
                <a href="tel:+525512345678" className="hover:text-primary transition-colors">
                  +52 55 1234 5678
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={20} className="mt-0.5 flex-shrink-0" />
                <span>Ciudad de México, México</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} TIKI PR. Todos los derechos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Design & Development by{" "}
            <a
              href="https://team3.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold transition-all duration-300"
              style={{ color: "#DC143C" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, #06b6d4 0%, #0284c7 50%, #6366f1 100%)"
                e.currentTarget.style.backgroundClip = "text"
                e.currentTarget.style.webkitBackgroundClip = "text"
                e.currentTarget.style.webkitTextFillColor = "transparent"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "none"
                e.currentTarget.style.backgroundClip = "unset"
                e.currentTarget.style.webkitBackgroundClip = "unset"
                e.currentTarget.style.webkitTextFillColor = "unset"
                e.currentTarget.style.color = "#DC143C"
              }}
            >
              Team 3
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
