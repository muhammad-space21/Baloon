import React from 'react';

import './carousel.styles.scss';

import { Carousel } from 'react-bootstrap';
import carOne from '../../Assets/images/main-page-hummer.img.png';
import carTwo from '../../Assets/images/main-page-truck.img.png';
import carThree from '../../Assets/images/main-page-yellow.img.png';


const CarouselMain = () => (
    <>
        <Carousel className ='carousel'>
            <Carousel.Item>
                <img
                className="d-block img1"
                src={carOne}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block img2"
                src={carTwo}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block img3"
                src={carThree}
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    </>
);

export default CarouselMain;