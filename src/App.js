import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Documentation from './containers/Documentation'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

class App extends Component {
  render() {
    return (
      <Provider>
        <BrowserRouter>
          <Switch>
            <Route path='/' component={Documentation} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
