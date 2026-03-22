import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "", botcheck: "" });
  const [status, setStatus] = useState("");

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot
    if (form.botcheck !== "") return;

    if (!form.name || !form.email || !form.message) {
      setStatus("Veuillez remplir tous les champs");
      return;
    }

    if (!executeRecaptcha) {
      setStatus("Captcha non prêt");
      return;
    }

    try {
      const token = await executeRecaptcha("contact");

      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
          recaptcha_token: token,
        },
        process.env.REACT_APP_PUBLIC_KEY
      );

      setStatus("Message envoyé avec succès !");
      setForm({ name: "", email: "", message: "", botcheck: "" });

    } catch (error) {
      setStatus("Erreur, veuillez réessayer.");
    }
  };

  return (
    <section className="contact">
      <div className="contact-container">

        {/* LEFT */}
        <div className="contact-left">
          <h1>
            Comment me contacter ? <br />
          </h1>

          <div className="contact-info">
            <div>
              <h3>Contact</h3>
              <a href="mailto:willem.preterre@gmail.com">
                willem.preterre@gmail.com
              </a>
            </div>

            <div>
              <h3>Réseaux sociaux</h3>
              <div className="icons">
              <a href="https://github.com/willempreterre" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>

              <a href="https://linkedin.com/in/tonprofil" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>CONTACT FORM</h2>

            <label>Name</label>
            <input type="text" name="name" onChange={handleChange} />

            <label>Email</label>
            <input type="email" name="email" onChange={handleChange} />

            <label>Message</label>
            <textarea name="message" onChange={handleChange} />

            <button type="submit">SEND</button>

            {status && <p className="status">{status}</p>}
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;