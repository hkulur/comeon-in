const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const detailsValidate = (values) => {
  const errors = {}
  let { email, countrycode, phonenumber } = values

  email = email && email.trim()
  countrycode = countrycode && countrycode.replace(/\D/g,'').trim()
  phonenumber = phonenumber && phonenumber.trim()

  if (!email) {
    errors.email = 'Mandatory'
  } else if (!emailRegex.test(email)) {
    errors.email = 'Invalid email'
  }

  if (!countrycode) {
    errors.countrycode = 'Mandatory'
  } else if (!/^[0-9]{2,3}$/g.test(countrycode)) {
    errors.countrycode = 'Invalid Code'
  }

  if (!phonenumber) {
    errors.phonenumber = 'Mandatory'
  } else if (!/^[0-9]{7,9}$/g.test(phonenumber)) {
    errors.phonenumber = 'Invalid Number'
  }

  return errors
}

export default detailsValidate
