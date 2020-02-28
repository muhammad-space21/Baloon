import React from 'react';

import './see-more.styles.scss';

import SeeMorePreview from '../preview-for-see-more/preview-see-more';



class SeeMore extends React.Component {


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