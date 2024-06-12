import { type DeepPartial } from '@reduxjs/toolkit'
import { counterActions, counterReducer } from './counterSlice'
import { type CounterShema } from '../types/CounterShema'

describe('counter slice test ', () => {
  test('test with initial state ', () => {
    expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 })
  })

  test('test with incremeent', () => {
    const state: DeepPartial<CounterShema> = {
      value: 10
    }
    expect(counterReducer(state as CounterShema, counterActions.increment)).toEqual({ value: 11 })
  })

  test('test with decement ', () => {
    const state: DeepPartial<CounterShema> = {
      value: 10
    }
    expect(counterReducer(state as CounterShema, counterActions.decrement)).toEqual({ value: 9 })
  })
})
