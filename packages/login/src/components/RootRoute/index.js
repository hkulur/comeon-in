import React, { useEffect } from 'react'
import { routeResolver } from 'helpers'
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

  const pathname = router && router.location.pathname
  useEffect(() => {
    const currentRoute = routeResolver({ user, pathname })

    if (currentRoute) {
      dispatch(push(currentRoute))
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
