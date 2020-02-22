import React from 'react';

import './menu-preview.styles.scss';

import MenuItem from '../menu-item/menu-item';


import { Container } from 'react-bootstrap';


const MenuPreview = ({ tyre }) => (
            <Container>
                <div className='menu-preview'>
                    <div className='preview'>
                            {tyre
                            .map((tyre) => (
                                <MenuItem key={tyre.id} tyre={tyre} />
                            ))}
                    </div>
                </div>
            </Container>
);


export default MenuPreview;