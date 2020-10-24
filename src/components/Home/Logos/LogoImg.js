import React from 'react';
import './LogoImg.css'

const LogoImg = ({logo}) => {
    
    return (
        <div className = "col-md-2 col-sm-4 col-xs-12">
            <img className={`ml-5 logo-${logo.class}`}  src={logo.img} alt=""/>
        </div>
    );
};

export default LogoImg;