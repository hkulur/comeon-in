import React from 'react'
import { FormControl } from './'
import { Input } from '../input'

export default {
  title: 'Design System|Form Control',
  component: FormControl,
}

export const Standard = () => (
  <FormControl label='Label' caption='Caption'>
    <Input id='1' />
  </FormControl>
)

export const Disabled = () => (
  <FormControl label='Label' caption='Caption' disabled>
    <Input id='2' />
  </FormControl>
)

export const Error = () => (
  <FormControl label='Label' caption='Caption' error>
    <Input id='3' />
  </FormControl>
)

export const NoLabel = () => (
  <FormControl caption='Caption'>
    <Input id='4' />
  </FormControl>
)

export const ErrorWithoutLabel = () => (
  <FormControl caption='Caption' error>
    <Input id='5' error />
  </FormControl>
)

export const ChildProps = () => (
  <FormControl label='Label'>
    <Input id='6' disabled error />
  </FormControl>
)

export const PositiveInput = () => (
  <FormControl label='Label' positive>
    <Input id='7' disabled positive />
  </FormControl>
)
