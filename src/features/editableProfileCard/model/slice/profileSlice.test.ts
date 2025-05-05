import { ValidateProfileError, type ProfileSchema } from '../types/editableProfileCardSchema'
import { profileReducer, profileActions } from './profileSlice'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'
import { Currency } from '@/entities/Currency'
import { Country } from '@/entities/Country'
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

describe('profileSlice test ', () => {
  test('test set readonly ', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false }
    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadonly(true))
    ).toEqual({ readonly: true })
  })
  test('test update profile', () => {
    const state: DeepPartial<ProfileSchema> = { form: data }
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({ city: 'Kukuevka' })
      )
    ).toEqual({ form: { ...data, city: 'Kukuevka' } })
  })
  test('test cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = {
      data,
      readonly: false,
      form: {
        firstname: 'Lafa',
        lastname: 'Sool',
        username: 'Volk',
        currency: Currency.EUR,
        avatar: 'shared/assets/test/scale_1200.png',
        city: 'Tomsk',
        age: 108,
        country: Country.RUS
      },
      validateErrors: [ValidateProfileError.ICORRECT_CITY]
    }
    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdit())
    ).toEqual({ data, form: data, readonly: true, validateErrors: undefined })
  })
  test('test update profile data pending', () => {
    const state: DeepPartial<ProfileSchema> = { isLoading: false }
    expect(
      profileReducer(state as ProfileSchema, updateProfileData.pending)
    ).toEqual({ error: undefined, isLoading: true })
  })
  test('test update profile data fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = { isLoading: true }
    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, '')
      )
    ).toEqual({
      isLoading: false,
      data,
      form: data,
      readonly: true,
      validateErrors: undefined
    })
  })
})
