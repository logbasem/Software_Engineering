/*Ticket 2*/
import React from 'react';
import '../css-html/asset.css';
import KYPerLogo from '../assets/KYPer Logo.png';

function Footer() {
  return (
    <footer className="footer">
      <img className="logo" src= { KYPerLogo } alt='KYPer Logo'/>
      <p className="copyright pt-3">Group N &copy; 2024, All Rights Reserved</p>
    </footer>
  );
}

export default Footer;