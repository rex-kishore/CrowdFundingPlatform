// src/components/Navbar.jsx
import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {

  // const navigate = useNavigate();

  // const handleGetStarted = (e) => {
  //   e.preventDefault();
  //   navigate("/signin");
  // };
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          FioraFund
        </a>
        <button className="navbar-toggle" onClick={toggleMenu}>
          <span className="navbar-toggle-icon">&#9776;</span>
        </button>
        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <a href="#" className="navbar-link">
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">
              About
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">
              Features
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">
              Contact
            </a>
          </li>
          <li className="navbar-item">
          <a href="#" className="navbar-link navbar-button" >
            Get Started
          </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
