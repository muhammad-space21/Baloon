import React from 'react';

import './menu-item.styles.scss';

import MenuButton from '../button-menu/button-menu';


const MenuItem = ({ item }) => {
    const { code, image } = item;

    return (
        <div className='menu-item'>
            <div className='menu-item-body'>
                <div className='image' style={{backgroundImage: `url(${image})`}}></div>
            </div>
            <div className="item-footer">
                <div className='name'>{code}</div>
            </div>
            <MenuButton className='button-custom'/>
        </div>
    );
};

export default MenuItem;