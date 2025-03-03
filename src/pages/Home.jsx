// pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1 className="home__title">Welcome to Adinath</h1>
      <section className="home__hero">
        <div className="home__hero-content">
          <h2 className="home__hero-title">Advanced Anti-Counterfeiting Solutions</h2>
          <p className="home__hero-text">
            Protect your brand with cutting-edge authentication technology. Our solutions help businesses combat 
            counterfeiting and safeguard product integrity across global markets.
          </p>
          <Link to="/contact" className="home__cta-button">Get Started</Link>
        </div>
      </section>
      
      <section className="home__section">
        <h2 className="home__section-title">Trusted by Brands Worldwide</h2>
        <p className="home__section-text">
          Adinath provides state-of-the-art authentication and anti-counterfeiting solutions for legitimate 
          brands and businesses. Our technology enables consumers to verify product authenticity, 
          protecting both brands and consumers from counterfeit goods.
        </p>
      </section>
      
      <section className="home__section">
        <h2 className="home__section-title">Our Services</h2>
        <div className="home__services">
          <div className="home__service">
            <h3 className="home__service-title">Product Authentication</h3>
            <p className="home__service-text">
              Implement secure verification codes, QR solutions, and NFC technology to allow customers to 
              instantly verify product authenticity using their smartphones.
            </p>
          </div>
          <div className="home__service">
            <h3 className="home__service-title">Anti-Counterfeiting Technology</h3>
            <p className="home__service-text">
              Deploy tamper-evident labels, secure packaging solutions, and digital authentication methods to 
              protect your products from counterfeiters and ensure consumer confidence.
            </p>
          </div>
          <div className="home__service">
            <h3 className="home__service-title">Brand Protection</h3>
            <p className="home__service-text">
              Comprehensive monitoring and alert systems help identify potential counterfeit activities in the 
              market, allowing for swift response and protection of brand integrity.
            </p>
          </div>
        </div>
      </section>
      
      <section className="home__how-it-works">
        <h2 className="home__section-title">How It Works</h2>
        <div className="home__steps">
          <div className="home__step">
            <div className="home__step-number">1</div>
            <h3 className="home__step-title">Integration</h3>
            <p className="home__step-text">
              We integrate our authentication technology into your product packaging or labels.
            </p>
          </div>
          <div className="home__step">
            <div className="home__step-number">2</div>
            <h3 className="home__step-title">Verification</h3>
            <p className="home__step-text">
              Consumers scan the code or tag using their smartphones to verify authenticity.
            </p>
          </div>
          <div className="home__step">
            <div className="home__step-number">3</div>
            <h3 className="home__step-title">Data & Insights</h3>
            <p className="home__step-text">
              You receive valuable data on product verification and potential counterfeiting incidents.
            </p>
          </div>
        </div>
      </section>
      
      <section className="home__cta">
        <h2 className="home__cta-title">Ready to Protect Your Brand?</h2>
        <p className="home__cta-text">
          Join the leading brands that trust Adinath for their anti-counterfeiting and authentication needs.
        </p>
        <Link to="/contact" className="home__cta-button">Request a Demo</Link>
      </section>
    </div>
  );
};

export default Home;