import React from 'react'
import { useStyletron } from '../src'

export const Flex = ({ children }) => {
  const [css] = useStyletron()

  return (
    <div
      className={css({
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '24px',
        width: '95%',
      })}
    >
      {React.Children.map(children, child => (
        <div
          className={css({
            marginRight: '16px',
          })}
        >
          {React.cloneElement(child)}
        </div>
      ))}
    </div>
  )
}
