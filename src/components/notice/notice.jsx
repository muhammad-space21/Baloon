import React from 'react';

import './notice.styles.scss';

import { Container } from 'react-bootstrap';


const Notice  = () => (
    <Container>
        <div className="notice">
            <h1><span>#</span> Please select the appropriate size and the brand of a tire in order to make an order request</h1>
        </div>
    </Container>

);

export default Notice;