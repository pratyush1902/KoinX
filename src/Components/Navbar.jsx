import React, { useState } from 'react';
import logo from '../Assets/logo.png';
 

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <div className={`navbar ${isOpen ? 'open' : ''}`}>
                <div className="nav_logo">
                    <img src={logo} alt="logo" height='100px' width='96px' />
                </div>
                <div className={`navbar_links ${isOpen ? 'open' : ''}`}>
                    <ul>
                        <li>Crypto Taxes</li>
                        <li>Free Tools</li>
                        <li>Resource Center</li>
                    </ul>
                    <button className='nav_button'>Get Started</button>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
