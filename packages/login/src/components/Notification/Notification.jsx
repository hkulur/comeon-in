import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Notification as DesignNotification, KIND } from '@comeonin/design-system/lib/notification'
import { styled } from '@comeonin/design-system'
import { hideNotification } from 'redux/actions'

const NotificationContainer = styled('div', {
  position: 'fixed',
  left: '50%',
  textAlign: 'center',
  transform: 'translate(-50%, 0)'
})

const overrides = {
  Body: {
    style: ({ $theme }) => {
      return {
        outline: `${$theme.colors.negative600} solid`,
        backgroundColor: $theme.colors.negative600,
        color: '#FFF'
      };
    }
  }
}
const Notification = () => {
  const error = useSelector(state => state.notification)
  const dispatch = useDispatch()

  const onCloseHandler = () => dispatch(hideNotification())
  return (
    <NotificationContainer>
      { error
        ? (
          <DesignNotification
            closeable
            overrides={overrides}
            kind={KIND.negative}
            onClose={onCloseHandler}
            autoHideDuration={4000}
          >
            {error}
          </DesignNotification>
        ) : null
      }
    </NotificationContainer>
  )
}

export default Notification
