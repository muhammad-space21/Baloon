import React, { lazy, Suspense } from 'react';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import  ErrorBoundary  from './components/Error-boundary/error-boundary';

const Homepage = lazy(() => import('./pages/homepage/homepage'));
const DescriptionPage = lazy(() => import('./pages/description-page/description-page'));
const SearchResultPage = lazy(() => import('./pages/search-result-page/search-result'));
const OrderPage = lazy(() => import('./pages/order-page/order-page'));
const ArticleCarPage = lazy(() => import('./pages/article-car-page/article-car-page'));
const ArticleTruckPage = lazy(() => import('./pages/article-truck-page/article-truck-page'));
const FormPage = lazy(() => import('./pages/form-page/form-page'));


class App extends React.Component {

  render () {
    return (
        <Provider store={store}>
          <div className='app'>
            <Switch>
              <ErrorBoundary>
                <Suspense fallback={<div>Loading...</div>}>
                  <Route exact path='/' component={Homepage} />
                  <Route exact path='/description-page' component={DescriptionPage} />
                  <Route exact path='/search-result-page' component={SearchResultPage} />
                  <Route exact path='/order-page' component={OrderPage} />
                  <Route exact path='/article-car-page' component={ArticleCarPage} />
                  <Route exact path='/article-truck-page' component={ArticleTruckPage} />
                  <Route exact path='/form-page' component={FormPage} />
                </Suspense>
              </ErrorBoundary>
            </Switch>
          </div>
        </Provider>
    );
  };
  };


export default App;
