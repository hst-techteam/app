import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__links">
          <Link to="/privacy-policy" className="footer__link">Privacy Policy</Link>
          <Link to="/terms-conditions" className="footer__link">Terms & Conditions</Link>
        </div>
        <div className="footer__copyright">
          © {currentYear} Adinath. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;