import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Basic validation
    if (formData.name && formData.email && formData.message) {
      console.log("Form submitted:", formData);
      // Here you would typically send the data to a server
      alert("Thank you for your message! We will get back to you shortly.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      alert("Please fill out all required fields.");
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title text-center">
          Contact Abaddon Pest Control - FREE Inspection
        </h2>
        <p className="contact__intro text-center">
          Get your <strong>FREE pest inspection</strong> today! FDA-licensed
          pest control services in Dasmariñas, Cavite and Metro Manila. Call,
          WhatsApp, or Viber us now.
        </p>
        <div className="contact__grid">
          <div className="contact__form-container">
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone (Optional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
          <div className="contact__info">
            <h3>Contact Information</h3>
            <div className="contact__business-info">
              <h4>🏢 Abaddon Pest Control Services Inc.</h4>
              <p>
                <strong>FDA License:</strong> CCHUHSRR-RIVA-PCO-01-ER-732510
              </p>
              <p>
                <strong>Classification:</strong> Commercial Application,
                Exterminator
              </p>
            </div>
            <div className="contact__address">
              <h4>📍 Business Address</h4>
              <p>
                <strong>Garden Grove Village, Salitran</strong>
              </p>
              <p>Dasmariñas, Cavite 4114, Philippines</p>
              <p>
                <a
                  href="https://www.google.com/maps?q=14.344438363320867,120.9524173725775"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  📍 View on Google Maps
                </a>
              </p>
            </div>
            <div className="contact__phone">
              <h4>📞 Call or Text</h4>
              <p>
                <strong>Mobile 1:</strong>{" "}
                <a href="tel:+639175842100">+63 917 584 2100</a>
              </p>
              <p>
                <strong>Mobile 2:</strong>{" "}
                <a href="tel:+639175090485">+63 917 509 0485</a>
              </p>
            </div>
            <div className="contact__digital">
              <h4>💬 Digital Contact</h4>
              <p>
                <strong>WhatsApp 1:</strong>{" "}
                <a
                  href="https://wa.me/639175842100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +63 917 584 2100
                </a>
              </p>
              <p>
                <strong>WhatsApp 2:</strong>{" "}
                <a
                  href="https://wa.me/639175090485"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +63 917 509 0485
                </a>
              </p>
              <p>
                <strong>Viber 1:</strong>{" "}
                <a
                  href="viber://chat?number=639175842100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +63 917 584 2100
                </a>
              </p>
              <p>
                <strong>Viber 2:</strong>{" "}
                <a
                  href="viber://chat?number=639175090485"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +63 917 509 0485
                </a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:jyabaddonpco@gmail.com">
                  jyabaddonpco@gmail.com
                </a>
              </p>
            </div>
            <div className="contact__social-links">
              <h4>🌐 Follow Us</h4>
              <a
                href="https://www.facebook.com/profile.php?id=100063857540013"
                target="_blank"
                rel="noopener noreferrer"
              >
                📘 Facebook (583+ Followers)
              </a>
              <a
                href="https://tiktok.com/@abaddon_2020"
                target="_blank"
                rel="noopener noreferrer"
              >
                🎵 TikTok @abaddon_2020
              </a>
            </div>
            <div className="contact__service-areas">
              <h4>🗺️ Service Areas</h4>
              <p>
                <strong>Primary:</strong> Salitran, Dasmariñas, Cavite
              </p>
              <p>
                <strong>Metro Manila:</strong> Muntinlupa, Parañaque, Las Piñas
              </p>
              <p>
                <strong>Coverage:</strong> Residential & Commercial
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
