import {createTheme, lightThemePrimitives} from 'baseui'

const primitives = {
  ...lightThemePrimitives,
  primaryFontFamily: 'Roboto'
}

const DesignTheme = createTheme(primitives)

export { DesignTheme }