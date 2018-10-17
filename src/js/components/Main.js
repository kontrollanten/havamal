import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from 'grommet/components/App';
import Split from 'grommet/components/Split';

import Home from '../screens/Home';
import NotFound from '../screens/NotFound';

class Main extends Component {
  render() {
    return (
      <App centered={false}>
        <Router>
          <Split
            flex='right'
            onResponsive={this._onResponsive}
          >
            {null}
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/*' component={NotFound} />
            </Switch>
          </Split>
        </Router>
      </App>
    );
  }
}

export default Main;
