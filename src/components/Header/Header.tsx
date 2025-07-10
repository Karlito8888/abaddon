import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo/abaddon-logo.png";

export interface NavLink {
  name: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { name: "Home", href: "#hero" },
  { name: "Services", href: "#services" },
  { name: "About Us", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header__container">
        <a href="#hero">
          <img
            src={logo}
            alt="Abaddon Pest Control Logo"
            className="header__logo"
          />
        </a>

        <nav
          className={`header__nav ${
            isMobileMenuOpen ? "header__nav--open" : ""
          }`}
        >
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-primary header__cta--mobile">
            FREE Inspection
          </a>
        </nav>

        <a href="#contact" className="btn btn-primary header__cta--desktop">
          FREE Inspection
        </a>

        <button className="header__hamburger" onClick={toggleMobileMenu}>
          <span className="header__hamburger-line"></span>
          <span className="header__hamburger-line"></span>
          <span className="header__hamburger-line"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
