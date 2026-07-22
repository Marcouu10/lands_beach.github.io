import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

function Location() {
  const { t } = useLanguage(); // Extraemos el objeto con los textos del idioma activo

  return (
    <div className="bg-dark text-light min-vh-100">
      <div className="container py-5">

        {/* --- SECCIÓN MAZUNTE --- */}
        <section className="mb-5">
          <h2 className="text-center fw-bold mb-4">
            {t.locMazunteTitle}
          </h2>

          <div className="ratio ratio-16x9 rounded shadow overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=15.727861,-96.664444&z=16&output=embed"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t.locMazunteTitle}
            ></iframe>
          </div>

          <div className="text-center mt-4">
            <a
              href="https://maps.app.goo.gl/2qArUZ1f73DKnPg28"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success btn-lg"
            >
              {t.openMazunteMaps}
            </a>
          </div>
        </section>

        <hr className="my-5 border-secondary" />

        {/* --- SECCIÓN CUILAPAM --- */}
        <section className="mb-5">
          <h2 className="text-center fw-bold mb-4">
            {t.locCuilapamTitle}
          </h2>

          <div className="ratio ratio-16x9 rounded shadow overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=16.992683,-96.790933&z=16&output=embed"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t.locCuilapamTitle}
            ></iframe>
          </div>

          <div className="text-center mt-4">
            <a
              href="https://maps.app.goo.gl/orWqZD11mcj1PdSZ6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success btn-lg"
            >
              {t.openCuilapamMaps}
            </a>
          </div>
        </section>

        {/* --- BOTÓN VOLVER --- */}
        <div className="text-center mt-5">
          <Link
            to="/"
            className="btn btn-outline-primary d-inline-flex align-items-center gap-2 px-4 py-2"
          >
            {t.back}
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Location;