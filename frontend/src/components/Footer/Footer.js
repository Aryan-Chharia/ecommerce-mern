import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaGoogle, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon-link"><FaFacebookF /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon-link"><FaInstagram /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon-link"><FaTwitter /></a>
                <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="icon-link"><FaGoogle /></a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="icon-link"><FaYoutube /></a>
            </div>
            <div className="footer-links">
                <Link to="/">Home</Link>
                <Link to="/news">News</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/team">Our Team</Link>
            </div>
            <div className="copyright">
                <p>&copy; {currentYear} NGO Website. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;