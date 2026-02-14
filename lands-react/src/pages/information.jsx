import { useState } from "react"
import { Link } from "react-router-dom"
import emailjs from "@emailjs/browser"

function Information() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: ""
  })

  const [respuesta, setRespuesta] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.send(
        "service_eeo8c1r",
        "template_nxflpl9",

        formData,
        "_xP9soB-lieFrbJnb"
    )
    .then(() => {
      setRespuesta("Mensaje enviado correctamente. Nos pondremos en contacto pronto.")
      setFormData({
        nombre: "",   
        correo: "",
        mensaje: ""
      })
    })
    .catch(() => {
      setRespuesta("Error al enviar el mensaje ❌")
    })
  }


  return (
    <div className="vh-100 d-flex align-items-center justify-content-center bg-dark">

      <div className="bg-white p-4 rounded shadow" style={{ width: "100%", maxWidth: "400px" }}>

        <h1 className="mb-4 text-center">Pedir informes</h1>

        <form onSubmit={handleSubmit}>

          <input
            className="form-control mb-3"
            name="nombre"
            placeholder="Nombre"
            required
            value={formData.nombre}
            onChange={handleChange}
          />

          <input
            className="form-control mb-3"
            type="email"
            name="correo"
            placeholder="Correo"
            required
            value={formData.correo}
            onChange={handleChange}
          />

          <textarea
            className="form-control mb-3"
            name="mensaje"
            placeholder="Mensaje"
            value={formData.mensaje}
            onChange={handleChange}
          />

          <button className="btn btn-primary w-100">
            Enviar
          </button>

        </form>

        {respuesta && (
          <div className="mt-3 text-center text-success">
            {respuesta}
          </div>
        )}

        <div className="text-center mt-3">
          <Link to="/" className="btn btn-secondary btn-sm">
            Volver
          </Link>
        </div>

      </div>

    </div>
  )
}

export default Information
