import { createAsyncThunk } from '@reduxjs/toolkit'
import type { ThunkConfig } from 'app/providers/StoreProvider'
import { type Profile } from 'entities/Profile'
import { getProfileForm } from 'entities/Profile'

export const updateProfileData = createAsyncThunk< Profile, void, ThunkConfig<string>
>('profile/updateProfileData', async (_, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi
  const formData = getProfileForm(getState())
  try {
    const response = await extra.api.post<Profile>(
      '/profile', formData
    )

    if (!response.data) {
      throw new Error()
    }
    return response.data
  } catch (e) {
    console.log(e)
    return rejectWithValue('error')
  }
})
