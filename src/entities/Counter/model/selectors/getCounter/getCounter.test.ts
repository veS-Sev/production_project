import type { DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { getCounter } from './getCounter'
describe('get сounter', () => {
  test('shoud return counter value field', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 }
    }
    expect(getCounter(state as StateSchema)).toEqual({ value: 10 })
  })
})
