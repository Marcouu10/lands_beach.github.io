import { Routes, Route, Link } from "react-router-dom";
import Location from "./pages/location"; 
import Gallery from "./pages/gallery"
import Layout from "./pages/layout";
import palmeras from "./assets/Palmeras.jpg"
import Information from "./pages/information";

function Home() {
  return (
    <header className="d-flex flex-column align-items-center text-center text-white bg-dark vh-100 justify-content-center"
      
    style={{
    backgroundImage: `url(${palmeras})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh"
  }}
    >
  

      <h1 className="fw-bold mt-3">
        Terrenos en venta en Piedras Negras Mazunte
      </h1>

      <h2 className="fw-bold">Invierte en tu futuro</h2>

      <div className="d-grid gap-3 col-10 col-md-4 mx-auto mt-4">

        <Link to="/galeria" className="btn btn-light btn-lg">
          Ver galería
        </Link>

        <Link to="/croquis" className="btn btn-light btn-lg">
          Consultar croquis
        </Link>

        <Link to="/ubicacion" className="btn btn-light btn-lg">
          Ubicación
        </Link>

        <Link to="/informes" className="btn btn-light btn-lg">
          Pedir informes
        </Link>

      </div>

      <footer className="text-white text-center p-3 mt-5">
        © 2025 Inmobiliaria Tres Hermanos
      </footer>

    </header>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/galeria" element={<Gallery />} />
      <Route path="/croquis" element={<Layout />} />
      <Route path="/ubicacion" element={<Location />} />
      <Route path="/informes" element={<Information />} />
    </Routes>
  );
}

export default App;
