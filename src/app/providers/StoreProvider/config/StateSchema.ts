import type { CounterSchema } from 'entities/Counter'
import type { UserSchema } from 'entities/User'
import type { LoginShema } from 'features/authByUsername'
import type { ProfileSchema } from 'entities/Profile'
import type { ArticleDetailsSchema } from 'entities/Article/model/types/articleDetails'
import type { AnyAction, ReducersMapObject, Reducer, EnhancedStore, CombinedState } from '@reduxjs/toolkit'
import { type AxiosInstance } from 'axios'
import { type To } from 'history'
import { type NavigateOptions } from 'react-router'
export interface StateSchema {
  counter: CounterSchema
  user: UserSchema

  // Async reducers
  loginForm?: LoginShema
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
}

export type StateSchemaKeys = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>

  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>

  add: (key: StateSchemaKeys, reducer: Reducer) => void

  remove: (key: StateSchemaKeys) => void
}
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance
  navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
  state: StateSchema
}
