import React from 'react'
import PropTypes from 'prop-types'
import { Provider as ReduxProvider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider, DebugEngine } from 'styletron-react'
import { DesignTheme, ThemeProvider } from '@comeonin/design-system'
import configureStore, { history } from 'store'

const debug = process.env.NODE_ENV === 'production' ? void 0 : new DebugEngine()
const engine = new Styletron()
const store = configureStore()

const Provider = ({ children }) => (
  <ReduxProvider store={store}>
    <ConnectedRouter history={history}>
      <StyletronProvider debug={debug} value={engine}>
        <ThemeProvider theme={DesignTheme}>{children}</ThemeProvider>
      </StyletronProvider>
    </ConnectedRouter>
  </ReduxProvider>
)

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default Provider
