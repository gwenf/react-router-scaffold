import React from 'react'
import { render } from 'react-dom'

import NavMain from './components/Nav'
import Dashboard from './components/Dashboard'
import About from './components/About'
import Settings from './components/Settings'


import { Router, Route, Link, browserHistory, DefaultRoute } from 'react-router'

render((
  <Router history={browserHistory}>
    <Route component={NavMain}>
      <Route path="/" component={Dashboard} />
      <Route path="/about" component={About} />
      <Route path="/settings" component={Settings} />
    </Route>
  </Router>
), document.getElementById('react-container'));
