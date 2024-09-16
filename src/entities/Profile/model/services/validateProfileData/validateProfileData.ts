import { type Profile, ValidateProfileError } from '../../types/profile'

export const validateProfileData = (profile: Profile | undefined) => {
  if (!profile) {
    return [ValidateProfileError.EMPTY_DATA]
  }
  const { city, age, lastname, firstname } = profile
  const errors = []

  if (!lastname || !firstname) {
    errors.push(ValidateProfileError.ICORRECT_NAME)
  }
  if (!Number.isInteger(age)) {
    errors.push(ValidateProfileError.ICORRECT_AGE)
  }
  if (!city) {
    errors.push(ValidateProfileError.ICORRECT_CITY)
  }
  return errors
}
