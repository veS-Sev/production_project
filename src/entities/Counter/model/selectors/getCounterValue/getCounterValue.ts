import { createSelector } from '@reduxjs/toolkit'
import type { CounterShema } from '../../types/CounterShema'
import { getCounter } from '../getCounter/getCounter'

export const getCounterValue = createSelector(getCounter, (state: CounterShema) => state.value)
