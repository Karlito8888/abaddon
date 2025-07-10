import React from "react";
import "./Footer.css";
import { navLinks } from "../Header/Header";

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
              <li>Cockroach Extermination</li>
              <li>Ant Control Services</li>
              <li>Rodent Control & Prevention</li>
              <li>Mosquito Control</li>
              <li>FREE Pest Inspection</li>
            </ul>
          </div>
          <div className="footer__col">
            <h3 className="footer__col-title">Contact & Service Areas</h3>
            <p>
              <strong>Business Address:</strong>
            </p>
            <p>Garden Grove Village, Salitran</p>
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
              <a href="mailto:jyabaddonpco@gmail.com">jyabaddonpco@gmail.com</a>
            </p>
            <p>
              <strong>Service Areas:</strong> Salitran, Dasmariñas, Muntinlupa,
              Parañaque
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
              <a
                href="https://wa.me/639175842100"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 WhatsApp Business
              </a>
              <a
                href="viber://chat?number=639175842100"
                target="_blank"
                rel="noopener noreferrer"
              >
                📞 Viber
              </a>
            </div>
            <div className="footer__credentials">
              <p>✓ FDA Licensed PCO</p>
              <p>✓ IPM Certified</p>
              <p>✓ 583+ Happy Customers</p>
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
