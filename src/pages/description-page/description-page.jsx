import React from 'react';

import './description-page.styles.scss';

import NavbarMain from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import BackButton  from '../../components/back-button/back-button'; 
import ButtonGreen from '../../components/button-green/button-green';


const DescriptionPage = () => (
    <div className='description-page'>
        <NavbarMain />
        <div className='title'>
            <h1>Description Page</h1>
        </div>
        <div className='back-button-container'>
            <BackButton />
        </div>
        <div className='green-button-container'>
            <ButtonGreen />        
        </div>
        <Footer />
    </div>
);

export default DescriptionPage;