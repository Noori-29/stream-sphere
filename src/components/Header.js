import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">Stream Sphere</div>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
        <div className="search-button">
          <button>
            <img src="/path/to/search-icon.svg" alt="search" className="search-icon" />
          </button>
        </div>
        <div className="action-buttons">
          <button>Sign In</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
