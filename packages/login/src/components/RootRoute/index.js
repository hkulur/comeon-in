import React, { useEffect } from 'react'
import { routeResolver, PUBLIC_ROUTES, LOGIN_ROUTE } from 'helpers'
import { useSelector, useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import routes from 'routes'
import { Notification } from 'components/Notification'

const RootRoute = () => {
  const user = useSelector(state => state.user)
  const router = useSelector(state => state.router)
  const dispatch = useDispatch()

  useEffect(() => {
    const currentRoute = routeResolver(user)

    if (currentRoute) {
      dispatch(push(currentRoute))
    } else {
      const pathname = router && router.location.pathname
      
      if (PUBLIC_ROUTES.indexOf(pathname) === -1) {
        dispatch(push(LOGIN_ROUTE))
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  return (
    <div>
      <Notification />
      {routes}
    </div>
  )
}

export default RootRoute
