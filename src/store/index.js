import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers' 
import initialState from '../reducers/initialState'

export const configureStore = function (initialState = {}) {
  const composeEnhancers =
    typeof window === 'object' && process.env.NODE_ENV === 'development' && 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      }) : compose

  const enhancer = composeEnhancers(
    applyMiddleware(thunk)
  )

  const store = createStore(reducers, initialState, enhancer)
  return store
}

const store = configureStore(initialState)
export default store