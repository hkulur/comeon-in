import React from 'react'
import { useFormik } from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import { Input, MaskedInput, SIZE } from '@comeonin/design-system/lib/input'
import { FormControl } from '@comeonin/design-system/lib/form-control'
import { BlockButton } from '@comeonin/design-system/lib/button'
import { Checkbox } from '@comeonin/design-system/lib/checkbox'
import { H4 } from '@comeonin/design-system/lib/typography'

import {
  Root,
  Center,
  ButtonWrapper,
  FlexWrapper,
  FlexItem1,
  FlexItem2,
  Header
} from 'components/StyledComponents'
import { detailsValidate } from 'helpers'
import { update } from 'redux/actions'
import UserIcon from 'components/Icons/User'

const Details = () => {
  const user = useSelector(state => state.user) || {}
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      email: user.email || '',
      countrycode: user.phone ? user.phone.split('-')[0] : '',
      phonenumber: user.phone ? user.phone.split('-')[1] : '',
      rejectMarketing: (user.acceptMarketing !== undefined && !user.acceptMarketing) || false
    },
    validate: detailsValidate,
    onSubmit: values => {
      const { email, countrycode, phonenumber, rejectMarketing } = values
      const phone = `${countrycode}-${phonenumber}`
      const params = {
        id: user.id,
        email,
        phone,
        acceptMarketing: !rejectMarketing
      }
      dispatch(update(params))
    },
  })

  const { errors, handleChange, handleSubmit, values, touched } = formik
 
  return (
    <Root>
      <Center>
        <Header>
          <UserIcon size={64} />
          <H4>Share your details</H4>
        </Header>
        <form onSubmit={handleSubmit} noValidate>
          <FormControl caption={(touched.email && errors.email) ? errors.email : ''} label='Email' error={touched.email && !!errors.email}>
            <Input
              id='email'
              name='email'
              value={values.email}
              onChange={handleChange}
            />
          </FormControl>
          <FlexWrapper>
            <FlexItem1>
              <FormControl
                caption={touched.countrycode && errors.countrycode ? errors.countrycode : ''}
                label='Country Code'
                error={touched.countrycode && !!errors.countrycode}
                labelFor="countrycode"
              >
                <MaskedInput
                  id="countrycode"
                  name="countrycode"
                  mask="+99"
                  value={values.countrycode}
                  size={SIZE.compact}
                  onChange={handleChange}
                />
              </FormControl>
            </FlexItem1>
            <FlexItem2>
              <FormControl
                caption={touched.phonenumber && errors.phonenumber ? errors.phonenumber : ''}
                label='Mobile number'
                error={touched.phonenumber && !!errors.phonenumber}
                labelFor="phonenumber"
              >
                <MaskedInput
                  id="phonenumber"
                  name="phonenumber"
                  mask="9999999"
                  value={values.phonenumber}
                  size={SIZE.compact}
                  onChange={handleChange}
                />
              </FormControl>
            </FlexItem2>
          </FlexWrapper>

          <Checkbox
            id='rejectMarketing'
            name='rejectMarketing'
            checked={values.rejectMarketing}
            onChange={handleChange}
          >
            I do not want to receive electronic marketing material.
          </Checkbox>

          <ButtonWrapper>
            <BlockButton type='submit'>Submit</BlockButton>
          </ButtonWrapper>
        </form>
      </Center>
    </Root>
  )
}

export default Details
