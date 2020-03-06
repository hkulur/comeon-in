import CONSTANTS from './constants'
import {
  login as loginService,
  logout as logoutService,
  updateUser as updateService
} from 'service'

const request = () => ({
  type: CONSTANTS.REQUEST
})

const requestFailure = error => ({
  type: CONSTANTS.REQUEST_FAILURE,
  payload: error
})

const userUpdate = user => ({
  type: CONSTANTS.USER_UPDATE,
  payload: user
})

export const hideNotification = () => ({
  type: CONSTANTS.CLEAR_ERRORS
})

export const login = (params) => dispatch => {
  dispatch(request())

  loginService(params)
    .then(
      user => {
        dispatch(userUpdate(user))
      },
      error => {
        dispatch(requestFailure(error))
      }
    )
}

export const logout = (params) => dispatch => {
  dispatch(request())

  logoutService(params)
    .then(
      () => {
        dispatch(userUpdate({}))
      },
      error => {
        dispatch(requestFailure(error))
      }
    )
}

export const update = (params) => dispatch => {
  dispatch(request())

  updateService(params)
    .then(
      user => {
        dispatch(userUpdate(user))
      },
      error => {
        dispatch(requestFailure(error))
      }
    )
}
