import React from 'react'
import { Flex } from '../../.storybook/Flex'
import { Button, KIND } from '.'

export default {
  title: 'Design System|Buttons/Button',
  component: Button,
}

export const withText = () => (
  <Flex>
    <Button>Default</Button>
    <Button kind={KIND.primary}>Primary</Button>
    <Button kind={KIND.secondary}>Secondary</Button>
    <Button kind={KIND.tertiary}>Tertiary</Button>
  </Flex>
)

export const withIcons = () => (
  <Flex>
    <Button startEnhancer={() => (<label>{' < '}</label>)}>Back</Button>
    <Button endEnhancer={() => (<label>{' > '}</label>)}>Next</Button>
  </Flex>
)

export const disabled = () => (
  <Flex>
    <Button disabled>Default</Button>
  </Flex>
)
