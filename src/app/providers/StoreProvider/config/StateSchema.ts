import type { CounterSchema } from 'entities/Counter'
import type { UserSchema } from 'entities/User'
import type { LoginShema } from 'features/authByUsername'
import type { ProfileSchema } from 'entities/Profile'
import type { AnyAction, ReducersMapObject, Reducer, EnhancedStore, CombinedState } from '@reduxjs/toolkit'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema

  // Async reducers
  loginForm?: LoginShema
  profile?: ProfileSchema
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
