import type { CounterSchema } from 'entities/Counter'
import type { UserSchema } from 'entities/User'
import type { LoginShema } from 'features/authByUsername'
import type { ProfileSchema } from 'entities/Profile'
import type { UISchema } from 'features/UI'
import type { ArticleDetailsSchema } from 'entities/Article/model/types/articleDetails'
import type { AddCommentFormSchema } from 'features/addCommentForm/model/type/addCommentFormSchema'
import type { AnyAction, ReducersMapObject, Reducer, EnhancedStore, CombinedState } from '@reduxjs/toolkit'
import { type AxiosInstance } from 'axios'
// import { type To } from 'history'
// import { type NavigateOptions } from 'react-router'
import { type ArticleDetailsCommentsShcema } from 'pages/ArticleDetailsPage'
import { type ArticlesPageSchema } from 'pages/ArticlesPage'
export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
  ui: UISchema
  // Async reducers
  loginForm?: LoginShema
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
  articleDetailsComments?: ArticleDetailsCommentsShcema
  addCommentForm?: AddCommentFormSchema
  articlesPage?: ArticlesPageSchema
}

export type StateSchemaKeys = keyof StateSchema
export type MountedReducers = OptionalRecord<StateSchemaKeys, boolean>
export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>

  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>

  add: (key: StateSchemaKeys, reducer: Reducer) => void

  remove: (key: StateSchemaKeys) => void

  getMountedReducers: () => MountedReducers
  // true - вмонтирован false-демонтирован
}
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance
  // navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
  state: StateSchema
}
