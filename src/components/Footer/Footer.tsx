import React from "react";
import "./Footer.css";
import { navLinks } from "../Header/Header";

// Import social media icons
import whatsappIcon from "../../assets/images/whatsapp.png";
import viberIcon from "../../assets/images/viber.png";
import facebookIcon from "../../assets/images/facebook.png";
import tiktokIcon from "../../assets/images/tiktok.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__col">
            <h3 className="footer__col-title">
              Abaddon Pest Control Services Inc.
            </h3>
            <p>
              <strong>FDA Licensed PCO</strong>
            </p>
            <p>License: CCHUHSRR-RIVA-PCO-01-ER-732510</p>
            <p>Specializing in Integrated Pest Management (IPM)</p>
            <p>Serving Cavite & Metro Manila since 2020</p>
            <ul className="footer__links">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__col">
            <h3 className="footer__col-title">Our Services</h3>
            <ul className="footer__services">
              <li>Termite Control & Treatment</li>
              <li>Cockroach Control</li>
              <li>Ants Control</li>
              <li>Rats & Rodents Control</li>
              <li>Flies Control</li>
              <li>Bees Control</li>
              <li>Mosquito Control</li>
              <li>Bed Bugs Control</li>
              <li>Flea & Tick Control</li>
              <li>Disinfection Services</li>
              <li>FREE Pest Inspection</li>
            </ul>
          </div>
          <div className="footer__col">
            <h3 className="footer__col-title">Contact & Service Areas</h3>
            <p>
              <strong>Business Address:</strong>
            </p>
            <p>Garden Grove Village, Salitran IV</p>
            <p>Dasmariñas, Cavite 4114</p>
            <p>
              <strong>Phone 1:</strong>{" "}
              <a href="tel:+639175842100">+63 917 584 2100</a>
            </p>
            <p>
              <strong>Phone 2:</strong>{" "}
              <a href="tel:+639175090485">+63 917 509 0485</a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:abaddonpco@gmail.com">abaddonpco@gmail.com</a>
            </p>
            <p>
              <strong>Service Areas:</strong> Salitran, Dasmariñas, Muntinlupa,
              Parañaque, Las Piñas
            </p>
            <p>
              <a
                href="https://www.google.com/maps?q=14.344438363320867,120.9524173725775"
                target="_blank"
                rel="noopener noreferrer"
              >
                📍 View on Maps
              </a>
            </p>
          </div>
          <div className="footer__col">
            <h3 className="footer__col-title">Connect With Us</h3>
            <div className="footer__social-links">
              <a
                href="https://www.facebook.com/profile.php?id=100063857540013"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
              >
                <img
                  src={facebookIcon}
                  alt="Facebook"
                  className="footer__social-icon"
                />
                <span>Facebook</span>
              </a>
              <a
                href="https://tiktok.com/@abaddon_2020"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
              >
                <img
                  src={tiktokIcon}
                  alt="TikTok"
                  className="footer__social-icon"
                />
                <span>TikTok</span>
              </a>
              <a
                href="https://wa.me/639175842100"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
              >
                <img
                  src={whatsappIcon}
                  alt="WhatsApp"
                  className="footer__social-icon"
                />
                <span>WhatsApp Business</span>
              </a>
              <a
                href="viber://chat?number=639175842100"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
              >
                <img
                  src={viberIcon}
                  alt="Viber"
                  className="footer__social-icon"
                />
                <span>Viber</span>
              </a>
            </div>
            <div className="footer__credentials">
              <p>✓ FDA Licensed PCO</p>
              <p>✓ IPM Certified</p>
              {/* <p>✓ 583+ Happy Customers</p> */}
              <p>✓ FREE Inspection</p>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom-content">
            <p>
              &copy; {new Date().getFullYear()} Abaddon Pest Control Services
              Inc. All Rights Reserved.
            </p>
            <p>
              FDA Licensed Pest Control Operator | License:
              CCHUHSRR-RIVA-PCO-01-ER-732510 | Serving Dasmariñas, Cavite &
              Metro Manila | Integrated Pest Management Specialists
            </p>
            <div className="footer__keywords">
              <span>Termite Control Cavite</span> •
              <span>Pest Control Dasmariñas</span> •
              <span>Exterminator Metro Manila</span> •
              <span>IPM Philippines</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
