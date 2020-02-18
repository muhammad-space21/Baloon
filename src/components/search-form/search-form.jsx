import React from 'react';

import './search-form.styles.scss';

import { Form, Col  } from 'react-bootstrap';




const SearchForm = () => (
            <div className='form-inputs'>
                <Form className='form-search'>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Control as="select" className='width-input'>
                                <option className='option'>Width</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Control as="select" className='height-input'>
                                <option>Height</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Control as="select" className='radius-input'>
                                <option>Radius</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                </Form>
            </div>
);


export default SearchForm;