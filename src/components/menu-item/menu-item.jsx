import React from 'react';

import './menu-item.styles.scss';

import ButtonMenu from '../button-menu/button-menu';

const MenuItem = ({item}) => {

    const { code, image } = item;

        return (
            <div className='menu-item'>
                <div className='menu-item-body'>
                    <div className='image' style={{backgroundImage: `url(${image})`}} />
                </div>
                <div className='item-footer'>
                    <h6 className='name'>{code}</h6>
                    <ButtonMenu className='custom-button'/>
                </div>
            </div>
        );

    }; 




export default MenuItem;