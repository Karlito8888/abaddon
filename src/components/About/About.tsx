import React from "react";
import "./About.css";
import aboutImage from "../../assets/images/about-us.jpg";
import fdaImage from "../../assets/images/fda.png";

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about__grid">
          <div className="about__image">
            <img src={aboutImage} alt="Abaddon Pest Control team working" />
          </div>
          <div className="about__content">
            <h2 className="section-title">
              About Us
            </h2>
            <p style={{ marginBlock: "1rem" }}>
              <strong>Founded in Cavite</strong>, Abaddon
              Pest Control Services Inc. is a
              <strong> FDA-licensed Pest Control Operator (PCO)</strong>{" "}
              dedicated to protecting homes and businesses across Metro Manila.<br />
              Our mission is to deliver effective, reliable, and environmentally
              responsible pest management solutions using scientific approaches.
            </p>
            <p>
              We specialize in <strong>Integrated Pest Management (IPM)</strong>
              , a comprehensive approach that combines thorough inspections,
              targeted treatments, and preventative measures to ensure long-term
              pest control.<br />Our team of experienced technicians serves
              <strong> Dasmariñas, Muntinlupa, Parañaque</strong> and
              surrounding areas with the highest level of service and customer
              satisfaction.
            </p>
            {/* <div className="about__highlights">
              <div className="about__highlight">
                <h4>🏆 583+ Happy Customers</h4>
                <p>
                  Trusted by families and businesses across Cavite and Metro
                  Manila
                </p>
              </div>
              <div className="about__highlight">
                <h4>🔬 IPM Certified Approach</h4>
                <p>
                  Scientific, environmentally conscious pest management methods
                </p>
              </div>
              <div className="about__highlight">
                <h4>🆓 FREE Inspection</h4>
                <p>
                  Complimentary pest assessment and treatment recommendations
                </p>
              </div>
            </div> */}
            {/* <div className="about__service-areas">
              <h4>Service Areas:</h4>
              <p>
                <strong>Primary:</strong> Dasmariñas, Cavite
              </p>
              <p>
                <strong>Metro Manila:</strong> Muntinlupa City, Parañaque City,
                Las Piñas
              </p>
              <p>
                <strong>Coverage:</strong> Residential & Commercial Properties
              </p>
            </div> */}
            <div className="about__credentials">
              <span className="about__badge">FDA Licensed PCO</span>
              <span className="about__badge">
                License #: CCHUHSRR-RIVA-PCO-01-ER-732510.
              </span>
              <span className="about__badge"> Valid until Sept 2026</span>
            </div>
            <div className="about__fda-certification">
              <img
                src={fdaImage}
                alt="FDA Licensed Pest Control Operator Certificate"
                className="about__fda-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
