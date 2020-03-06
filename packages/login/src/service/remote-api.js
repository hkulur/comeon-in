import 'whatwg-fetch'
const host = 'http://localhost:3001'

export const END_POINTS = {
  authenticate_url: `${host}/authenticate`,
  signup_url: `${host}/signup`,
  logout_url: `${host}/logout`,
  update_url: `${host}/player`
}

export const update = ({ url, params = {}, method = 'POST' }) => {
  const requestOptions = {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params)
  }

  return window.fetch(url, requestOptions)
}
