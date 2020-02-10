import React from 'react';

import './about-us.styles.scss';

import { Container, Row, Col } from 'react-bootstrap';

import imageFirst from '../../Assets/images/about-us-page.img-1.jpg';
import imageSecond from '../../Assets/images/about-us-page.img-2.jpg';

const AboutUsSection = () => (
    <div className='about-us'>
        <Container>
            <Row>
                <Col>
                    <div className='image-one-container'>
                        <img className='image-first' src={imageFirst} alt="About us image"/>
                    </div>
                </Col>
                <Col>
                <p className='p1'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Sed risus pretium quam 
                    vulputate. Leo urna molestie at elementum eu 
                    facilisis sed. At lectus urna duis convallis convallis. 
                    Faucibus ornare suspendisse sed nisi lacus sed 
                    viverra tellus in. In nibh mauris cursus mattis. 
                    </p>
                </Col>
            </Row>
            <Row>
            <Col>
                <p className='p2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Sed risus pretium quam 
                    vulputate. Leo urna molestie at elementum eu 
                    facilisis sed. At lectus urna duis convallis convallis. 
                    Faucibus ornare suspendisse sed nisi lacus sed 
                    viverra tellus in. In nibh mauris cursus mattis. 
                </p>
                </Col>
                <Col>
                    <div className='image-two-container'>
                        <img className='image-second'  src={imageSecond} alt="About us image"/>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
);

export default AboutUsSection;