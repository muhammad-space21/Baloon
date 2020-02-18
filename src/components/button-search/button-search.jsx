import React from 'react';

import './button-search.styles.scss';

import searchIcon from '../../Assets/Icons/search11.png';


const ButtonSearch = () => (
    <div className='button-search'>
        <button
        className='button-primary' 
        name='button'> 
        <img 
        className='search-icon'
        src={searchIcon}
        alt='searchIcon'
        />
        SEARCH
        </button>
    </div>
);

export default ButtonSearch;