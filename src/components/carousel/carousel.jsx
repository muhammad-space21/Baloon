import React from 'react';

import './carousel.styles.scss';

import { Carousel } from 'react-bootstrap';
import carOne from '../../Assets/images/main-page-hummer.cropped.img.png';
import carTwo from '../../Assets/images/main-page-truck.img.png';
import carThree from '../../Assets/images/main-page-yellow.img.png';


const CarouselMain = () => (
    <>
        <Carousel className ='carousel'>
            <Carousel.Item>
                <div className='image-holder-1'>
                    <img
                    className="d-block img1"
                    src={carOne}
                    alt="First slide"
                    />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='image-holder-2'>
                    <img
                    className="d-block img2"
                    src={carTwo}
                    alt="Second slide"
                    />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='image-holder-3'>
                    <img
                    className="d-block img3"
                    src={carThree}
                    alt="Third slide"
                    />
                </div>
            
            </Carousel.Item>
        </Carousel>
    </>
);

export default CarouselMain;