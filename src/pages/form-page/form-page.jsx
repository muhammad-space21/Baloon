import React from 'react';

import './form-page.styles.scss';

import OrderForm from '../../components/form/form';
import ButtonFormBack from '../../components/button-form-back/button-form-back';
import ButtonGreen from '../../components/button-green/button-green';


const FormPage = () => (
    <div className='form-page'>
        <OrderForm />
        <div className='buttons-holder'>
            <div className='back-button-container'>
                <ButtonFormBack />
            </div>
            <div className='green-button-container'>
                <ButtonGreen  className='custom-btn'/>  
            </div>
        </div>
        
    </div>
);

export default FormPage; 