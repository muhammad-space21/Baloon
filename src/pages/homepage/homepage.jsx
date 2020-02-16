import React from 'react';

import './homepage.styles.scss';

import Header from '../../components/header/header';
// import ApiRequest from '../../components/api-request';

import BrandsContainer from '../../components/brands-container/brands-container';
import Menu from '../../components/Menu/menu';
import SeeMore  from '../../components/see-more-container/see-more';
import MarketingPage from '../../components/marketing-page/marketing-page';
import AboutUsSection from '../../components/about-us/about-us';
import ArticleCards from '../../components/article-cards/article-cards';
import Footer from '../../components/footer/footer';

const Homepage = () => (
    <div className='homepage'>
        <Header />
        {/* <ApiRequest /> */}
        <BrandsContainer />
        <Menu />
        <SeeMore />
        <MarketingPage />
        <AboutUsSection />
        <ArticleCards />
        <Footer />
    </div>
);

export default Homepage;