import React from 'react'
import { Spinner } from '@comeonin/design-system/lib/spinner'
import { styled } from '@comeonin/design-system'

const Overlay = styled('div', {
  position: 'fixed',
  top: '0px',
  left: '0px',
  right: '0px',
  bottom: '0px',
  zIndex: '100',
  backgroundColor: '#ccc'
})
const InnerContainer = styled('div', {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
})

const PageLoader = (
  <Overlay>
    <InnerContainer>
      <Spinner size={50} />
    </InnerContainer>
  </Overlay>
)

export default PageLoader
