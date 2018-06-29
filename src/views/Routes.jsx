import React from 'react'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Router, Route, IndexRoute } from 'react-router'
import App from './App'
import About from './About'
import Index from './Index'
import Login from './Login'
import NotFound from './NotFound'

export const browserHistory = createBrowserHistory()


export default class Routes extends React.Component {
  render() {
    return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Index} />
        <Route path="index" component={Index} />
        <Route path="about" component={About} />
        <Route path="login" component={Login} />
      </Route>
      <Route path="*" component={NotFound} />
    </Router>
    )
  }
}