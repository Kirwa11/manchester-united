import React from "react";
import { Link } from 'react-router-dom';
import manu from '../assets/manu.png'; // Ensure this image exists


const Navbar = () => (
    <nav className="navbar">
            <div className="navbar-logo-title">
                    <img src={manu} alt="Manchester United Logo" className="navbar-logo" />
                    <h2 className="navbar-title">Manchester United</h2>
            </div>
            <ul className="navbar-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/team">Team</Link></li>
                    <li><Link to="/fantasy">Fantasy</Link></li>
                    <li><Link to="/fixtures">Fixtures</Link></li>
                    <li><Link to="/news">News</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
            </ul>
    </nav>
);

export default Navbar;