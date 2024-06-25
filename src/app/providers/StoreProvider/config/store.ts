import { configureStore } from '@reduxjs/toolkit'
import type { StateSchema } from './StateSchema'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { loginReducer } from 'features/authByUsername/model/slice/loginSlice/loginSlice'

export const createReduxStore = (initialState?: StateSchema) => {
  const rootReducer = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer
  }
  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState
  }
  )
}
