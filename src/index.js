require('./css/common.scss')
require('console-polyfill')
require('es6-promise').polyfill()

const React = require('react')
const ReactDOM = require('react-dom')
const Routes = require('./views/Routes').default
const Provider = require('react-redux').Provider
const store = require('./store').default

const App = () => (
  <Provider store={store}>
    <Routes/>
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
  // console.log('---HMR started---')

  // module.hot.accept('./views/Routes', () => {
  //   const Routes = require('./views/Routes').default;
  //   const App = () => (
  //     <Provider store={store}>
  //       <Routes/>
  //     </Provider>
  //   )
  //   render(App)
  // });
}