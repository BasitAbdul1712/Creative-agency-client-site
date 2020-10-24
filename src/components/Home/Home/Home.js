import React from 'react';
import { Carousel } from 'react-bootstrap';
import CarouselDesign from '../CarouselDesign/CarouselDesign';
import FeedBack from '../FeedBack/FeedBack';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Logos from '../Logos/Logos';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Logos></Logos>
            <Services></Services>
            <CarouselDesign></CarouselDesign>
            <FeedBack></FeedBack>
            <Footer></Footer>
        </div>
    );
};

export default Home;