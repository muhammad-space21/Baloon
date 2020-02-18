import React from 'react';

import './footer.styles.scss';

import { Container, Row, Col, Form } from 'react-bootstrap';

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
                            <h4 className='custom'>Order Table</h4>
                            <h4>Article cars</h4>
                            <h4>Article truck</h4>
                            <h4>Contact us</h4>
                            <h4>Location</h4>
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