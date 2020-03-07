import {createTheme, lightThemePrimitives} from 'baseui'

const DesignThemePrimitive = {
  ...lightThemePrimitives,
  primaryFontFamily: 'Roboto'
}

const DesignTheme = createTheme(DesignThemePrimitive)

export { DesignTheme, DesignThemePrimitive } 