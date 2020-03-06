const loginRegistrationValidate = (values) => {
  const error = {}
  if (!values.username) {
    error.username = 'Mandatory'
  } 

  if (!values.password) {
    error.password = 'Mandatory'
  }

  return error
}

export default loginRegistrationValidate
