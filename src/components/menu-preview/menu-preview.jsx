import React from 'react';

import './menu-preview.styles.scss';


const MenuPreview = ({tyres_array}) => (
    <div className='menu-preview'>
        <div className='preview'>
            {
                tyres_array.map((tyre) => (
                <div> {tyre.code} </div>
                ))
            }
        </div>
    </div>
);

export default MenuPreview;