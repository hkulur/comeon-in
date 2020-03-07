import CONSTANTS from 'redux/constants'

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case CONSTANTS.USER_UPDATE:
      return {
        ...state,
        ...action.payload
      }
    case CONSTANTS.USER_LOGOUT:
      return {}
    default:
      return state
  }
}

export default userReducer
