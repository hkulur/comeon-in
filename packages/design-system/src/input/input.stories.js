import React from 'react'
import { Flex } from '../../.storybook/Flex'
import { Input } from '.'
import { MaskedInput } from 'baseui/input'

export default {
  title: 'Design System|Input',
  component: Input,
}

export const standard = () => <Input placeholder="Placeholder..." />
export const withIcon = () => (
  <Flex>
    <Input IconBefore={/* istanbul ignore next */ () => '@'} placeholder="Placeholder..." />
    <Input IconAfter={/* istanbul ignore next */ () => '>'} placeholder="Placeholder..." />
  </Flex>
)
export const error = () => <Input error placeholder="Placeholder..." />
export const disabled = () => <Input disabled value="Value" />
export const maxLength100 = () => <Input inputProps={{ maxLength: 100 }} />
export const passwordInput = () => <Input type="password" />
export const maskInput = () => <MaskedInput placeholder="Phone number" mask="(999) 999-9999" />