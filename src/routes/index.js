import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import App from '../views/App'
import About from '../views/About'
import Index from '../views/Index'
import Login from '../views/Login'
import NotFound from '../views/NotFound'

const routes = (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="index" component={Index} />
      <Route path="about" component={About} />
      <Route path="login" component={Login} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
)

export default routes