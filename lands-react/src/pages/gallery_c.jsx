import { Link } from "react-router-dom"
import { useLanguage } from "../context/LanguageContext"

import cuilapam from "../assets/cuilpam.png"
import lt5 from "../assets/lt5.jpeg"
import lt6 from "../assets/lt6.jpeg"
import lt7 from "../assets/lt7.png"
import lt8 from "../assets/lt8.png"
import lt9 from "../assets/lt9.mp4"

function Gallery_C() {
  const { t } = useLanguage(); // Extraemos las traducciones

  return (
    <section
      className="d-flex align-items-center"
      style={{
        minHeight: "100vh",
        background: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${cuilapam}) center / cover no-repeat`
      }}
    >
      <div className="container text-center">

        <h1 className="fw-bold mb-4 text-white">
          {t.btnGalleryCuilapam}
        </h1>

        <div id="galeria" className="carousel slide mb-3" data-bs-ride="carousel">
          <div className="carousel-inner rounded shadow-lg">

            <div className="carousel-item active">
              <video src={lt9} controls muted autoPlay loop className="d-block w-100" style={{maxHeight:"500px", objectFit: "cover"}} />
            </div>

            <div className="carousel-item">
              <img src={lt5} className="d-block w-100" alt="Foto 2" />
            </div>

            <div className="carousel-item">
              <img src={lt6} className="d-block w-100" alt="Foto 3" />
            </div>

            <div className="carousel-item">
              <img src={lt7} className="d-block w-100" alt="Foto 4" />
            </div>

            <div className="carousel-item">
              <img src={lt8} className="d-block w-100" alt="Foto 5" />
            </div>

          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#galeria"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#galeria"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>

        </div>

        <Link to="/" className="btn btn-outline-light px-4">
          {t.back}
        </Link>

      </div>
    </section>
  )
}

export default Gallery_C