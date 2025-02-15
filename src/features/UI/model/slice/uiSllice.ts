import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { UISchema } from '../types/UISchema'

const initialState: UISchema = {
  scroll: {}
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setScrollPosition: (
      state,
      { payload }: PayloadAction<{ path: string, position: number }>
    ) => {
      state.scroll[payload.path] = payload.position
    }
  }
})
export const { reducer: uiReduser } = uiSlice
export const { actions: uiAction } = uiSlice
