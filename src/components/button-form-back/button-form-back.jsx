import React from 'react';

import './button-form-back.styles.scss';


class ButtonFormBack extends React.Component {
    render () {
        return (
            <div className='button-form-back'>
                <button
                className='button-custom'
                onClick={this.handleClick}
                
                >
                BACK
                </button>
                
            </div>
        );
    };
};

export default ButtonFormBack; 