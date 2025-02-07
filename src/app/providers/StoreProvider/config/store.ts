import { configureStore } from '@reduxjs/toolkit'
import type { StateSchema, ThunkExtraArg } from './StateSchema'
import type { CombinedState, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { createReducerManager } from './reducerManager'
import { $api } from 'shared/api/api'
import { uiReduser } from 'features/UI'
import { rtkApi } from 'shared/api'

export const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
  // navigate?: (to: To, options?: NavigateOptions) => void
) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    ui: uiReduser,
    counter: counterReducer,
    user: userReducer,
    [rtkApi.reducerPath]: rtkApi.reducer
  }
  const reducerManager = createReducerManager(rootReducers)

  const extraArg: ThunkExtraArg = {
    api: $api
    // navigate
  }

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg
        }
      }).concat(rtkApi.middleware)
  })
  // @ts-expect-error Correct leter
  store.reducerManager = reducerManager

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
