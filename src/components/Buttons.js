import React from 'react';
import { Link } from 'react-router-dom';
import './Buttons.css';

const Buttons = () => {
    return (
        <div className="top-buttons">
            <Link to="/">Home</Link>
            <Link to="/certification">Certification</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
        </div>
    );
};

export default Buttons;
