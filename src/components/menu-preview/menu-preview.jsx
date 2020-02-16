import React from 'react';

import './menu-preview.styles.scss';

import MenuItem from '../menu-item/menu-item';

import { Container } from 'react-bootstrap';


const MenuPreview = ({ items }) => (

            <Container>
                <div className='menu-preview'>
                    <div className='preview'>
                            {items
                                .filter(( item, idx ) => idx < 3 )
                                .map(item  => 
                                    <MenuItem  key={item.id} item={item} />)
                            }
                    </div>
                </div>
            </Container>
);


export default MenuPreview;