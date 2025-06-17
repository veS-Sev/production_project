// import { type Story } from '@storybook/react'
// eslint-disable-next-line
import '@/app/styles/index.scss'
import type { StateSchema } from '@/app/providers/StoreProvider'
import { StoreProvider } from '@/app/providers/StoreProvider'
import { loginReducer } from '@/features/authByUsername/testing'
import { profileReducer } from '@/features/editableProfileCard/testing'
import { type ReducersList } from '../../../lib/components/DinamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from '@/entities/Article/testing'

const defaultAsyncReducer: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  // addCommentForm: addCommentFormReducer,
  articleDetailsPage: articleDetailsReducer
}
export const StoreDecorator =
  (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList
  ) => (StoryComponent: any) => (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...asyncReducers, ...defaultAsyncReducer }}
      >
        <StoryComponent />
      </StoreProvider>)
