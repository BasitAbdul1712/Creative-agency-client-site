import React from 'react';
import slack from '../../../images/logos/slack.png'
import google from '../../../images/logos/google.png'
import uber from '../../../images/logos/uber.png'
import netflix from '../../../images/logos/netflix.png'
import airbnb from '../../../images/logos/airbnb.png'
import LogoImg from './LogoImg';

const logos = [
    {
        img: slack,
        class: 'small'
    },
    {
        img: google,
        class: 'small'
    },
    {
        img: uber,
        class: 'large'
    },
    {
        img: netflix,
        class: 'large'
    },
    {
        img: airbnb,
        class: 'small'
    }
]

const Logos = () => {
    return (
        <section className="d-flex justify-content-center">
        <div className=" mt-5 row">
            {
                logos.map(logo => <LogoImg logo={logo} key={logo.img}></LogoImg>)
            }
        </div>
    </section>
    );
};

export default Logos;