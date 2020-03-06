import React, { useEffect } from 'react'
import { routeResolver, PUBLIC_ROUTES, LOGIN_ROUTE } from 'helpers'
import { useSelector, useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import routes from 'routes'
import { Notification } from 'components/Notification'
import { Brand } from 'components/StyledComponents'
import Logo from 'components/Icons/Logo'
import { Button } from '@comeonin/design-system/lib/button'
import { logout } from 'redux/actions'

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

  const logoutHandler = (event) => {
    dispatch(logout(user))
  }

  return (
    <div>
      <Notification />
      <Brand>
        <Logo />
        {
          (user.id !== undefined)
          ? (
            <Button onClick={logoutHandler}>Logout</Button>
          ) : null 
        }
      </Brand>
      {routes}
    </div>
  )
}

export default RootRoute
