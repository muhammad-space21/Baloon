import React from 'react';

import './order-page.styles.scss';

import NavbarMain from '../../components/navbar/navbar';
import OrderTable from '../../components/order-table/order-table';
import ButtonDelate from '../../components/button-delate/button-delate';
import BackButton from '../../components/back-button/back-button';
import ButtonGreen from '../../components/button-green/button-green';
import Footer from '../../components/footer/footer';

import { Container } from 'react-bootstrap';

const OrderPage = () => (
    <div className='order-page'>
        <NavbarMain />
        <div className='order-page-body'>
            <Container>
                <div className='title'>
                    <h1>Order Page</h1>
                </div>
                <OrderTable />
                <ButtonDelate />
                <div className='buttons-container'>
                    <div className='buttons'>
                        <BackButton  className=' back-button-custom btn-back'/>
                        <ButtonGreen className=' button-green-custom custom-btn btn-green'/>        
                    </div>
                </div>
            </Container>
        </div>
        <Footer />
    </div>
);

export default OrderPage;