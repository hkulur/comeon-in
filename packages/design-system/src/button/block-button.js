import React from 'react'
import PropTypes from 'prop-types'
import { Button as DesignButton } from '.'
import BaseButton from './block-button-overrides'

const Button = ({ children, ...rest }) => (
  <DesignButton {...rest} overrides={{ BaseButton }}>
    {children}
  </DesignButton>
)

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

Button.defaultProps = {}

export default Button
