import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { Profile, ProfileSchema } from '../index'

const initialState: ProfileSchema = {
  isLoading: false,
  data: undefined,
  readonly: true,
  error: undefined
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {}
})

export const { actions: profileActions } = profileSlice

export const { reducer: profileReducer } = profileSlice
