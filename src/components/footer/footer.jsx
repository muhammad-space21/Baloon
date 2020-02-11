import React from 'react';

import './footer.styles.scss';

import { Container, Row, Col, Form } from 'react-bootstrap';
import ButtonFormBack from '../button-form-back/button-form-back';

import telegramIcon from '../../Assets/Icons/telegram.png';
import instagramIcon from '../../Assets/Icons/instagram.png';
import facebookIcon from '../../Assets/Icons/facebook.png';
import skypeIcon  from '../../Assets/Icons/skype.png';


class Footer extends React.Component {
    render () {
        return(
            <div className='footer'>
                <Container>
                    <Row>
                        <Col lg={3} >
                        <h1>ADDRESS</h1>
                        <h4 className='custom'>123 Ocean Avenue</h4>
                        <h4>New York City  USA</h4>
                        </Col>
                        <Col lg={3}>
                        <h1>LINKS</h1>
                        <h4 className='custom'>Order Table</h4>
                        <h4>Article</h4>
                        <h4>Contact us</h4>
                        <h4>Location</h4>
                        </Col>
                        <Col lg={4}>
                            <Form className='form'>
                                <Form.Group controlId="formBasicEmail" >
                                    <Form.Control className='email' type="email" placeholder="Email" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Control as="textarea" rows="2" className='textarea' placeholder="Message..." />
                                </Form.Group>
                            </Form>
                                <ButtonFormBack  className='button-custom'/>
        
                        </Col>
                        <Col lg={2}>
                        <div className='social-icons'>
                                <img className='telegram' src={telegramIcon} alt="telegramIcon"/>         
                                <img src={instagramIcon} alt="instagramIcon"/>                    
                                <img src={facebookIcon} alt="facebookIcon"/>                    
                                <img src={skypeIcon} alt="skypeIcon"/>                    
                            </div>
                        </Col>
                    </Row>
                    <h6>Copyright © 1998-2020 Focus Technology Co., Ltd. All Rights Reserved.</h6>
                </Container>
            </div>
        );
    };
};

export default Footer; 