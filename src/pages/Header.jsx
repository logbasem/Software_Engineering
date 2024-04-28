/*Ticket 2*/
import "../css-html/index.css";
import React, { useState } from 'react';
import '../css-html/asset.css';
import KYPerLogo from '../assets/KYPer Logo.png';

function Header() {

  const [showDropdown, setShowDropdown] = useState(false);

  const handleToggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const [showUserProfile, setShowUserProfile] = useState(false);

  const handleUserLogin = () => {
    setShowUserProfile(!showUserProfile);
  }

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    // Redirect to /search-results
    window.location.href = `/search-results`;
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <header className="header">
      <img src={KYPerLogo} alt="KYPer Logo" className="logo"/>
      <nav className="nav">
        <ul className={`nav-list ${showDropdown ? 'show' : 'hide'}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/grocery-list">Lists</a></li>
          <li>
            <form className="search-bar" onSubmit={handleSearch}>
              <input className="search" type="search" placeholder="Search" value={searchQuery} onChanges={handleChange}/>
              <button type='submit'>&#x1F50E;</button>
            </form>
          </li>
          <li>
            <div className={`user-section ${showUserProfile ? 'show' : 'hide'}`}>
              <button type='button' className="login-button" onClick={() => window.location.href = "/login"}>Login</button>
              <button type='button' className="profile-button" onClick={() => window.location.href = "/profile"}>Profile</button>
            </div>
          </li>
        </ul>
        <div className="profile-toggle" onClick={handleUserLogin}>
          &#x1F464;
        </div>
        <div className="dropdown-toggle" onClick={handleToggleDropdown}>
          &#9776;
        </div>
      </nav>
    </header>
  );
}

export default Header;