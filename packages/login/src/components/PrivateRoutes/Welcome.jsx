import React from 'react'
import { useSelector } from 'react-redux'
import WelcomeIcon from 'components/Icons/Welcome'
import { Root, CenterContent, Header } from 'components/StyledComponents'
import { H4, Label1, Paragraph3 } from '@comeonin/design-system/lib/typography'

const Welcome = () => {
  const user = useSelector(state => state.user)

  return (
    <Root>
      <CenterContent>
        <Header>
          <WelcomeIcon size={64} />
          <H4>Hello {user.username}, welcome!!</H4>
          <Paragraph3 marginTop='scale400' color='contentTertiary'>It is nice to see you.</Paragraph3>
          
          <Paragraph3 marginTop='scale800'>Current Balance</Paragraph3>
          <Label1>100Kr</Label1>
        </Header>
      </CenterContent>
    </Root>
  )
}

export default Welcome
