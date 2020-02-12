import React from 'react';

import './menu-button.styles.scss';

import { Button } from 'react-bootstrap';



const MenuButton = () => (
    <div className='menu-button'>
        <Button
        variant='primary' 
        className='menu-order-button' 
        > ORDER </Button>
        
    </div>
);

export default MenuButton;