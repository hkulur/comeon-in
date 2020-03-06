import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from '@comeonin/design-system'

export const Root = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '24px'
})

export const Brand = styled('div', ({ $theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px',
  borderBottom: `1px solid ${$theme.colors.contentTertiary}`,
  backgroundColor: $theme.colors.backgroundLightAccent
}))

export const Center = styled('div', {
  flexGrow: '1',
  maxWidth: '500px'
})

export const CenterContent = styled('div', {
  flexGrow: '1',
  maxWidth: '750px',
  marginBottom: '40px'
})

export const Header = styled('div', {
  textAlign: 'center'
})

export const ButtonWrapper = styled('div', ({ $theme }) => ({
  marginTop: $theme.sizing.scale800,
}))

export const FixedButtonContainer = styled('div', ({ $theme: { breakpoints } }) => ({
  position: 'fixed',
  bottom: '10px',
  left: '50%',
  width: '320px',
  padding: '0 10px',
  transform: 'translate(-50%, 0)'
}))

export const FooterLink = styled('div', ({ $theme }) => ({
  marginTop: $theme.sizing.scale600,
  ...$theme.typography.font350
}))

export const StyledLink = styled(Link, ({ $theme }) => ({
  textDecoration: 'underline'
}))

export const FlexWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'space-between'
})

export const FlexItem1 = styled('div', {
  width: '30%'
})

export const FlexItem2 = styled('div', {
  width: '65%'
})
