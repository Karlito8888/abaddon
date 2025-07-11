import React from "react";
import "./Contact.css";

// Import social media icons
import whatsappIcon from "../../assets/images/whatsapp.png";
import viberIcon from "../../assets/images/viber.png";
import facebookIcon from "../../assets/images/facebook.png";
import tiktokIcon from "../../assets/images/tiktok.png";

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title text-center">Contact Us</h2>
        <p className="contact__intro text-center">
          Get your <strong>FREE pest inspection</strong> today !
          {/* <br /> We offer
          FDA-licensed pest control services in Dasmariñas, Cavite and Metro
          Manila.
          <br />
          Call, WhatsApp, or Viber us now. */}
        </p>
        <div className="contact__grid">
          <div className="contact__info">
            <h3>Contact Information</h3>
            {/* <div className="contact__business-info">
              <h4>🏢 Abaddon Pest Control Services Inc.</h4>
              <p>
                <strong>FDA License:</strong> CCHUHSRR-RIVA-PCO-01-ER-732510
              </p>
              <p>
                <strong>Classification:</strong> Commercial Application,
                Exterminator
              </p>
            </div> */}
            <div className="contact__address">
              <h4>📍 Business Address</h4>
              <p>
                <strong>Garden Grove Village, Salitran IV</strong>
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
                  className="contact__social-link"
                >
                  <img
                    src={whatsappIcon}
                    alt="WhatsApp"
                    className="contact__social-icon"
                  />
                  <span>+63 917 584 2100</span>
                </a>
              </p>
              <p>
                <strong>WhatsApp 2:</strong>{" "}
                <a
                  href="https://wa.me/639175090485"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link"
                >
                  <img
                    src={whatsappIcon}
                    alt="WhatsApp"
                    className="contact__social-icon"
                  />
                  <span>+63 917 509 0485</span>
                </a>
              </p>
              <p>
                <strong>Viber 1:</strong>{" "}
                <a
                  href="viber://chat?number=639175842100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link"
                >
                  <img
                    src={viberIcon}
                    alt="Viber"
                    className="contact__social-icon"
                  />
                  <span>+63 917 584 2100</span>
                </a>
              </p>
              <p>
                <strong>Viber 2:</strong>{" "}
                <a
                  href="viber://chat?number=639175090485"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link"
                >
                  <img
                    src={viberIcon}
                    alt="Viber"
                    className="contact__social-icon"
                  />
                  <span>+63 917 509 0485</span>
                </a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:abaddonpco@gmail.com">abaddonpco@gmail.com</a>
              </p>
            </div>
            <div className="contact__social-links">
              <h4>🌐 Follow Us</h4>
              <a
                href="https://www.facebook.com/profile.php?id=100063857540013"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social-link"
              >
                <img
                  src={facebookIcon}
                  alt="Facebook"
                  className="contact__social-icon"
                />
                <span>@Abaddon</span>
              </a>
              <a
                href="https://tiktok.com/@abaddon_2020"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social-link"
              >
                <img
                  src={tiktokIcon}
                  alt="TikTok"
                  className="contact__social-icon"
                />
                <span>@abaddon_2020</span>
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
