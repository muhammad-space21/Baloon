import React from 'react';

import  './article-cards.styles.scss';

import { Container, Row, Col } from 'react-bootstrap';

import { Link, useRouteMatch } from 'react-router-dom';

import carImage from '../../Assets/images/Capture1.JPG';
import truckImage from '../../Assets/images/Capture2.JPG';


class ArticleCards extends React.Component {



    render() {
        return (
            <div className='article-cards'>
                <Container fluid='true' >
                    <Row>
                        <Col>
                            <div className='card-body-one'>
                                <img className='car-image'  src={carImage} onClick={ this.handleClick} alt="car" />
                                <p className='title'>
                                    PASSENGER CAR 
                                    <br/>
                                    <span>TYRES</span> 
                                </p>
                            </div>
                        </Col>
                        <Col>
                            <div className='card-body-two'>
                                <img className='truck-image' src={truckImage} onClick={this.handleChange} alt="truck"  />
                                <p className='title'>
                                    TRUCK / BUS
                                    <br/>
                                    <span>TYRES</span> 
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    };
};

export default ArticleCards;