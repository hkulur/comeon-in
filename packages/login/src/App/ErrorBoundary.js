import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@comeonin/design-system/lib/button'
import { Paragraph2 } from '@comeonin/design-system/lib/typography'
import { styled } from '@comeonin/design-system'

const Center = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100vh'
})

const CenterX = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
})

const ErrorPage = () => {
  return (
    <Center>
      <CenterX>
        <Paragraph2
          color="mono800"
          marginTop="scale800"
          marginBottom="scale600"
        >Something went wrong</Paragraph2>
        <Button
          onClick={() => {
            window.location.reload()
          }}
        >Reload</Button>
      </CenterX>
    </Center>
  )
}

class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(...args) {
    this.logError(args)
  }

  componentDidMount() {
    window.addEventListener('error', this.logError)
  }

  componentWillUnmount() {
    window.removeEventListener('error', this.logError)
  }

  logError(args) {
    try {
      
    } catch (e) {
      console.error(e)
    }
  }

  render() {
    return this.state.error ? <ErrorPage /> : this.props.children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default ErrorBoundary
