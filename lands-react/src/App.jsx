import { Routes, Route, Link } from "react-router-dom";
import Location from "./pages/location"; 
import Gallery from "./pages/gallery";
import Layout from "./pages/layout";
import palmeras from "./assets/Palmeras.jpg";
import Information from "./pages/information";
import Gallery_C from "./pages/gallery_c";
import Layout_C from "./pages/layout_c";

import { useLanguage } from './context/LanguageContext.jsx';


function Home() {
  const { t } = useLanguage(); 

  return (
    <header 
      className="d-flex flex-column align-items-center text-center text-white bg-dark vh-100 justify-content-center"
      style={{
        backgroundImage: `url(${palmeras})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh"
      }}
    >
      <h1 className="fw-bold mt-3">
        {t.homeTitle}
      </h1>

      <h2 className="fw-bold">
        {t.homeSubtitle}
      </h2>

      <div className="d-grid gap-3 col-10 col-md-4 mx-auto mt-4">

        <Link to="/galeria" className="btn btn-light btn-lg">
          {t.btnGalleryMazunte}
        </Link>

        <Link to="/galeria_c" className="btn btn-light btn-lg">
          {t.btnGalleryCuilapam}
        </Link>

        <Link to="/croquis" className="btn btn-light btn-lg">
          {t.btnCroquisMazunte}
        </Link>

        <Link to="/croquis_c" className="btn btn-light btn-lg">
          {t.btnCroquisCuilapam}
        </Link>

        <Link to="/ubicacion" className="btn btn-light btn-lg">
          {t.btnLocations}
        </Link>

        <Link to="/informes" className="btn btn-light btn-lg">
          {t.btnInfo}
        </Link>

      </div>

      <footer className="text-white text-center p-3 mt-5">
        © 2025 Inmobiliaria Tres Hermanos
      </footer>

    </header>
  );
}


function App() {
  const { toggleLanguage, t } = useLanguage();

  return (
    <>
      
      <button 
        onClick={toggleLanguage} 
        className="btn btn-dark border-2 border-light fw-bold px-3 py-2 position-fixed top-0 end-0 m-3 shadow-lg"
        style={{ zIndex: 2000, borderRadius:"50px" }}
      >
        🌐 {t.switchLang}
      </button>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/galeria_c" element={<Gallery_C />} />
        <Route path="/croquis" element={<Layout />} />
        <Route path="/croquis_c" element={<Layout_C />} />
        <Route path="/ubicacion" element={<Location />} />
        <Route path="/informes" element={<Information />} />
      </Routes>
    </>
  );
}

export default App;