import { createAsyncThunk } from '@reduxjs/toolkit'
import type { ThunkConfig } from '@/app/providers/StoreProvider'
import {
  type Profile,
  ValidateProfileError
} from '../../types/editableProfileCardSchema'
import {
  validateProfileData
} from '../validateProfileData/validateProfileData'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'

export const updateProfileData = createAsyncThunk< Profile, void, ThunkConfig<ValidateProfileError[]>
>('profile/updateProfileData', async (_, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi
  const formData = getProfileForm(getState())

  const errors = validateProfileData(formData)
  if (errors.length) {
    return rejectWithValue(errors)
  }

  try {
    const response = await extra.api.put<Profile>(`/profile/${formData?.id}`, formData)

    if (!response.data) {
      throw new Error()
    }
    return response.data
  } catch (e) {
    console.log(e)
    return rejectWithValue([ValidateProfileError.SERVER_ERROR])
  }
})
