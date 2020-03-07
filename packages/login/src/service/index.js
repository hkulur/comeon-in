import { END_POINTS, update } from './remote-api'

function handleResponse (responseData) {
  if (responseData.status === 'FAILURE') {
    const error = (responseData && responseData.response && responseData.response.errorDescription) || 
                  responseData.error || 'Something went wrong'
    return Promise.reject(error)
  }

  return Promise.resolve(responseData.response)
}

export const login = (params) => {
  const promise = update({
    url: END_POINTS.authenticate_url,
    params
  })

  return promise
    .then(response => response.json())
    .then(handleResponse)
}

export const signup = (params) => {
  const promise = update({
    url: END_POINTS.signup_url,
    params
  })

  return promise
    .then(response => response.json())
    .then(handleResponse)
}

export const logout = (params) => {
  const promise = update({
    url: END_POINTS.logout_url,
    params
  })

  return promise
    .then(response => response.json())
    .then(handleResponse)
}

export const updateUser = (params) => {
  const promise =  update({
    url: END_POINTS.update_url,
    method: 'PUT',
    params
  })

  return promise
    .then(response => response.json())
    .then(handleResponse)
}
