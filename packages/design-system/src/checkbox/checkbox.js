import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox as BaseCheckbox, STYLE_TYPE } from 'baseui/checkbox'

const Checkbox = ({ children, ...rest }) => (
  <BaseCheckbox checkmarkType={STYLE_TYPE.default} {...rest}>
    {children}
  </BaseCheckbox>
)

Checkbox.propTypes = {
  checked: PropTypes.bool,
  checkmarkType: PropTypes.oneOf(['default']),
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

Checkbox.defaultProps = {
  checked: false
}

export default Checkbox
