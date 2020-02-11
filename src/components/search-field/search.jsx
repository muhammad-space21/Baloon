import React from 'react';

import './search.styles.scss';

import { Form, Col  } from 'react-bootstrap';


class Search extends React.Component {

    render () {
        return (
            <div className='search'>
                <Form className='form'>
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
    };
};

export default Search;