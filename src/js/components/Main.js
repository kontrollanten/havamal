import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';

import App from 'grommet/components/App';
import Split from 'grommet/components/Split';

import Home from '../screens/Home';
import NotFound from '../screens/NotFound';

class Main extends Component {
  render() {
    return (
      <App centered={false}>
        <Helmet>
          <title>Havamal - Den höges sång</title>
          <meta name='description' content='Svensk översättning av Erik Brate, 1913.' />
        </Helmet>
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
