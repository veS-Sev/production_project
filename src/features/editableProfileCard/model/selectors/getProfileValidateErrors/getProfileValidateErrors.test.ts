import { type StateSchema } from '@/app/providers/StoreProvider'
import { ValidateProfileError } from '../../types/editableProfileCardSchema'
import { getProfileValidateErrors } from './getProfileValidateErrors'
describe('getProfileValidateErrors', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [ValidateProfileError.ICORRECT_NAME,
          ValidateProfileError.ICORRECT_AGE
        ]
      }
    }
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(['ICORRECT_NAME', 'ICORRECT_AGE'])
  })

  test('should work with emty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
  })
})
