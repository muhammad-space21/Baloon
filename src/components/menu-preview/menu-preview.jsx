import React from 'react';

import './menu-preview.styles.scss';

import MenuItem from '../menu-item/menu-item';



const MenuPreview = ({tyres_array}) => (
    <div className='menu-preview'>
        <div className='preview'>
            {tyres_array
                .map(({id, ...otherItemProps}) => (
                    <MenuItem key={id} {...otherItemProps} /> 
                ))
            }
        </div>
    </div>
);


export default MenuPreview;