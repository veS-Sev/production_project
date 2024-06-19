import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  }
})

export const { actions: userActions } = userSlice

export const { reducer: userReducer } = userSlice
