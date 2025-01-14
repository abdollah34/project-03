import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; // Assuming you have a CSS file for navigation styles

const Navigation = () => {
    return (
        <nav className="navigation">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/destinations">Destinations</Link></li>
                <li><Link to="/packages">Packages</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;