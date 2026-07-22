import { useState } from "react"
import { Link } from "react-router-dom"
import emailjs from "@emailjs/browser"
import { useLanguage } from "../context/LanguageContext"

function Information() {
  const { t } = useLanguage(); // Extraemos las traducciones dinámicas

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
      setRespuesta(t.successMsg)
      setFormData({
        nombre: "",   
        correo: "",
        mensaje: ""
      })
    })
    .catch(() => {
      setRespuesta(t.errorMsg)
    })
  }

  // Número de contacto y mensaje traducido para WhatsApp
  const urlWhatsApp = `https://wa.me/529513456054?text=${encodeURIComponent(t.whatsAppMsg)}`;

  return (
    <div className="vh-100 d-flex align-items-center justify-content-center bg-dark">

      <div className="bg-white p-4 rounded shadow" style={{ width: "100%", maxWidth: "400px" }}>

        <h1 className="mb-4 text-center">{t.infoTitle}</h1>

        <form onSubmit={handleSubmit}>

          <input
            className="form-control mb-3"
            name="nombre"
            placeholder={t.namePlaceholder}
            required
            value={formData.nombre}
            onChange={handleChange}
          />

          <input
            className="form-control mb-3"
            type="email"
            name="correo"
            placeholder={t.emailPlaceholder}
            required
            value={formData.correo}
            onChange={handleChange}
          />

          <textarea
            className="form-control mb-3"
            name="mensaje"
            placeholder={t.messagePlaceholder}
            value={formData.mensaje}
            onChange={handleChange}
          />

          <button className="btn btn-primary w-100">
            {t.sendEmailBtn}
          </button>

        </form>

        {respuesta && (
          <div className="mt-3 text-center text-success fw-bold">
            {respuesta}
          </div>
        )}

        {/* --- OPCIÓN DE WHATSAPP --- */}
        <div className="text-center my-3">
          <small className="text-muted">{t.orContact}</small>
        </div>

        <a
          href={urlWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-success w-100 d-flex align-items-center justify-content-center gap-2 fw-semibold"
        >
          {t.whatsAppBtn}
        </a>

        {/* --- BOTÓN VOLVER --- */}
        <div className="text-center mt-3">
          <Link to="/" className="btn btn-secondary btn-sm">
            {t.back}
          </Link>
        </div>

      </div>

    </div>
  )
}

export default Information
