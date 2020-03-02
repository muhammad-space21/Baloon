import React from 'react';

import './footer.styles.scss';

import { Container, Row, Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import FormMessage from '../form-message/form-message';




class Footer extends React.Component {
    render () {
        return(
            <div className='footer'>
                <Container>
                    <Row>
                        <Col xl lg md={3} sm xs={6} xl lg md={{order: 1}} sm xs={{order: 3}}>
                            <h1>ADDRESS</h1>
                            <h4 className='custom'>123 Ocean Avenue</h4>
                            <h4>New York City  USA</h4>
                        </Col>
                        <Col xl lg md={3} sm xs={6} xl lg md={{order: 2}} sm xs={{order: 3}}>
                            <h1>LINKS</h1>
                            <div className="links">
                                <Link to ='/order-page' className='custom h4'> Order Table </Link>
                                <Link to ='/article-car-page' className='h4'> Article car </Link>
                                <Link to ='/article-truck-page' className='h4'> Article truck </Link>
                                <Link to ='/' className='h4'> Contact us </Link>
                                <Link to ='/' className='h4'> Location </Link>
                            </div>
                        </Col>
                        <Col xl lg md={4} sm xs={6} xl lg md={{order: 3}} sm xs={{order: 1}}>
                            <FormMessage />
                        </Col>
                    </Row>
                    <h6>Copyright © 1998-2020 Focus Technology Co., Ltd. All Rights Reserved.</h6>
                </Container>
            </div>
        );
    };
};

export default Footer; 