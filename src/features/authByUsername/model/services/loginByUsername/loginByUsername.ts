import { createAsyncThunk } from '@reduxjs/toolkit'
import type { ThunkConfig } from '@/app/providers/StoreProvider'
import { type User } from '../../../../../entities/User'
import { userActions } from '../../../../../entities/User'
import { USER_LOCALSTORAGE_KEY } from '@/shared/const'

interface loginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk< User, loginByUsernameProps, ThunkConfig<string>
>('login/loginByUsername', async (authData, thunkApi) => {
  const { dispatch, extra, rejectWithValue } = thunkApi
  try {
    const response = await extra.api.post<User>(
      '/login',
      authData
    )
    // extra.navigate('/profile')
    if (!response.data) {
      throw new Error()
    }
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
    dispatch(userActions.setAuthData(response.data))
    return response.data
  } catch (e) {
    console.log(e)
    return rejectWithValue('error')
  }
})
