"use client"

export default function Clients() {
  const logos = [
    {
      src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80",
      alt: "Pacífico",
      modalSrc: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80",
      alt: "Tatau Studio",
      modalSrc: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1920&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
      alt: "Instabrows",
      modalSrc: "https://images.unsplash.com/photo-1560869713-bf165a0ace26?w=1920&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1571333250630-f0230c320b6d?w=400&q=80",
      alt: "La Ciclovía",
      modalSrc: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=400&q=80",
      alt: "Sarah y Salomón Cohen",
      modalSrc: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1920&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=80",
      alt: "Pesquera",
      modalSrc: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80",
      alt: "Prem Dayal School",
      modalSrc: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=1920&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&q=80",
      alt: "Iberdrola",
      modalSrc: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1920&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&q=80",
      alt: "Tlama Arte en Palma",
      modalSrc: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=1920&q=80",
    },
  ]

  return (
    <>
      <input type="checkbox" id="modal-toggle" className="modal-checkbox" />

      <section className="clients-section">
        <div className="container mx-auto px-4">
          <div className="logo-carousel-container">
            <div className="logo-carousel-track">
              {logos.map((logo, index) => (
                <label
                  key={`logo-${index}`}
                  htmlFor="modal-toggle"
                  className="logo-card"
                  data-modal-src={logo.modalSrc}
                  onClick={() => {
                    const modalImage = document.getElementById("modal-image")
                    if (modalImage) {
                      modalImage.src = logo.modalSrc
                    }
                  }}
                >
                  <img src={logo.src || "/placeholder.svg"} alt={logo.alt} loading="lazy" />
                </label>
              ))}

              {logos.map((logo, index) => (
                <div key={`dup-${index}`} className="logo-card" aria-hidden="true">
                  <img src={logo.src || "/placeholder.svg"} alt={logo.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          <div className="text-center space-y-6 mt-20">
            <h2 className="section-title">
              Clientes que{" "}
              <span className="bg-gradient-to-r from-cyan-500 via-sky-600 to-indigo-600 bg-clip-text text-transparent">
                confían
              </span>{" "}
              en nosotros
            </h2>
            <p className="section-subtitle">Colaboramos con líderes de la industria para crear impacto real</p>
          </div>
        </div>
      </section>

      <div className="modal-overlay">
        <div className="modal-content">
          <label htmlFor="modal-toggle" className="modal-close-btn" aria-label="Cerrar modal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </label>
          <div className="modal-image-wrapper">
            <img
              id="modal-image"
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80"
              alt="Imagen expandida del cliente"
            />
          </div>
        </div>
      </div>
    </>
  )
}
