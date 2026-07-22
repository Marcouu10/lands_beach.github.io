import { Link } from "react-router-dom"
import plano from "../assets/plano.png"
import { useLanguage } from "../context/LanguageContext"

function Layout() {
  const { t } = useLanguage(); // Conectamos el diccionario de idiomas

  return (
    <div style={{ margin: 0, overflow: "hidden" }}>

      <Link 
        to="/" 
        className="btn btn-primary"
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",
          zIndex: 1000
        }}
      >
        {t.back}
      </Link>

      <img
        src={plano}
        alt={t.btnCroquisMazunte}
        style={{
          width: "100vw",
          height: "auto",
          display: "block",
        }}
      />

    </div>
  )
}

export default Layout;