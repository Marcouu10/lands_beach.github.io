import { Link } from "react-router-dom"

import carretera from "../assets/Carretera.jpeg"
import foto1 from "../assets/Foto1.png"
import foto2 from "../assets/Foto2.png"
import foto3 from "../assets/foto3.png"
import foto4 from "../assets/Foto4.png"
import foto5 from "../assets/Foto5.png"
import foto6 from "../assets/Foto6.png"
import foto7 from "../assets/Foto7.png"

function Gallery() {
  return (
    <section
      className="d-flex align-items-center"
      style={{
        minHeight: "100vh",
        background: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${carretera}) center / cover no-repeat`
      }}
    >
      <div className="container text-center">

        <h1 className="fw-bold mb-4 text-white">
          Galería lotes Piedras Negras Mazunte
        </h1>

        <div id="galeria" className="carousel slide mb-3" data-bs-ride="carousel">
          <div className="carousel-inner rounded shadow-lg">

            <div className="carousel-item active">
              <img src={foto1} className="d-block w-100" alt="Foto 1" />
            </div>

            <div className="carousel-item">
              <img src={foto2} className="d-block w-100" alt="Foto 2" />
            </div>

            <div className="carousel-item">
              <img src={foto3} className="d-block w-100" alt="Foto 3" />
            </div>

            <div className="carousel-item">
              <img src={foto4} className="d-block w-100" alt="Foto 4" />
            </div>

            <div className="carousel-item">
              <img src={foto5} className="d-block w-100" alt="Foto 5" />
            </div>

            <div className="carousel-item">
              <img src={foto6} className="d-block w-100" alt="Foto 6" />
            </div>

            <div className="carousel-item">
              <img src={foto7} className="d-block w-100" alt="Foto 7" />
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
          ← Volver
        </Link>

      </div>
    </section>
  )
}

export default Gallery
