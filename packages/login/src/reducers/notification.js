import CONSTANTS from 'redux/constants'

const toastReducer = (state = '', action) => {
  switch (action.type) {
    case CONSTANTS.REQUEST_FAILURE:
      return action.payload
    case CONSTANTS.CLEAR_ERRORS:
      return ''
    default:
      return ''
  }
}

export default toastReducer
