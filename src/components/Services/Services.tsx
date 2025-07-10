import React from "react";
import "./Services.css";

// Import des icônes SVG
import termiteIcon from "../../assets/icons/termite.svg";
import cockroachIcon from "../../assets/icons/cockroach.svg";
import antIcon from "../../assets/icons/ant.svg";
import rodentIcon from "../../assets/icons/rodent.svg";
import flyingInsectsIcon from "../../assets/icons/flying-insects.svg";
import bedBugsIcon from "../../assets/icons/bed-bugs.svg";
import fleaTickIcon from "../../assets/icons/flea-tick.svg";
import disinfectionIcon from "../../assets/icons/disinfection.svg";

export interface Service {
  title: string;
  description: string;
  icon: string; // Path to the icon/image
}

export const services: Service[] = [
  {
    title: "Termite Control & Treatment",
    description:
      "FDA-licensed termite control specialists. Pre-construction & post-construction treatment, termite baiting systems, and comprehensive inspections. Protecting Cavite homes from subterranean termites.",
    icon: termiteIcon,
  },
  {
    title: "Cockroach Control",
    description:
      "Professional cockroach control for German, American, and Oriental species. IPM approach with targeted treatments for residential and commercial properties in Metro Manila.",
    icon: cockroachIcon,
  },
  {
    title: "Ants Control",
    description:
      "Specialized ant control for fire ants, carpenter ants, and pharaoh ants. Effective solutions for ant infestations in Dasmariñas, Muntinlupa, and Parañaque areas.",
    icon: antIcon,
  },
  {
    title: "Rats & Rodents Control",
    description:
      "Humane rodent control for house rats and field mice. Complete rodent management including exclusion, trapping, and prevention for homes and businesses.",
    icon: rodentIcon,
  },
  {
    title: "Flying Insects Control",
    description:
      "Comprehensive control for flies, mosquitoes, and bees. Year-round mosquito protection against dengue vectors, fly control for restaurants and homes, plus safe bee removal services.",
    icon: flyingInsectsIcon,
  },
  {
    title: "Bed Bugs Control",
    description:
      "Specialized bed bug extermination using heat treatment and targeted pesticides. Complete elimination of bed bug infestations in homes, hotels, and dormitories.",
    icon: bedBugsIcon,
  },
  {
    title: "Flea & Tick Control",
    description:
      "Pet-safe flea and tick control services. Comprehensive treatment for homes with pets, including yard treatments and indoor pest elimination.",
    icon: fleaTickIcon,
  },
  {
    title: "Disinfection Services",
    description:
      "Professional disinfection and sanitization services. General sanitization for homes, offices, and commercial establishments.",
    icon: disinfectionIcon,
  },
];

const Services = () => {
  return (
    <section id="services" className="services section">
      <div className="container">
        <h2 className="section-title text-center">
          Our Services
        </h2>
        {/* <p className="services__intro">
          FDA-licensed pest control operator (PCO) specializing in Integrated
          Pest Management (IPM).
          <br />
          Serving Dasmariñas, Muntinlupa, Parañaque with comprehensive pest
          solutions.
        </p> */}
        <div className="services__grid">
          {services.map((service, index) => (
            <div className="services__card" key={index}>
              <img
                src={service.icon}
                alt={`${service.title} icon`}
                className="services__card-icon"
              />
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-description">
                {service.description}
              </p>
              <div className="services__card-cta">
                <a href="#contact" className="btn btn-outline">
                  Get Free Quote
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="services__guarantee text-center">
          <p>
            <strong>✓ FDA Licensed PCO</strong> |{" "}
            <strong>✓ Free Inspection</strong> |{" "}
            <strong>✓ IPM Certified</strong> |{" "}
            <strong>✓ 583+ Satisfied Customers</strong>
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Services;
