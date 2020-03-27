import React, { useState } from 'react';

import './see-more-btn.styles.scss';

import arrowDown from '../../Assets/Icons/down-arrow.png';
import arrowUp from '../../Assets/Icons/up-arrow.png';

import SeeMoreContainer from '../see-more-container/see-more';


const SeeMoreBtn = () => {
        const [show, setShow] = useState(true);
        return (
            <div className='see-more-btn'>
                <div className='title'> 
                    <h1>See more</h1> 
                </div>
                <div className='btn-container'>
                    
                        <img 
                        show={show}
                        className='btn-toggle' 
                        src={arrowDown}
                        onClick={() => setShow(false)}
                        alt="see-more-btn"/>
                        { !show &&
                        <img 
                        className='btn-toggle' 
                        src={arrowUp}
                        onClick={() => setShow(true)}
                        alt="see-more-btn"/> &&
                        <SeeMoreContainer />
                        }
                </div>
            </div>
        );
    };

export default SeeMoreBtn;