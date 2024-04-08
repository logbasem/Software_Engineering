import React from 'react';
import './asset.css';
import KYPerLogo from './KYPer Logo.png'; // Import the PNG image

function Header() {
  return (
    <header className="header">
      <img src={KYPerLogo} alt="KYPer Logo" className="logo"/>
      <nav className="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/grocery-list">Grocery List</a></li>
        </ul>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
        <div className="user-section">
          <button>Login</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;