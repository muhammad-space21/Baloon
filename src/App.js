import React from 'react';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';

class App extends React.Component {



  render() {

    return(
      <div classsName='app'>
        <Switch>
          <Route exact path='/' component={Homepage} />
        </Switch>
      </div>
    )
  }
};

export default App;
