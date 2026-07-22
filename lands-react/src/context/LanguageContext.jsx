import { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export const translations = {
  es: {
    // Botón Global
    switchLang: "English 🇺🇸",
    back: "← Volver",

    // Home / Menú Principal
    homeTitle: "Terrenos en venta cerca de Mazunte y en Cuilapam de Guerrero Oaxaca",
    homeSubtitle: "Invierte en tu futuro",
    btnGalleryMazunte: "Galeria lotes Piedras Negras Mazunte",
    btnGalleryCuilapam: "Galeria lotes Piedra Blanca Cuilapam de Guerrero",
    btnCroquisMazunte: "Consultar croquis Piedras Negras Mazunte",
    btnCroquisCuilapam: "Consultar croquis Piedra Blanca Cuilapam",
    btnLocations: "Ubicaciones",
    btnInfo: "Pedir informes",

    // Ubicaciones
    locMazunteTitle: "Ubicación Terrenos Piedras Negras Mazunte",
    locCuilapamTitle: "Ubicación Terrenos Piedra Blanca Cuilapam de Guerrero",
    openMazunteMaps: "📍 Abrir Mazunte en Google Maps",
    openCuilapamMaps: "📍 Abrir Cuilapam en Google Maps",

    // Formulario de Información
    infoTitle: "Pedir informes",
    namePlaceholder: "Nombre",
    emailPlaceholder: "Correo",
    messagePlaceholder: "Mensaje",
    sendEmailBtn: "Enviar por correo",
    orContact: "O contáctanos directamente:",
    whatsAppBtn: "💬 Contactar por WhatsApp",
    successMsg: "Mensaje enviado correctamente. Nos pondremos en contacto pronto.",
    errorMsg: "Error al enviar el mensaje ❌",
    whatsAppMsg: "Hola, me interesa obtener información sobre los terrenos.",
  },
  en: {
    // Global Button
    switchLang: "Español 🇲🇽",
    back: "← Back",

    // Home / Main Menu
    homeTitle: "Lands for sale near of Mazunte and Cuilapam de Guerrero Oaxaca",
    homeSubtitle: "Invest in your future",
    btnGalleryMazunte: "Pictures of Piedras Negras Mazunte Lands ",
    btnGalleryCuilapam: "Pictures of Piedra Blanca Cuilapam de Guerrero Lands",
    btnCroquisMazunte: "View Piedras Negras Mazunte Sketch",
    btnCroquisCuilapam: "View Piedra Blanca Cuilapam Sketch",
    btnLocations: "View Locations",
    btnInfo: "Request Information",

    // Locations
    locMazunteTitle: "Piedras Negras Mazunte Lands Location",
    locCuilapamTitle: "Piedra Blanca Cuilapam Lands Location",
    openMazunteMaps: "📍 Open in Google Maps",
    openCuilapamMaps: "📍 Open in Google Maps",

    // Information Form
    infoTitle: "Request Information",
    namePlaceholder: "Full Name",
    emailPlaceholder: "Email Address",
    messagePlaceholder: "Message",
    sendEmailBtn: "Send Email",
    orContact: "Or contact us directly:",
    whatsAppBtn: "💬 Contact via WhatsApp",
    successMsg: "Message sent successfully. We will get in touch soon.",
    errorMsg: "Error sending message ❌",
    whatsAppMsg: "Hello, I am interested in getting information about the land lots.",
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("es");

  const toggleLanguage = () => {
    setLang((prev) => (prev === "es" ? "en" : "es"));
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);