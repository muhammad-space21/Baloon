import React from 'react';

import './ordered-products.styles.scss';

import { Container, Table } from 'react-bootstrap';
import ButtonDelate from '../button-delate/button-delate';



const OrderedProducts = () => (
    <div className='ordered-products'>
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
                <td className='td'>Table cell</td>
                <td className='td'>Table cell</td>
                <td className='td'>Table cell</td>
                <td className='td'>Table cell</td>
                <td className='td'>Table cell</td>
                <td className='td'>Table cell</td>
                <td className='td'>Table cell</td>
                <td className='td'>Table cell</td>

                <td className='button-holder'><ButtonDelate /></td>
                </tr>
            </tbody>
        </Table>
    </Container>
</div>
);

export default OrderedProducts;