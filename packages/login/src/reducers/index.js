import { combineReducers } from 'redux'
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { RouterState, connectRouter } from 'connected-react-router'
import userReducer from './user'
import notificationReducer from './notification'

const rootReducer = (history) => combineReducers({
  user: userReducer,
  notification: notificationReducer,
  router: connectRouter(history),
})

export default rootReducer
