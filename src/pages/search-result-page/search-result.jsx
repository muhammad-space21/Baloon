import React from 'react';

import './search-result.styles.scss';

import NavbarMain from '../../components/navbar/navbar';
import BackButton from '../../components/back-button/back-button';
import Footer from '../../components/footer/footer';

import MenuPreview from '../../components/menu-preview/menu-preview';


const SearchResultPage = () => (
    <div className='search-result-page'>
        <NavbarMain />
        <div className='search-page-body'>
        <div className='title'>
                <h1>Search Results' Page</h1>
            </div>
        <div className='back-button-container'>
            <BackButton />
        </div>
        </div>
        <Footer />

    </div>
);

export default SearchResultPage;