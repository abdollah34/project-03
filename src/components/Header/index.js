import React from 'react';
import './Header.css'; // Assuming you have a Header.css for specific styles

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>Tourist Agency</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/destinations">Destinations</a></li>
                    <li><a href="/packages">Packages</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;