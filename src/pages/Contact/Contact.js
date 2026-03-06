import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "", botcheck: "" });
  const [status, setStatus] = useState("");
  console.log(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, process.env.REACT_APP_PUBLIC_KEY); 
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
        },
        () => {
          setStatus("Erreur, veuillez réessayer plus tard.");
        }
      );
  };

  return (
    <div className="page contact-page">
      <h1>Contact</h1>

      <form className="contact-form" onSubmit={handleSubmit}>
        {/* Honeypot invisible */}
        <input type="text" name="botcheck" value={form.botcheck} onChange={handleChange} style={{ display: "none" }} />

        <input
          type="text"
          name="name"
          placeholder="Nom"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Envoyer</button>
      </form>

      {status && <p className="status">{status}</p>}
    </div>
  );
}

export default Contact;