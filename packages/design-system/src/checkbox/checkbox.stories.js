import React, { useState } from 'react'
import { Checkbox } from '.'

export default {
  title: 'Design System|Checkbox',
  component: Checkbox,
}

export const checkbox = () =>
  React.createElement(() => {
    const [checked1, setChecked1] = useState(false)
    const [checked2, setChecked2] = useState(true)
    return (
      <>
        <Checkbox
          checked={checked1}
          onChange={
            /* istanbul ignore next */ e => setChecked1(e.target.checked)
          }
        >
          Unchecked
        </Checkbox>
        <Checkbox
          checked={checked2}
          onChange={
            /* istanbul ignore next */ e => setChecked2(e.target.checked)
          }
        >
          Checked
        </Checkbox>
      </>
    )
  })

export const error = () => (
  <>
    <Checkbox isError>Error Unchecked</Checkbox>
    <Checkbox checked isError>
      Error Checked
    </Checkbox>
  </>
)

export const disabled = () => (
  <>
    <Checkbox disabled>Disabled Unchecked</Checkbox>
    <Checkbox checked disabled>
      Disabled Checked
    </Checkbox>
  </>
)
