import React from 'react';

import './homepage.styles.scss';

import Header from '../../components/header/header';
import BrandsContainer from '../../components/brands-container/brands-container';
import Menu from '../../components/Menu/menu';
import MarketingPage from '../../components/marketing-page/marketing-page';



const Homepage = () => (
    <div className='homepage'>
        <Header />
        <BrandsContainer />
        <Menu />
        <MarketingPage />
    </div>
);

export default Homepage;