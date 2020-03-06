import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import createRootReducer from 'reducers'
import { loadState, localStorageMiddleware } from './middleware'

export const history = createBrowserHistory()
const preloadedState = {
  user: loadState() || {}
}

export default function configureStore() {
  const composeEnhancer = window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancer(
      applyMiddleware(
        thunk,
        routerMiddleware(history),
        localStorageMiddleware
      )
    )
  )

  return store
}
