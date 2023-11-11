// Header/Header.js
import React from 'react';
import './Header.css'; // Import the CSS file
import logoImage from '../../img/logo.png'; // Import the logo image

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logoImage} alt="Logo" className="logo" />
      </div>
    </header>
  );
};

export default Header;
