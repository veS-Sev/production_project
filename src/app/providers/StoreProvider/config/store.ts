import { configureStore } from '@reduxjs/toolkit'
import type { StateSchema } from './StateSchema'
import type { ReducersMapObject } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { createReducerManager } from './reducerManager'
import { profileReducer } from 'entities/Profile'

export const createReduxStore = (initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    profile: profileReducer
  }
  const reducerManager = createReducerManager(rootReducers)

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState
  }
  )
  // @ts-expect-error Correct leter
  store.reducerManager = reducerManager
  console.log('store', store)
  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
