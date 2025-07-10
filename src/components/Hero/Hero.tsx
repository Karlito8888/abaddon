import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero__overlay"></div>
      <div className="container hero__content">
        <h1 className="hero__title">
          FDA-Licensed Pest Control Services Dasmariñas, Cavite
        </h1>
        <p className="hero__subtitle">
          Professional termite control, cockroach extermination, ant & rodent
          control in Metro Manila. Integrated Pest Management (IPM) approach
          with <strong>FREE INSPECTION</strong>. Licensed PCO serving
          Dasmariñas, Muntinlupa, Parañaque since 2020.
        </p>
        <div className="hero__cta-group">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
