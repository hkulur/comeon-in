import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from '@comeonin/design-system/lib/button'
import { Paragraph2, H4 } from '@comeonin/design-system/lib/typography'
import { styled } from '@comeonin/design-system'
import { Root, Center, Header, StyledLink } from 'components/StyledComponents'
import NoMatchIcon from 'components/Icons/NoMatch'

const NoMatch = () => {
  const user = useSelector(state => state.user)
  const notLoggedIn = Object.keys(user).length === 0

  return (
    <Root>
      <Center>
        <Header>
          <NoMatchIcon size={64} />
          <H4>No Page Found</H4>
          {
            notLoggedIn
            ? (
              <StyledLink
                data-baseweb='link'
                to='/login'
              >Login</StyledLink>
            ) : null

          }
        </Header>
      </Center>
    </Root>
  )
}

export default NoMatch
