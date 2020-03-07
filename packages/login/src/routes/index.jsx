import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import PageLoader from 'components/PageLoader'
import { Login, Registration, NoMatch } from 'components/PublicRoutes'
import { Details, Terms, Welcome } from 'components/PrivateRoutes'
import {
  WELCOME_ROUTE,
  TERMS_ROUTE,
  REGISTRATION_ROUTE,
  DETAILS_ROUTE,
  LOGIN_ROUTE
} from 'helpers'

const routes = (
  <div>
    <Suspense fallback={PageLoader}>
      <Switch>
        <Route exact path={WELCOME_ROUTE} component={Welcome} />
        <Route path={LOGIN_ROUTE} component={Login} />
        <Route path={REGISTRATION_ROUTE} component={Registration} />
        <Route path={DETAILS_ROUTE} component={Details} />
        <Route path={TERMS_ROUTE} component={Terms} />
        <Route path='*' component={NoMatch} />
      </Switch>
    </Suspense>
  </div>
)

export default routes
