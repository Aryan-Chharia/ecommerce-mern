import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    NGO Website
                </Link>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/donate" className="nav-link">Donate</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-button">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;