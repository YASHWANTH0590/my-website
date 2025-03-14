import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home, Award, Info, Folder, Mail } from "lucide-react"; // Navigation icons
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Social icons
import "./styles.css"; // Ensure this file exists

const Buttons = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".menu-container") && !event.target.closest(".menu-button")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* Toggle Button */}
      <button
        className="menu-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Menu Container */}
      <div className={`menu-container ${isOpen ? "open" : ""}`}>
        {/* Navigation Links */}
        <div className="menu-links">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <Home size={18} color="#00c6ff" style={{ marginRight: "10px" }} />
            Home
          </Link>
          <Link to="/certification" onClick={() => setIsOpen(false)}>
            <Award size={18} color="#00c6ff" style={{ marginRight: "10px" }} />
            Certification
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            <Info size={18} color="#00c6ff" style={{ marginRight: "10px" }} />
            About
          </Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}>
            <Folder size={18} color="#00c6ff" style={{ marginRight: "10px" }} />
            Projects
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            <Mail size={18} color="#00c6ff" style={{ marginRight: "10px" }} />
            Contact
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="menu-social-links">
          <a href="https://www.instagram.com/_yaswanth.05_?igsh=MXVwdHhqYmUzOWExaQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon instagram" />
          </a>
          <a href="https://github.com/YASHWANTH0590" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon github" />
          </a>
          <a href="https://www.linkedin.com/in/gsd-yaswanth" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon linkedin" />
          </a>
          <a href="mailto:ganugapatiyaswanth@gmail.com">
            <FaEnvelope className="social-icon email" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Buttons;
