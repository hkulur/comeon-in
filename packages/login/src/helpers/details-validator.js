const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const detailsValidate = (values) => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Mandatory'
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'Invalid email'
  }

  if (!values.countrycode) {
    errors.countrycode = 'Mandatory'
  }

  if (!values.phonenumber || !values.phonenumber.trim()) {
    errors.phonenumber = 'Mandatory'
  } else if (!/^[0-9]{7,10}$/g.test(values.phonenumber)) {
    errors.phonenumber = 'Invalid Number'
  }

  return errors
}

export default detailsValidate
