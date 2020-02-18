import React from 'react';

import './form-message.styles.scss';

import { Form } from 'react-bootstrap';

import ButtonFormBack from '../button-form-back/button-form-back';
import SocialIcons from '../social-net-icons/social-net-icons';






class FormMessage extends React.Component {

    render() {
        return(
            <div className='message-section'> 
                <Form className='message-form'>
                    <Form.Group controlId="formBasicEmail" >
                    <Form.Control className='email' type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows="2" className='textarea' placeholder="Message..." />
                    </Form.Group>
                        <ButtonFormBack className='button-custom'/> 
                </Form>
                <SocialIcons />
            </div>
        );
    };
};


export default FormMessage;