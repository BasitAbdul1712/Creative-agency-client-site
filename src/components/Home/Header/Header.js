import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
// import Logos from '../Logos/Logos';
import './Header.css'
const Header = () => {
    return (
        <div className = "header-container header-bg">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            
        </div>
    );
};

export default Header;