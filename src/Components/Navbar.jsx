import React from 'react';
import './Navbar.css';
import Army_Logo from '../Images/Army_Logo.png';
import Emblem from '../Images/Emblem.png';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="outer">
        <img src={Army_Logo} alt="Logo" />

        <a href="">Home</a>
        <a href="">About-us</a>
        <a href="">Leaders</a>
        <a href="">Honors & Awards</a>
        <a href="">Gallery</a>
        <a href="">Training</a>
        <a href="">Important Links</a>
        <a href="">Translation</a>

        <input type="text" name="search-bar" id="search-bar" placeholder='Search' />

        <img src={Emblem} alt="Emblem" />
      </div>
    </nav>
  );
};

export default Navbar;