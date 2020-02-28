import React from 'react';

import './menu-item.styles.scss';

import MenuButton from '../button-menu/button-menu';


class MenuItem extends React.Component {

    render() {

        return (
            <div className='menu-item'>
                <div className='menu-item-body'>
                        {/* <div className='image' style={{backgroundImage: `url(${images[0]['image']})` }}></div> */}
                </div>
                <div className="item-footer">
                    <div className='name'>{this.props.code}</div>
                    <MenuButton className='button-custom' /> 
                </div>
            </div>
        )
    }
};

export default MenuItem;