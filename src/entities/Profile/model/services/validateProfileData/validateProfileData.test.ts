import { validateProfileData } from './validateProfileData'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { ValidateProfileError } from '../../types/profile'

const data = {
  firstname: 'Fifa',
  lastname: 'Cool',
  username: 'Volya',
  currency: Currency.RUB,
  avatar: 'shared/assets/test/scale_1200.png',
  city: 'Norilsk',
  age: 98,
  country: Country.RUS
}

describe('fetchProfileData', () => {
  test('succes data validate', async () => {
    const result = validateProfileData(data)

    expect(result).toEqual([])
  })

  test('error for age validation', async () => {
    const result = validateProfileData({ ...data, age: undefined })

    expect(result).toEqual([ValidateProfileError.ICORRECT_AGE])
  })

  test('error for city validation', async () => {
    const result = validateProfileData({ ...data, city: '' })

    expect(result).toEqual([ValidateProfileError.ICORRECT_CITY])
  })

  test('error for name validation', async () => {
    const result = validateProfileData({ ...data, firstname: '', lastname: '' })

    expect(result).toEqual([ValidateProfileError.ICORRECT_NAME])
  })

  test('validation error due to an empty object', async () => {
    const result = validateProfileData(undefined)

    expect(result).toEqual([ValidateProfileError.EMPTY_DATA])
  })

  test('a lot of validation mistakes', async () => {
    const result = validateProfileData({})

    expect(result).toEqual([ValidateProfileError.ICORRECT_NAME, ValidateProfileError.ICORRECT_AGE, ValidateProfileError.ICORRECT_CITY])
  })
})
