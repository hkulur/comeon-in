import { LOGIN_ROUTE, DETAILS_ROUTE, TERMS_ROUTE, WELCOME_ROUTE, PUBLIC_ROUTES, PRIVATE_ROUTES } from './router-paths'

const routes = {
  showEmailPhoneScreen: DETAILS_ROUTE,
  showTermsAndCondition: TERMS_ROUTE,
  showWelcomeScreen: WELCOME_ROUTE
}
const routeOrder = ['showEmailPhoneScreen', 'showTermsAndCondition', 'showWelcomeScreen']

const routeResolver = ({ user, pathname }) => {
  const allPaths = [...PUBLIC_ROUTES, ...PRIVATE_ROUTES]
  let newPath = ''

  if (allPaths.indexOf(pathname) !== -1) {
    const keys = Object.keys(user || {})

    if (keys.length) {
      const currentRoute = keys.filter(key => user[key] === true && routeOrder.indexOf(key) !== -1)[0]

      if (!currentRoute && user.username !== undefined) {
        newPath = WELCOME_ROUTE
      } else if (routes[currentRoute]) { 
        newPath = routes[currentRoute]
      }
    } else {
      newPath = LOGIN_ROUTE
    }
  }

  return newPath !== pathname ? newPath : undefined
}

export default routeResolver
