import { configureStore } from '@reduxjs/toolkit'
import type { StateSchema } from './StateSchema'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'

export const createReduxStore = (initialState?: StateSchema) => {
  const rootReducer = {
    counter: counterReducer,
    user: userReducer
  }
  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState
  }
  )
}
