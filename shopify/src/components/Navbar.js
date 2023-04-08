import React, { useState } from 'react';
import '../assets/Navbar.css';
import { Link } from 'react-scroll';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';


const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSetActive = (section) => {
    if (section) {
      setSticky(true);
    }
  };

  const handleSetInactive = (section) => {
    if (section === 'home') {
      setSticky(false);
    }
  };

  const handleMenuClick = () => {
    setOpen(!open);
  };

    return (
    <nav className={`navbar${sticky ? ' navbar--sticky' : ''}`}>
          <div className="navbar__logo">
            <h2>My Navbar</h2>
          </div>
          <div className="navbar__social">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
            </a>
            </div>
          <ul className="navbar__links">
            <li>
            <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                onSetActive={handleSetActive}
                onSetInactive={handleSetInactive}
                >
                Home
                </Link>
            </li>
            <li>
            <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={handleSetActive}
                onSetInactive={handleSetInactive}
                >
                about us
                </Link>
            </li>
            <li>
            <Link
                activeClass="active"
                to="team"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={handleSetActive}
                onSetInactive={handleSetInactive}
                >
                Team
                </Link>
            </li>
            <li>
            <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={handleSetActive}
                onSetInactive={handleSetInactive}
                >
                Our Services 
                </Link>
            </li>
            <li>
            <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={handleSetActive}
                onSetInactive={handleSetInactive}
                >
                Contact us
                </Link>
            </li>
          </ul>
        </nav>
      );
    };
    
    export default Navbar;