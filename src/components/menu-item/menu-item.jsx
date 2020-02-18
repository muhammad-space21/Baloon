import React from 'react';

import './menu-item.styles.scss';

import ButtonMenu from '../button-menu/button-menu';

const MenuItem = ({item}) => {
    const { name } = item;

    return (
        <div className='menu-item'>
            <div className='menu-item-body'>
                <div className='image' />
            </div>
            <div className='item-footer'>
                <h6 className='name'>{name}</h6>
                <ButtonMenu  className='custom-button'/>
            </div>
        </div>
    );

};

export default MenuItem;