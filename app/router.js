import React from 'react'
import { render } from 'react-dom'

import App from './components/App'
import Dashboard from './components/Dashboard'
import About from './components/About'
import Settings from './components/Settings'


import { Router, Route, Link, browserHistory, DefaultRoute } from 'react-router'

render((
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Dashboard} />
      <Route path="/about" component={About} />
      <Route path="/settings" component={Settings} />
    </Route>
  </Router>
), document.getElementById('react-container'));
