import { updateProfileData } from './updateProfileData'
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { Currency } from '@/entities/Currency'
import { Country } from '@/entities/Country'
import { ValidateProfileError } from '../../types/editableProfileCardSchema'

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

describe('updateProfileData', () => {
  test('succes update profile data', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: data }
    })

    thunk.api.put.mockReturnValue(Promise.resolve({ data }))

    const result = await thunk.callThunk()

    expect(thunk.api.put).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(data)
  })

  test('error update profile data', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: data }
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ status: '403' }))

    const result = await thunk.callThunk()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR])
  })

  test('error update profile with user data error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: { ...data, lastname: '' } }
    })

    const result = await thunk.callThunk()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([ValidateProfileError.ICORRECT_NAME])
  })
})
