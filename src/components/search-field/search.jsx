import React from 'react';

import './search.styles.scss';


import SearchForm from '../search-form/search-form';

class Search extends React.Component {

    render () {
        return (
            <div className='form'>
                <SearchForm />
            </div>
        );
    };
};

export default Search;