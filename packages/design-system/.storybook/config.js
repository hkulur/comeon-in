import '@storybook/addon-console'
import { addDecorator, addParameters, configure } from '@storybook/react'
import theme from './theme'
import decorators from './decorators'

addParameters({
  options: {
    showPanel: true,
    storySort: (a, b) => {
      const aId = a[1].id === 'design-system-intro--page' ? '!' : a[1].id
      const bId = b[1].id === 'design-system-intro--page' ? '!' : b[1].id
      return aId.localeCompare(bId)
    },
    theme,
  },
})

const stories =
  process.env.NODE_ENV === 'test'
    ? require.context('../src', true, /(?<!knobs)\.stories\.js$/u)
    : require.context('../src', true, /\.stories\.(mdx|js)$/u)

configure(stories, module)
decorators.forEach(addDecorator)
