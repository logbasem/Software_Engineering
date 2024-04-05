import React from 'react';
import './asset.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Your Logo</div>
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