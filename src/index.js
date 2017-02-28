import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Main from './app/main';
import NotFound from './app/NotFound';

import './index.scss';

const Root = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="*" component={Main}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
};

render(<Root/>, document.getElementById('root'));
