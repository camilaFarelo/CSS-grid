import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Documentation from './containers/Documentation';
import { Provider } from 'react-redux';
import Example1 from './containers/Example-1';
import Example2 from './containers/Example-2';
import Example3 from './containers/Example-3';

class App extends Component {
  render() {
    return (
      <Provider>
        <BrowserRouter>
          <Switch>
            <Route path='/example1' component={Example1} />
            <Route path='/example2' component={Example2} />
            <Route path='/example3' component={Example3} />
            <Route path='/' component={Documentation} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
