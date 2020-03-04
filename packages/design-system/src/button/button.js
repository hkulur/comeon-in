import React from 'react'
import PropTypes from 'prop-types'
import { Button as BaseButton, KIND, SIZE } from 'baseui/button'

const Button = ({ children, ...rest }) => (
  <BaseButton {...rest} size={SIZE.compact}>
    {children}
  </BaseButton>
)

Button.propTypes = {
  disabled: PropTypes.bool,
  kind: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

Button.defaultProps = {
  kind: KIND.primary
}

export default Button
