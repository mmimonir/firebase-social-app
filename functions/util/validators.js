// Check is correct Email
const isEmail = (email) => {
  const regEx = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/
  if (email.match(regEx)) return true
  else return false
}

// Check targated feild is not empty
const isEmpty = (str) => {
  if (!str) return true
  else return false
}

// Validate the signup data & return errors and valid
exports.validateSignupData = (data) => {
  let errors = {}
  if (isEmpty(data.email)) {
    errors.email = 'Must not be empty'
  } else if (!isEmail(data.email)) {
    errors.email = 'Must be a valid email address'
  }
  if (isEmpty(data.password)) errors.password = 'Must not be empty'
  if (data.password !== data.confirmPassword)
    errors.confirmPassword = 'Password must match'
  if (isEmpty(data.handle)) errors.handle = 'Must not be empty'

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  }
}

// Validate Login Data
exports.validateLoginData = (data) => {
  let errors = {}

  if (isEmpty(data.email)) errors.email = 'Must not be empty'
  if (isEmpty(data.password)) errors.password = 'Must not be empty'

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  }
}

// reduceUserDetails
exports.reduceUserDetails = (data) => {
  let userDetails = {}

  if (!isEmpty(data.bio.trim())) userDetails.bio = data.bio
  if (!isEmpty(data.website.trim())) {
    if (data.website.trim().substring(0, 4) !== 'http') {
      userDetails.website = `http://${data.website.trim()}`
    } else userDetails.website = data.website
  }
  if (!isEmpty(data.location.trim())) userDetails.location = data.location

  return userDetails
}
