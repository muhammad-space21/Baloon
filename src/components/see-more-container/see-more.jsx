import React from 'react';

import './see-more.styles.scss';

import PRODUCTS_DATA from '../Menu/product-data';

import SeeMorePreview from '../preview-for-see-more/preview-see-more';



class SeeMore extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: PRODUCTS_DATA
        }
    }

    render () {
        const { collections } = this.state;
        return(
            <div className='see-more'>
                {
                    collections.map(({ id, ...otherCollectionProps }) => (
                        <SeeMorePreview key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        );
    };
};

export default SeeMore;