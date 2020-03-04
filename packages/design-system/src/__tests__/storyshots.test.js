import initStoryshots from '@storybook/addon-storyshots'

initStoryshots({
  framework: 'react',
  storyNameRegex: /^((?!.*?Design System).)*$/u,
})
