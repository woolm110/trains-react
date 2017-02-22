import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import Main from './app/main';
import NotFound from './app/NotFound';

import './index.scss';

const Root = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Main}/>
      <Route path="*" component={NotFound}/>
    </Router>
  );
};

render(<Root/>, document.getElementById('root'));
