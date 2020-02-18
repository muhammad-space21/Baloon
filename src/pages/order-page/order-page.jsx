import React from 'react';

import './order-page.styles.scss';

import NavbarMain from '../../components/navbar/navbar';
import SelectButton from '../../components/button-select/button-select';
import ButtonDelate from '../../components/button-delate/button-delate';
import BackButton from '../../components/back-button/back-button';
import ButtonGreen from '../../components/button-green/button-green';
import Footer from '../../components/footer/footer';


const OrderPage = () => (
    <div className='order-page'>
        <NavbarMain />
        <div className='order-page-body'>
            <div className='title'>
                <h1>Order Page</h1>
            </div>
            <SelectButton />
            <ButtonDelate />
            <div className='back-button-container'>
                <BackButton />
            </div>
            <div className='green-button-container'>
                <ButtonGreen />        
            </div>
        </div>
        <Footer />
    </div>
);

export default OrderPage;