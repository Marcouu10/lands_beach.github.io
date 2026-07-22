import { Link } from "react-router-dom"
import planoPdf from "../assets/Paraje_Piedra_Blanca.pdf"

function Layout_C() {
  return (
    <div style={{ margin: 0, overflow: "hidden", minHeight: "100vh", backgroundColor: "#212529" }}>

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
        ← Volver
      </Link>

     
      <div 
        style={{ 
          width: "100vw", 
          height: "100vh", 
        //   transform: "rotate(180deg)", 
          transformOrigin: "center center" 
        }}
      >
        <embed
          src={planoPdf}
          type="application/pdf"
          width="100%"
          height="100%"
        />
      </div>

    </div>
  );
}
export default Layout_C;