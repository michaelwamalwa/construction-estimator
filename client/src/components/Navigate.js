import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navigate.css";

export default function Navigate() {
    const [active, setActive] = useState("nav__menu");

    const navToggle = () => {
        setActive(active => active === "nav__menu" ? "nav__menu nav__active" : "nav__menu");
    };

    const linkStyle = {
        textDecoration: 'none', 
        color: 'white', 
        fontSize: '14px', 
        alignItems: 'center', 
        gap: '1.5rem'
    };

    return (
        <div className="page-container">
        <nav className="nav">
            <div style={linkStyle} className="brand">CONSTRUCTION GEEK</div>
            <ul className={active}>
                <li className="nav__item">
                    <Link style={linkStyle} to="/login">JOIN US</Link>
                </li>
                <li className="nav__item">
                    <Link style={linkStyle} to="/about">ABOUT US</Link>
                </li>
                <li className="nav__item">
                    <Link style={linkStyle} to="/contact">CONTACT US</Link>
                </li>
                <li className="nav__item">
                    <Link style={linkStyle} to="/services">OUR SERVICES</Link>
                </li>
                <li className="nav__item">
                    <Link style={linkStyle} to="/team">MEET THE TEAM</Link>
                </li>
            </ul>
            <button onClick={navToggle} className="nav-toggler" aria-label="Toggle navigation">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </button>
        </nav>
        </div>
    );
}
