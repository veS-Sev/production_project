import { type Story } from '@storybook/react'
import 'app/styles/index.scss'
import type { ReducersMapObject } from '@reduxjs/toolkit'
import type { StateSchema } from 'app/providers/StoreProvider'
import { StoreProvider } from 'app/providers/StoreProvider'
import { loginReducer } from 'features/authByUsername/model/slice/loginSlice/loginSlice'
import { profileReducer } from 'entities/Profile'
import { type ReducersList } from 'shared/lib/components/DinamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from 'entities/Article/model/slices/articleDetailsSlice'

const DefaultAsyncReducer: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  articleDetailsPage: articleDetailsReducer
}
export const StoreDecorator =
  (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
  ) => (StoryComponent: Story) => (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...asyncReducers, ...DefaultAsyncReducer }}
      >
        <StoryComponent />
      </StoreProvider>)
