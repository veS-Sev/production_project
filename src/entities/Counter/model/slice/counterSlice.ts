import { buildSlice } from '@/shared/lib/store/buildSlice'
import { type PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  value: 0
}

export const counterSlice = buildSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    addSome: (state, { payload }: PayloadAction<number>) => {
      state.value += payload
    },
    decrement: (state) => {
      state.value -= 1
    }
  }
})

export const {
  actions: counterActions,
  reducer: counterReducer,
  useActions: useCounterActions
} = counterSlice
