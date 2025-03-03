import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to="/" className="header__logo-link">
           Adinath Tech
          </Link>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <Link to="/" className="header__nav-link">Home</Link>
            </li>
            <li className="header__nav-item">
              <Link to="/privacy-policy" className="header__nav-link">Privacy Policy</Link>
            </li>
            <li className="header__nav-item">
              <Link to="/terms-conditions" className="header__nav-link">Terms & Conditions</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;