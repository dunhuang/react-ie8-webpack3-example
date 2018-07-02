require('./css/common.scss')
require('console-polyfill')
require('es6-promise').polyfill()

const React = require('react')
const ReactDOM = require('react-dom')
const Provider = require('react-redux').Provider
const Router = require('react-router').Router
const store = require('./store').default
const routes = require('./routes').default
const browserHistory = require('./history').default

const App = () => (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>
)

const render = (Component) => {
  ReactDOM.render(
    <Component/>,
    document.getElementById('app')
  )
}

render(App)

if(module.hot){
  module.hot.accept()
}