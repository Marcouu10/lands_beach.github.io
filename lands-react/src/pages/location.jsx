function Location() {
  return (
    <div className="bg-dark text-light min-vh-100">
      <div className="container py-5">

        <h2 className="text-center fw-bold mb-4">
          Ubicación del Terreno
        </h2>

        
        <div className="ratio ratio-16x9 rounded shadow overflow-hidden">
          <iframe
            src="https://www.google.com/maps?q=15.727861,-96.664444&z=16&output=embed"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa del terreno"
          ></iframe>
        </div>

        {/* BOTÓN A GOOGLE MAPS */}
        <div className="text-center mt-4">
          <a
            href="https://maps.app.goo.gl/2qArUZ1f73DKnPg28"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success btn-lg"
          >
            📍 Abrir en Google Maps
          </a>
        </div>

        <div className="text-center mt-4">
          <a
            href="/"
            className="btn btn-outline-primary d-inline-flex align-items-center gap-2 px-4 py-2"
          >
            ← Volver
          </a>
        </div>

      </div>
    </div>
  )
}

export default Location;
