import React from 'react';

import './button-form-back.styles.scss';

import { Button } from 'react-bootstrap';


class ButtonFormBack extends React.Component {
    render () {
        return (
            <div className='button-form-back'>
                <Button
                variant='primary'
                className='button-custom'
                onClick={this.handleClick}
                
                >
                BACK
                </Button>
                
            </div>
        );
    };
};

export default ButtonFormBack; 