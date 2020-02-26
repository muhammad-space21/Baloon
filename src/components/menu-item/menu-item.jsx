import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({image, code}) => (
    <div className='menu-item'>
        <div className='menu-item-body'>
            <div className='image' style={{backgroundImage: `${image}`}}>

            </div>
            <div className='name'>{code}</div>
        </div>
    </div>
);

export default MenuItem;