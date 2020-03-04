import React from 'react';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage';
import DescriptionPage from './pages/description-page/description-page';
import SearchResultPage from './pages/search-result-page/search-result'; 
import OrderPage from './pages/order-page/order-page';
import ArticleCarPage from './pages/article-car-page/article-car-page';
import ArticleTruckPage from './pages/article-truck-page/article-truck-page';
import FormPage from './pages/form-page/form-page';


const App = () => {


    return(
      <div className='app'>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/description-page' component={DescriptionPage} />
          <Route exact path='/search-result-page' component={SearchResultPage} />
          <Route exact path='/order-page' component={OrderPage} />
          <Route exact path='/article-car-page' component={ArticleCarPage} />
          <Route exact path='/article-truck-page' component={ArticleTruckPage} />
          <Route exact path='/form-page' component={FormPage} />
        </Switch>
      </div>
    )
  };


export default App;
