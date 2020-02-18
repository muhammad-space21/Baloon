import React from 'react';

import './button-delate.styles.scss';

import delateIcon from '../../Assets/Icons/delate.icon.PNG';




const ButtonDelate = () => (
    <div className='button-delate'>
        <button className='btn-delate' type='submit'>
            <img className='delate-icon' src={delateIcon} alt="delateIcon"/>
        </button>
    </div>
);

export default ButtonDelate;