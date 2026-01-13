import React from "react";
import "./Hero.css";
import aLogo from "../../assets/logo/a-logo-opt.png";
import aLogoWebp from "../../assets/logo/a-logo-opt.webp";
import abaddonLogo from "../../assets/logo/abaddon-opt.png";
import abaddonLogoWebp from "../../assets/logo/abaddon-opt.webp";
import bLogo from "../../assets/logo/b-logo-opt.png";
import bLogoWebp from "../../assets/logo/b-logo-opt.webp";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero__overlay"></div>
      <div className="container hero__content">
        <h1 className="hero__title">Abaddon Pest Control Services Inc.</h1>

        {/* Séquence de logos animés */}
        <div className="hero__logo-sequence">
          <picture>
            <source srcSet={aLogoWebp} type="image/webp" />
            <img
              src={aLogo}
              alt="A"
              className="hero__logo-item hero__logo-item--1"
              width={429}
              height={115}
            />
          </picture>
          <picture>
            <source srcSet={abaddonLogoWebp} type="image/webp" />
            <img
              src={abaddonLogo}
              alt="Abaddon"
              className="hero__logo-item hero__logo-item--2"
              width={363}
              height={363}
              fetchPriority="high"
            />
          </picture>
          <picture>
            <source srcSet={bLogoWebp} type="image/webp" />
            <img
              src={bLogo}
              alt="B"
              className="hero__logo-item hero__logo-item--3"
              width={380}
              height={132}
            />
          </picture>
        </div>

        <div className="hero__subtitle">
          <ul className="hero__services-list">
            <li>✓ Professional termite control & treatment</li>
            <li>✓ Cockroach, ants, rats & rodents control</li>
            <li>✓ Flies, bees, mosquito & bed bugs control</li>
            <li>✓ Flea & tick control + disinfection services</li>
            <li>✓ Integrated Pest Management (IPM) approach</li>
            <li>
              ✓ <strong>1 FREE INSPECTION</strong>
            </li>
            <li>
              ✓ Licensed PCO serving Dasmariñas, Muntinlupa, Parañaque since
              2020
            </li>
          </ul>
        </div>
        {/* <div className="hero__cta-group">
          <a href="#contact" className="btn btn-primary">
            Get FREE Inspection
          </a>
          <a href="tel:+639175842100" className="btn btn-secondary">
            Call: +63 917 584 2100
          </a>
          <a href="tel:+639175090485" className="btn btn-secondary">
            Call: +63 917 509 0485
          </a>
        </div>
        <div className="hero__credentials">
          <span className="hero__badge">FDA Licensed PCO</span>
          <span className="hero__badge">583+ Happy Customers</span>
          <span className="hero__badge">IPM Certified</span>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
