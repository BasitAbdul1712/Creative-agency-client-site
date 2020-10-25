import React from 'react';
import webAndMob from '../../../images/icons/service1.png';
import graphics from '../../../images/icons/service2.png';
import webDev from '../../../images/icons/service3.png'
import ServiceDetails from './ServiceDetails';


const Services = () => {
    const services = [
        {
            icon: webAndMob,
            title: 'Web & Mobile design',
            description: 'We craft stunning and amazing web UI using a well drafted UX to fit your product',
            background: 'primary'
        },
        {
            icon: graphics,
            title: 'Graphics design',
            description: 'Amazing flyers, social media posts and brand presentations that would make your brand stand out- ',
            background: 'dark'
        },
        {
            icon: webDev,
            title: 'Web Development',
            description: 'With well written codes, we build amazing apps far all plattorms, mobile and web apps in general',
            background: 'primary'
        }
    ]
    return (
        <main className="service-container mt-5">
             <div className="text-center">
                <h1>Provide awesome <span style = {{color: '#4CAF50'}}>services</span> </h1>
            </div>
           <div className="d-flex justify-content-center">
            <div className = " w-75 mt-5 row">
                {
                    services.map(service =><ServiceDetails service ={service} ></ServiceDetails>)
                }
                </div>
           </div>
        </main>
    );
};

export default Services;