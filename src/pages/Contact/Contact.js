import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";
import ReCAPTCHA from "react-google-recaptcha";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "", botcheck: "" });
  const [status, setStatus] = useState("");
  const [captcha, setCaptcha] = useState(null);

  console.log(process.env.REACT_APP_RECAPTCHA_SITE_KEY, process.env.REACT_APP_TEMPLATE_ID, process.env.REACT_APP_PUBLIC_KEY);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleCaptcha = (value) => {
    setCaptcha(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Honeypot anti-bot
    if (form.botcheck !== "") return;

    // Validation simple
    if (!form.name || !form.email || !form.message) {
      setStatus("Veuillez remplir tous les champs");
      return;
    }
    if (!captcha) {
      setStatus("Veuillez valider le reCAPTCHA");
      return;
    }
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        { name: form.name, email: form.email, message: form.message },
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Message envoyé avec succès !");
          setForm({ name: "", email: "", message: "", botcheck: "" });
          setCaptcha(null);

        },
        () => {
          setStatus("Erreur, veuillez réessayer plus tard.");
        }
      );
  };

  return (
    <>
      <div className="contact-wrapper">
        <div className="contact-top">
          <h2 className="contact-title">Comment me contacter </h2>

          <form className="contact-form" onSubmit={handleSubmit}>

            <input type="text" name="botcheck" value={form.botcheck} onChange={handleChange} style={{ display: "none" }} />

            <input
              type="text"
              name="name"
              placeholder="Nom"
              value={form.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Adresse mail"
              value={form.email}
              onChange={handleChange}
            />

            <input
              type="text"
              name="subject"
              placeholder="Sujet"
            />

            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
            />
            <div className="submit-section">
              <ReCAPTCHA
                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                onChange={handleCaptcha}
              />
              <button type="submit">Envoyer →</button>
            </div>
          </form>
        </div>
        <div className="contact-bottom">
          <h2>Coordonnées</h2>
          <div className="coordonates">
            <div className="info">
              <div className="info-item">
                <span>📧</span>
                <a className="email-link" href="mailto:willem.preterre@gmail.com">willem.preterre@gmail.com</a>
              </div>

              <div className="info-item">
                <span>📍</span>
                <p>33700 Mérignac, France</p>
              </div>
            </div>
            <div className="social-icons">
              <a
                href="https://github.com/willempreterre"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/tonprofil"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;