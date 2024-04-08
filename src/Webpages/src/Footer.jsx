/*Ticket 2*/
import React from 'react';
import './asset.css';
import KYPerLogo from './KYPer Logo.png';

function Footer() {
  return (
    <footer className="footer">
      <img className="logo" src= { KYPerLogo }/>
      <p className="copyright">Group N &copy; 2024, All Right Reserved</p>
    </footer>
  );
}

export default Footer;