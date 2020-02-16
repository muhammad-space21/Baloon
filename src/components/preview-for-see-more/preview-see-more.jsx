import React from 'react';

import './preview-see-more.styles.scss';

import { Container } from 'react-bootstrap';

import MenuItem from '../menu-item/menu-item';



const SeeMorePreview = ({items}) => (
    <Container>
        <div className='see-more-preview'>
            <div className='preview'>
            {items 
                    .filter(( item, idx ) => idx >= 3 )
                    .map((item) => (
                        <MenuItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    </Container>
);

export default SeeMorePreview;