import { Link } from "react-router-dom"
import plano from "../assets/Plano.png"

function Layout() {
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
        Volver
      </Link>

      <img
        src={plano}
        alt="Croquis del terreno"
        style={{
          width: "100vw",
          height: "auto",
          display: "block",
        }}
      />

    </div>
  )
}

export default Layout