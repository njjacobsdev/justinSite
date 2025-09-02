import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css"; // import your CSS file

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        serviceId,   // replace with EmailJS service ID
        templateId,  // replace with EmailJS template ID
        formRef.current,
        publicKey    // replace with EmailJS public key
      )
      .then(
        () => {
          setStatus("success");
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          setStatus("error");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      
      <h2 className="text-5xl font-bold contact-title">Contact Us</h2>
      <img src="/logo.svg" alt="Logo" className="contact-logo" />

      <form ref={formRef} onSubmit={sendEmail} className="contact-form">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name: Lastname Firstname"
          required
          className="contact-input"
        />

        <input
          type="tel"
          name="user_phone"
          placeholder="Your Phone Number"
          required
          className="contact-input"
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="contact-input"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="contact-textarea"
        />

        <button type="submit" className="contact-button">
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="contact-success">Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="contact-error">Failed to send message. Please try again.</p>
        )}
      </form>
    </section>
  );
}
