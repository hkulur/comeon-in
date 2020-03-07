import React from 'react'
import PropTypes from 'prop-types'
import { Input as BaseInput, SIZE } from 'baseui/input'

const Input = (props) => (
  <BaseInput {...props} size={SIZE.compact} />
)

Input.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string
}

Input.defaultProps = {}

export default Input
