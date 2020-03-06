import React from 'react'
import PropTypes from 'prop-types'
import { FormControl as BaseFormControl } from 'baseui/form-control'

const overrides = {
  Label: {
    style: ({ $theme }) => {
      return {
        whiteSpace: 'nowrap'
      }
    }
  }
}

const FormControl = ({ children, positive, error, ...rest }) => (
  <BaseFormControl overrides={overrides} positive={positive} error={error} {...rest}>
    {children}
  </BaseFormControl>
)

FormControl.propTypes = {
  disabled: PropTypes.bool,
  positive: PropTypes.bool,
  error: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

FormControl.defaultProps = {
  positive: false,
  error: false
}

export default FormControl
