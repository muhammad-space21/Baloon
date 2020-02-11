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


class App extends React.Component {



  render() {

    return(
      <div classsName='app'>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/description-page' component={DescriptionPage} />
          <Route path='/search-result-page' component={SearchResultPage} />
          <Route path='/order-page' component={OrderPage} />
          <Route path='/article-car-page' component={ArticleCarPage} />
          <Route path='/article-truck-page' component={ArticleTruckPage} />
        </Switch>
      </div>
    )
  }
};

export default App;
