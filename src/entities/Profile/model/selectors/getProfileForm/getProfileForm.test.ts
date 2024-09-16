import { type StateSchema } from 'app/providers/StoreProvider'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { getProfileForm } from './getProfileForm'
describe('getProfileForm', () => {
  test('should return form data object', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: {
          firstname: 'Fifa',
          lastname: 'Cool',
          username: 'Volya',
          currency: Currency.RUB,
          avatar: 'shared/assets/test/scale_1200.png',
          city: 'Norilsk',
          age: 98,
          country: Country.RUS
        }
      }
    }

    expect(getProfileForm(state as StateSchema)).toEqual(
      {
        firstname: 'Fifa',
        lastname: 'Cool',
        username: 'Volya',
        currency: Currency.RUB,
        avatar: 'shared/assets/test/scale_1200.png',
        city: 'Norilsk',
        age: 98,
        country: Country.RUS
      }
    )
  })

  test('should work with emty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileForm(state as StateSchema)).toEqual(undefined)
  })
})
