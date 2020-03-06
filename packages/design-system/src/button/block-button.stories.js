import React from 'react'
import { Flex } from '../../.storybook/Flex'
import { BlockButton, KIND } from '.'

export default {
  title: 'Design System|Buttons/Block Button',
  component: BlockButton,
}

export const withText = () => (
  <Flex>
    <BlockButton>Default</BlockButton>
    <BlockButton kind={KIND.primary}>Primary</BlockButton>
    <BlockButton kind={KIND.secondary}>Secondary</BlockButton>
    <BlockButton kind={KIND.tertiary}>Tertiary</BlockButton>
  </Flex>
)

export const withIcons = () => (
  <Flex>
    <BlockButton startEnhancer={() => (<label>{' < '}</label>)}>Back</BlockButton>
    <BlockButton endEnhancer={() => (<label>{' > '}</label>)}>Next</BlockButton>
  </Flex>
)

export const disabled = () => (
  <Flex>
    <BlockButton disabled>Default</BlockButton>
  </Flex>
)
