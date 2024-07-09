import { type Story } from '@storybook/react'
import '../../../src/app/styles/index.scss'
import type { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import type { StateSchema } from 'app/providers/StoreProvider'
import { StoreProvider } from 'app/providers/StoreProvider'
import { loginReducer } from 'features/authByUsername/model/slice/loginSlice/loginSlice'

const DefaultAsyncReducer: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer
}
export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>) => (StoryComponent: Story) =>
    (
      <StoreProvider
      initialState={state}
      asyncReducers={{ ...asyncReducers, ...DefaultAsyncReducer }} >
        <StoryComponent />
      </StoreProvider>
    )
