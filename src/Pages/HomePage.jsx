import React from 'react';
import Navbar from '../Components/Navbar.jsx';
import AboutUs from '../Components/AboutUs.jsx';
import Chief from '../Components/Chief.jsx';
import Gallery  from '../Components/Gallery.jsx';
import Footer  from '../Components/Footer.jsx';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <AboutUs />
            <Chief />
            <Gallery />
            <Footer />
        </div>
    );
};

export default HomePage;
