/*Ticket 2*/
import React from 'react';
import '../css-html/asset.css';
import KYPerLogo from '../assets/KYPer Logo.png';

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
          <button type='button' onClick={() => window.location.href = "/login"}>Login</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;