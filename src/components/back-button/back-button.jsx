import React from 'react';

import './back-button.styles.scss';

import { Button } from 'react-bootstrap';


const BackButton = () => (
    <div className='back-button'>
        <Button
            type='submit'
            className='back-button-custom'
            variant='primary'
        >
            BACK
        </Button>
    </div>
);

export default BackButton;