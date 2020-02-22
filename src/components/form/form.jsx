import React from 'react';

import './form.styles.scss';

import { Form } from 'react-bootstrap';

import BackButton from '../../components/back-button/back-button';
import ButtonGreen from '../../components/button-green/button-green';





class OrderForm extends React.Component {

    constructor () {
        super();

        this.state = {
            full_name: '',
            tel_number: '',
            address: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
}


handleChange({target}) {

    this.setState({
        [target.name]: target.value 
        });

}

handleSubmit = e => {
    e.preventDefault();

    const fullname = this.state.full_name;
    const number = this.state.tel_number;
    const address = this.state.address;

    console.log('Fullname: ' + fullname,
                'Number: ' + number, 
                'Address: ' + address  );


}


    render () {

        return (
            <div className='form'>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formGroupName">
                        <Form.Control
                        type="text"
                        name='full_name'
                        className='full-name'
                        placeholder="Fullname"
                        onChange={this.handleChange}
                        required
                        />
                    </Form.Group>
                    <Form.Group controlId="formGroupNumber">
                        <Form.Control 
                        type='contact'
                        name='tel_number'
                        className='number'
                        placeholder="Telephone number"
                        onChange={this.handleChange}
                        required
                        />
                    </Form.Group>
                    <Form.Group controlId="formGroupAddress">
                        <Form.Control 
                        type="text"
                        name='address'
                        className='address'
                        placeholder="Address" 
                        onChange={this.handleChange}
                        required
                        />
                    </Form.Group>
                    <div className='buttons-holder'>
                        <div className='back-button-container'>
                            <BackButton className='back-button-custom btn-custom' />
                        </div>
                        <div className='green-button-container'>
                            <ButtonGreen
                            className='custom-btn'
                            onClick={this.handleClick}
                            /> 
                        </div>
                    </div>
                </Form>
            </div>
        );
    };
};


export default OrderForm;