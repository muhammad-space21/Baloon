import React from 'react';

import './navbar.styles.scss';

import { Nav, Navbar } from 'react-bootstrap';

import callIcon from '../../Assets/Icons/call-answer1.png';



const NavbarMain = () => (
    <Navbar  expand="lg" variant='default' className='navbar-main'>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
        <Nav.Link href='/order-page' className='nav-link order'> ORDER </Nav.Link>
        <Nav.Link href="#link" className='nav-link location'>LOCATION</Nav.Link>
        <Nav.Item><img className='call-icon'  src={callIcon} alt='callIcon' /></Nav.Item>
        <Nav.Item>
        <Nav.Link href="#link" className='nav-link contacts'>+998909091016 </Nav.Link>
        <Nav.Link href="#link" className='nav-link contacts-two'>+998909091016 </Nav.Link>

        </Nav.Item>
    </Nav>
    </Navbar.Collapse>
</Navbar>
);


export default NavbarMain;

