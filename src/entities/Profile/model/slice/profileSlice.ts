import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { Profile, ProfileSchema } from '../types/profile'
import { fetchProfileData } from '../services/fetchProfileData'

const initialState: ProfileSchema = {
  isLoading: false,
  data: undefined,
  readonly: true,
  error: undefined
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchProfileData.fulfilled, (
        state,
        action: PayloadAction<Profile>) => {
        state.isLoading = false
        state.data = action.payload
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { actions: profileActions } = profileSlice

export const { reducer: profileReducer } = profileSlice
