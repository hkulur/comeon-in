import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Root, CenterContent, Header, FixedButtonContainer } from 'components/StyledComponents'
import { H4, Paragraph2, Paragraph3, Label2 } from '@comeonin/design-system/lib/typography'
import { BlockButton } from '@comeonin/design-system/lib/button'
import { update } from 'redux/actions'
import TermsIcon from 'components/Icons/Terms'

const Terms = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const acceptHandler = () => {
    dispatch(update({ ...user, acceptTerms: true }))
  }

  return (
    <Root>
      <CenterContent>
        <Header>
          <TermsIcon size={64} />
          <H4>Terms and Conditions</H4>
          <Paragraph2 color='contentTertiary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph2>
        </Header>
        <Label2 marginTop='scale700'>Version 06 2020</Label2>
        <Label2>Lorem ipsum dolor sit amet, consectetur</Label2>
        <Paragraph3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper a lacus vestibulum sed arcu non odio. In cursus turpis massa tincidunt dui. Risus commodo viverra maecenas accumsan lacus vel. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Sed vulputate odio ut enim. Dignissim sodales ut eu sem integer vitae justo eget. Sed sed risus pretium quam vulputate. Quisque non tellus orci ac auctor augue. Feugiat sed lectus vestibulum mattis ullamcorper velit sed. Consectetur a erat nam at lectus urna duis convallis convallis. Ut tristique et egestas quis. Cras pulvinar mattis nunc sed blandit libero.
        </Paragraph3>

        <Label2 marginTop='scale1000'>Cras pulvinar mattis nunc sed blandit libero.</Label2>
        <Paragraph3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper a lacus vestibulum sed arcu non odio. In cursus turpis massa tincidunt dui. Risus commodo viverra maecenas accumsan lacus vel. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Sed vulputate odio ut enim. Dignissim sodales ut eu sem integer vitae justo eget. Sed sed risus pretium quam vulputate. Quisque non tellus orci ac auctor augue. Feugiat sed lectus vestibulum mattis ullamcorper velit sed. Consectetur a erat nam at lectus urna duis convallis convallis. Ut tristique et egestas quis. Cras pulvinar mattis nunc sed blandit libero.
        </Paragraph3>
        <Paragraph3>
          Feugiat pretium nibh ipsum consequat nisl. Tortor vitae purus faucibus ornare suspendisse. Arcu cursus euismod quis viverra nibh. Pharetra et ultrices neque ornare aenean euismod elementum nisi quis. Dignissim cras tincidunt lobortis feugiat. Enim lobortis scelerisque fermentum dui faucibus in. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Aenean sed adipiscing diam donec adipiscing. Suspendisse ultrices gravida dictum fusce ut placerat orci. Nunc faucibus a pellentesque sit amet porttitor eget. Erat nam at lectus urna duis convallis convallis tellus id. In massa tempor nec feugiat. Elementum facilisis leo vel fringilla. At tempor commodo ullamcorper a lacus. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Sed lectus vestibulum mattis ullamcorper. Integer enim neque volutpat ac tincidunt vitae semper quis lectus.
        </Paragraph3>

        <Label2 marginTop='scale1000'>Feugiat pretium nibh ipsum consequat nisl.</Label2>
        <Paragraph3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper a lacus vestibulum sed arcu non odio. In cursus turpis massa tincidunt dui. Risus commodo viverra maecenas accumsan lacus vel. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Sed vulputate odio ut enim. Dignissim sodales ut eu sem integer vitae justo eget. Sed sed risus pretium quam vulputate. Quisque non tellus orci ac auctor augue. Feugiat sed lectus vestibulum mattis ullamcorper velit sed. Consectetur a erat nam at lectus urna duis convallis convallis. Ut tristique et egestas quis. Cras pulvinar mattis nunc sed blandit libero.
        </Paragraph3>
        <Paragraph3>
          Feugiat pretium nibh ipsum consequat nisl. Tortor vitae purus faucibus ornare suspendisse. Arcu cursus euismod quis viverra nibh. Pharetra et ultrices neque ornare aenean euismod elementum nisi quis. Dignissim cras tincidunt lobortis feugiat. Enim lobortis scelerisque fermentum dui faucibus in. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Aenean sed adipiscing diam donec adipiscing. Suspendisse ultrices gravida dictum fusce ut placerat orci. Nunc faucibus a pellentesque sit amet porttitor eget. Erat nam at lectus urna duis convallis convallis tellus id. In massa tempor nec feugiat. Elementum facilisis leo vel fringilla. At tempor commodo ullamcorper a lacus. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Sed lectus vestibulum mattis ullamcorper. Integer enim neque volutpat ac tincidunt vitae semper quis lectus.
        </Paragraph3>
        <FixedButtonContainer>
          <BlockButton
          onClick={acceptHandler}
          >Continue</BlockButton>
        </FixedButtonContainer>
      </CenterContent>
    </Root>
  )
}

export default Terms
