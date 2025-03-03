import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="layout__main">
        <div className="layout__container">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;