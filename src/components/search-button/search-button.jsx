import React from 'react';

import './search-button.styles.scss';

import { Button } from 'react-bootstrap';

import searchIcon from '../../Assets/Icons/search11.png';


const ButtonSearch = () => (
    <div className='button-search'>
        <Button 
        className='button-primary' 
        variant='primary' 
        name='button'> 
        <img 
        className='search-icon'
        src={searchIcon}
        alt='searchIcon'
        />
        SEARCH
        </Button>
    </div>
);

export default ButtonSearch;