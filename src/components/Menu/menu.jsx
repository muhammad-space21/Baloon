import React from 'react';

import './menu.styles.scss';

import PRODUCT_DATA from './product-data';
import MenuPreview from '../menu-preview/menu-preview';


class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            collections: PRODUCT_DATA
        }

    }

    render() {
        const { collections } = this.state;
        return (
            <div className='menu'>
                {
                    collections.map(({ id, ...otherCollectionProps }) => (
                        <MenuPreview key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        );
    };
};
    

export default Menu;