import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileReadonly } from './getProfileReadonly'
describe('getProfileReadonly', () => {
  test('should return readonle flag', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true
      }
    }
    expect(getProfileReadonly(state as StateSchema)).toEqual(true)
  })

  test('should work with emty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileReadonly(state as StateSchema)).toEqual(undefined)
  })
})
