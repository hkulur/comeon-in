import { DETAILS_ROUTE, TERMS_ROUTE, WELCOME_ROUTE } from './router-paths'

const routes = {
  showEmailPhoneScreen: DETAILS_ROUTE,
  showTermsAndCondition: TERMS_ROUTE,
  showWelcomeScreen: WELCOME_ROUTE
}
const routeOrder = ['showEmailPhoneScreen', 'showTermsAndCondition', 'showWelcomeScreen']

const routeResolver = (user) => {
  const keys = Object.keys(user || {})
  const currentRoute = keys.filter(key => user[key] === true && routeOrder.indexOf(key) !== -1)[0]

  if (!currentRoute && user.username !== undefined) {
    return WELCOME_ROUTE
  }

  return routes[currentRoute]
}

export default routeResolver
