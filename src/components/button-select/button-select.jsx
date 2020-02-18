import React from 'react';

import './button-select.styles.scss';

import  tickIcon from '../../Assets/Icons/confirm-white.png';


const SelectButton = () => (
    <div className='select-button'>
        <button className='select-btn'>
            <img className='tick-icon' src={tickIcon} alt="tickIcon"/>
        </button>
    </div>
);

export default SelectButton;

