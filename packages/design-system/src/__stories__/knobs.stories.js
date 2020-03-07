import React, { useState } from 'react'
import { actions } from '@storybook/addon-actions'
import { array, boolean, number, select, text } from '@storybook/addon-knobs'
import { Button, KIND } from '../button'
import { Checkbox } from '../checkbox'
import { Input } from '../input'
import { FormControl } from '../form-control'
import { Flex } from '../../.storybook/Flex'

const actionList = actions('onClick', 'onMouseOver')

export default {
  title: 'Knobs|Knobs',
}

export const button = () => {
  const title = text('Text', 'Click me')
  const disabled = boolean('Disabled', false)

  return (
    <Button disabled={disabled} {...actionList}>
      {title}
    </Button>
  )
}

export const checkbox = () =>
  React.createElement(() => {
    const [checked, setChecked] = useState(false)
    const title = text('Text', 'Check me')
    const disabled = boolean('Disabled', false)
    const isError = boolean('Is error', false)

    return (
      <Checkbox
        checked={checked}
        disabled={disabled}
        isError={isError}
        onChange={e => setChecked(e.target.checked)}
      >
        {title}
      </Checkbox>
    )
  })

export const input = () => {
  const disabled = boolean('Disabled', false)
  const error = boolean('Error', false)
  const placeholder = text('Placeholder', 'Select...')
  const value = text('Value', 'Value')

  return (
    <Input
      disabled={disabled}
      error={error}
      placeholder={placeholder}
      value={value}
    />
  )
}

export const formControl = () =>
  React.createElement(() => {
    const disabled = boolean('Disabled', false)
    const label = text('Label', 'label')
    const caption = text('Caption', 'Caption')
    const error = text('ErrorText', '') 

    return (
      <FormControl
        error={error}
        disabled={disabled}
        label={label}
        caption={caption}
      >
        <Input id="1" error={error} />
      </FormControl>
    )
  })
