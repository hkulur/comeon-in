import React from 'react'
import { useFormik } from 'formik'
import { Input } from '@comeonin/design-system/lib/input'
import { FormControl } from '@comeonin/design-system/lib/form-control'
import { BlockButton } from '@comeonin/design-system/lib/button'
import { H3 } from '@comeonin/design-system/lib/typography'
import { Root, Center, ButtonWrapper, FooterLink, StyledLink, Brand } from 'components/StyledComponents'
import { loginRegistrationValidate } from 'helpers'
import Logo from 'components/Icons/Logo'
import { useDispatch } from 'react-redux'
import { signup } from 'redux/actions'

const Registration = () => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validate: loginRegistrationValidate,
    onSubmit: values => {
     dispatch(signup(values))
    },
  })

  const { errors, handleChange, handleSubmit, values, touched } = formik
  return (
    <Root>
      <Center>
        <H3 marginBottom='scale700'>Register</H3>
        <form onSubmit={handleSubmit}>
          <FormControl
            caption={(touched.username && errors.username) ? errors.username : ''}
            label='User name'
            error={touched.username && !!errors.username}
          >
            <Input
              id='username'
              name='username'
              value={values.username}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl
            caption={(touched.password && errors.password) ? errors.password :  ''}
            label='Password'
            error={touched.password && !!errors.password}
          >
            <Input
              id='password'
              name='password'
              type='password'
              value={values.password}
              onChange={handleChange}
            />
          </FormControl>

          <ButtonWrapper>
            <BlockButton type='submit'>Submit</BlockButton>
          </ButtonWrapper>
        </form>
        <FooterLink>
          Already have account? 
          <StyledLink
            data-baseweb='link'
            to='/login'
          >Login</StyledLink>
        </FooterLink>
      </Center>
    </Root>
  )
}

export default Registration
