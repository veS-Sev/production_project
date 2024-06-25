import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { type User } from 'entities/User'
import i18n from 'shared/config/i18n/i18n'
import { userActions } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const'

interface loginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk< User, loginByUsernameProps, { rejectValue: string }>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', authData)
      if (!response.data) {
        throw new Error()
      }
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
      thunkAPI.dispatch(userActions.setAuthData(response.data))
      return response.data
    } catch (e) {
      console.log(e)
      return thunkAPI.rejectWithValue('error')
    }
  }
)
