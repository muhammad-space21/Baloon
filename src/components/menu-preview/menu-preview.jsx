import React from 'react';

import './menu-preview.styles.scss';

import MenuItem from '../menu-item/menu-item';



const MenuPreview = ({tyres_array}) => (
    <div className='menu-preview'>
        <div className='preview'>
            {tyres_array
                .filter((item, idx) => idx < 4)
                .map(( item ) => ( 
                <MenuItem key={item.id} item={item} />
            ))}
        </div>
    </div>
);



export default MenuPreview;