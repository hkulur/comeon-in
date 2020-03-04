import { create } from '@storybook/theming'
import brandImage from './logo.png'

export default create({
  base: 'light',
  colorPrimary: '#2E70CB',
  colorSecondary: '#0096FF',
  appBg: 'rgba(0, 150, 255, 0.05)',
  appContentBg: '#FFFFFF',
  appBorderColor: 'rgba(0,0,0,.1)',
  appBorderRadius: 4,
  fontBase: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontCode:
    '"Operator Mono", "Fira Code Retina", "Fira Code", "FiraCode-Retina", "Andale Mono", "Lucida Console", Consolas, Monaco, monospace',
  textColor: '#2B2826',
  textInverseColor: '#FFFFFF',
  barTextColor: '#706E6B',
  barSelectedColor: '#0096FF',
  barBg: '#FFFFFF',
  inputBg: '#FFFFFF',
  inputBorder: 'rgba(0,0,0,.1)',
  inputTextColor: '#2B2826',
  inputBorderRadius: 4,
  brandTitle: 'Design System',
  brandImage,
})