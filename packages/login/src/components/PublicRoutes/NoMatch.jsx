import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@comeonin/design-system/lib/button'
import { Paragraph2, H4 } from '@comeonin/design-system/lib/typography'
import { styled } from '@comeonin/design-system'
import { Root, Center, Header, StyledLink } from 'components/StyledComponents'
import NoMatchIcon from 'components/Icons/NoMatch'

const NoMatch = () => {
  return (
    <Root>
      <Center>
        <Header>
          <NoMatchIcon size={64} />
          <H4>No Page Found</H4>

          <StyledLink
            data-baseweb='link'
            to='/login'
          >Login</StyledLink>
          
        </Header>
      </Center>
    </Root>
  )
}

export default NoMatch
