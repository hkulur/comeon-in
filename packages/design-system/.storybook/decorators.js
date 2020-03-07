import React from 'react'
import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'
import { LightTheme, ThemeProvider } from '../src'
import { withKnobs } from '@storybook/addon-knobs'

const testEngine = {
  renderStyle: styles => JSON.stringify(styles, null, 8).replace(/["\\]/gu, ''),
  renderKeyframes: () => '',
  renderFontFace: () => '',
}

const engine = process.env.NODE_ENV === 'test' ? testEngine : new Styletron()

const ThemeDecorator = storyFn => (
  <StyletronProvider value={engine}>
    <ThemeProvider theme={LightTheme}>{storyFn()}</ThemeProvider>
  </StyletronProvider>
)

export default [ThemeDecorator, withKnobs]
