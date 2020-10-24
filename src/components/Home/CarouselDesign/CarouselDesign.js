import React from 'react';
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png'
import carousel3 from '../../../images/carousel-3.png'
import carousel4 from '../../../images/carousel-4.png'
import AwesomeSlider from 'react-awesome-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import 'react-awesome-slider/dist/styles.css'
import 'react-awesome-slider/dist/custom-animations/cube-animation.css'

const CarouselDesign = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
        return (
           
                <div style={{backgroundColor: '#111430'}} className="container-fluid py-5 my-5">
            
                    <h1 className='font-weight-bolder text-center text-light'>Here are some of<span style={{ color: '#7AB259' }}> our works </span></h1>
                    <div className="row w-50 mx-auto my-5">
                        <AutoplaySlider 
                            className='slider-style'
                            animation="cubeAnimation"
                            play={true}
                            cancelOnInteraction={false}
                            interval={2000}
                        >
                            <div data-src={carousel1} />
                            <div data-src={carousel3} />
                            <div data-src={carousel4} />
                            <div data-src={carousel2} />
                        </AutoplaySlider>
                    </div>
               
            </div>

          
             );
};

export default CarouselDesign;