import React from 'react';

import './order-table.styles.scss';

import { Table, Form, Container } from 'react-bootstrap';

import ButtonSelect from '../button-select/button-select';



const OrderTable = () => {

        return (
            <div className='order-table'>
                <Container>
                    <Table className='table' responsive >
                        <thead className='head'>
                            <tr className='tr'>
                            <th className='th'>Brand</th>
                            <th className='th'>Size</th>
                            <th className='th'>Speed index</th>
                            <th className='th'>Pattern</th>
                            <th className='th'> 
                                Max pressure 
                                <br/>
                                <span>(kpa/psi)</span>
                            </th>
                            <th className='th'>
                                Quality
                                <br/>
                                certificate 
                            </th>
                            <th className='th'>
                                Distance
                                <br/>
                                <span>(km)</span>
                                </th>
                            <th className='th'>
                                Max Load
                                <br/>
                                weight
                            </th>
                            <th className='th'>
                            </th>
                            </tr>
                        </thead>
                        <tbody className='body'>
                            <tr className='tr'>
                            <td className='td'>
                            <Form className='form-dropdown'> 
                                    <Form.Group  controlId="formTableDropdown">
                                        <Form.Control className='select' as="select">
                                            <option></option>
                                            <option>...</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form>
                            </td>
                            <td className='td'>
                                <Form className='form-dropdown'> 
                                    <Form.Group  controlId="formTableDropdown">
                                        <Form.Control className='select' as="select">
                                            <option></option>
                                            <option>...</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form>
                            </td>
                            <td className='td'>Table cell</td>
                            <td className='td'>Table cell</td>
                            <td className='td'>Table cell</td>
                            <td className='td'>Table cell</td>
                            <td className='td'>Table cell</td>
                            <td className='td'>Table cell</td>
                            <td className='button-holder'><ButtonSelect /></td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    };

export default OrderTable;