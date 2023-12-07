
import React from 'react';
import './footer.css'; // Import the CSS file
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className='inner-container'>
      <div className="footer-section">
          <h4>Company Name</h4>
          <ul>
            <li><a href="#">MDBootstrap</a></li>
            <li><a href="#">MDWordPress</a></li>
            <li><a href="#">BrandFlow</a></li>
            <li><a href="#">Bootstrap Angular</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Products</h4>
          <ul>
            <li><a href="#">MDBootstrap</a></li>
            <li><a href="#">MDWordPress</a></li>
            <li><a href="#">BrandFlow</a></li>
            <li><a href="#">Bootstrap Angular</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="#">Your Account</a></li>
            <li><a href="#">Become an Affiliate</a></li>
            <li><a href="#">Shipping Rates</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p><i className="fas fa-home"></i> New York, NY 10012, US</p>
          <p><i className="fas fa-envelope"></i> info@example.com</p>
          <p><i className="fas fa-phone"></i> + 01 234 567 88</p>
          <p><i className="fas fa-print"></i> + 01 234 567 89</p>
        </div>
        </div>
        
      <div className='outer-container'>
      <div className='icon-container'>
        <ul>
            <li><a href="#"><FaFacebookSquare style={{ fontSize: '24px' }}/></a></li>
            <li><a href="#"> <FaInstagramSquare style={{ fontSize: '24px' }}/></a></li>
            <li><a href="#"><FaGoogle style={{ fontSize: '24px' }}/></a></li>
            <li><a href="#"><FaLinkedin style={{ fontSize: '24px' }}/></a></li>
            <li><a href="#"> <FaTwitterSquare style={{ fontSize: '24px' }}/></a></li>
          </ul>
      </div>
      </ div>
    </footer>
  );
}

export default Footer;