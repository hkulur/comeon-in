import React from 'react'
import PropTypes from 'prop-types'
import Provider from 'components/Provider'
import routes from 'routes'
import ErrorBoundary from './ErrorBoundary'
import RootRoute from 'components/RootRoute'

const App = () => (
  <Provider>
    <ErrorBoundary>
      <RootRoute />
    </ErrorBoundary>
  </Provider>
)

export default App
