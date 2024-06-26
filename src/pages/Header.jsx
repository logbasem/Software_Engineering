/*Ticket 2*/
import "../css-html/index.css";
import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import '../css-html/asset.css';
import KYPerLogo from '../assets/KYPer Logo.png';

function Header() {
  const navigate = useNavigate();

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
    //Ticket #66
    // Fetch search results from backend using searchAllProducts route (unfinished)
    fetch(`http://localhost:3001/products/searchAllProducts?searchTerm=${searchQuery}&page=${1}&pageSize=${3}`)
      .then((res) => {
        if(!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then((data) => {
        // Generate search results
        //push to search results
        navigate(`/search-results`, {
          state: data
        });
        //redirect to search results page
        //TODO: When backend connection works, this should be a good baseline for passing search results to the search results page
        //window.location.href = '/search-results?results=' + encodeURIComponent(JSON.stringify(searchResults));
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    //...for now, we go straight to the search results page no matter what
    // window.location.href = '/search-results';
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
              <input className="search" type="search" placeholder="Search" value={searchQuery} onChange={handleChange}/>
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