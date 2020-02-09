import React from 'react';

import './marketing-page.styles.scss';

import { Container, Row, Col } from 'react-bootstrap';

import shipping from '../../Assets/Icons/shipped.png';
import exchange from '../../Assets/Icons/back-arrow.png';
import safe from '../../Assets/Icons/safe.png';


const MarketingPage = () => (
    <div className='marketing-page'>
        <Container>
            <Row>
                <Col>
                    <div className='card-one'>
                        <img className='shipping-card' src={shipping} alt="shipping-card" />
                        <p>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit</p>
                    </div>
                </Col>
                <Col>
                    <div className='card-two'>
                        <img className='exchange-card' src={exchange} alt="exchange-card" />
                        <p className='p2'>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit</p>
                    </div>
                </Col>
                <Col>
                    <div className='card-three'>
                        <img className='safe' src={safe} alt="safe-card" />
                        <p className='p2'>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
);

export default MarketingPage;