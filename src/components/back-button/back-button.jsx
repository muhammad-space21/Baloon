import React from 'react';

import './back-button.styles.scss';

import { useHistory } from "react-router-dom";



const BackButton = () => {
    let history = useHistory();

    return (
        <div className='back-button'>
            <button
            className='back-button-custom'
            onClick={() => history.goBack()}
            >
            BACK
            </button>
        </div>
    );
};






export default BackButton;