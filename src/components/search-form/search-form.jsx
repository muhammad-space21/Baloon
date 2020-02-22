import React from 'react';

import './search-form.styles.scss';

import { Form, Col  } from 'react-bootstrap';
import SearchButton from '../button-search/button-search';




class SearchForm extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            width: '',
            height: '',
            radius: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(target) {
        this.setState({
            [target.name]: target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
    }
    

    render() {
        return (
            <div className='form-inputs'>
                <Form className='form-search' onSubmit={this.handleSubmit}>
                    <Form.Row>
                    <Form.Group as={Col}  controlId="formGridSelect">
                            <Form.Control 
                            as="select" 
                            name='select' 
                            className='width-input' 
                            onChange={this.handleChange}
                            required
                            >
                            <option className='option'>Width</option>
                            <option className='option'>...</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col}  controlId="formGridSelect">
                            <Form.Control  
                            as="select" 
                            name='select' 
                            className='height-input' 
                            onChange={this.handleChange}
                            required
                            >
                            <option className='option'>Height</option>
                            <option className='option'>...</option> 
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridSelect">
                            <Form.Control 
                            as="select" 
                            name='select' 
                            className='radius-input'
                            onChange={this.handleChange}
                            required
                            >
                            <option className='option'>Radius</option>
                            <option className='option'>...</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <div className="button-search-holder">
                        <SearchButton  onClick={this.handleClick} />
                    </div>
                </Form>
            </div>
        );
    }
};


export default SearchForm;