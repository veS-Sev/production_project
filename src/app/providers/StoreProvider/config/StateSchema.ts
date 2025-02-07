import type { CounterSchema } from 'entities/Counter'
import type { UserSchema } from 'entities/User'
import type { LoginShema } from 'features/authByUsername'
import type { ProfileSchema } from 'features/editableProfileCard/model/types/editableProfileCardSchema'
import type { UISchema } from 'features/UI'
import type { ArticleDetailsSchema } from 'entities/Article/model/types/articleDetails'
import type { AddCommentFormSchema } from 'features/addCommentForm/model/type/addCommentFormSchema'
import type { AnyAction, ReducersMapObject, Reducer, EnhancedStore, CombinedState } from '@reduxjs/toolkit'
import { type AxiosInstance } from 'axios'
import type { ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage'
import { type ArticlesPageSchema } from 'pages/ArticlesPage'
import { type rtkApi } from 'shared/api'
export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
  ui: UISchema
  // Async reducers
  loginForm?: LoginShema
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
  addCommentForm?: AddCommentFormSchema
  articlesPage?: ArticlesPageSchema
  articleDetailsPage?: ArticleDetailsPageSchema
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
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
