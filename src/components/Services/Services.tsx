import React from "react";
import "./Services.css";

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
    icon: "../../assets/icons/termite.svg",
  },
  {
    title: "Cockroach Extermination",
    description:
      "Professional cockroach control for German, American, and Oriental species. IPM approach with targeted treatments for residential and commercial properties in Metro Manila.",
    icon: "../../assets/icons/cockroach.svg",
  },
  {
    title: "Ant Control Services",
    description:
      "Specialized ant control for fire ants, carpenter ants, and pharaoh ants. Effective solutions for ant infestations in Dasmariñas, Muntinlupa, and Parañaque areas.",
    icon: "../../assets/icons/ant.svg",
  },
  {
    title: "Rodent Control & Prevention",
    description:
      "Humane rodent control for house rats and field mice. Complete rodent management including exclusion, trapping, and prevention for homes and businesses.",
    icon: "../../assets/icons/rodent.svg",
  },
  {
    title: "Mosquito Control",
    description:
      "Year-round mosquito control services to protect against dengue and malaria vectors. Essential for Philippine tropical climate with targeted treatments and prevention.",
    icon: "../../assets/icons/mosquito.svg", // À créer
  },
];

const Services = () => {
  return (
    <section id="services" className="services section">
      <div className="container">
        <h2 className="section-title text-center">
          Professional Pest Control Services in Cavite & Metro Manila
        </h2>
        <p className="services__intro text-center">
          FDA-licensed pest control operator (PCO) specializing in Integrated
          Pest Management (IPM). Serving Dasmariñas, Muntinlupa, Parañaque with
          comprehensive pest solutions.
        </p>
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
        <div className="services__guarantee text-center">
          <p>
            <strong>✓ FDA Licensed PCO</strong> |{" "}
            <strong>✓ Free Inspection</strong> |{" "}
            <strong>✓ IPM Certified</strong> |{" "}
            <strong>✓ 583+ Satisfied Customers</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
