import { type Story } from '@storybook/react'
import '../../../src/app/styles/index.scss'
import type { DeepPartial } from '@reduxjs/toolkit'
import type { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { StoreProvider } from 'app/providers/StoreProvider'
export const StoreDecorator =
  (state: DeepPartial<StateSchema>) => (StoryComponent: Story) =>
    (
      <StoreProvider initialState={state}>
        <StoryComponent />
      </StoreProvider>
    )
