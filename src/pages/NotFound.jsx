import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <h2 className="not-found__subtitle">Page Not Found</h2>
      <p className="not-found__text">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link to="/" className="not-found__link">
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;