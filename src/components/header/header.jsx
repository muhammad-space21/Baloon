import React from 'react';

import './header.styles.scss';

import NavbarMain from '../navbar/navbar';
import CarouselMain from '../carousel/carousel';
import Search from '../search-field/search';
// import ButtonSearch from '../button-search/button-search';

const Header = () => (
    <div className='header'>
        <NavbarMain />
        <CarouselMain />
        <Search />
        {/* <ButtonSearch /> */}
    </div>
);

export default Header; 