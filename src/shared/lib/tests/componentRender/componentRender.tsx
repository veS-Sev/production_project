import { MemoryRouter } from 'react-router-dom'
import type { ReactNode } from 'react'
import { render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../../config/i18n/i18n'
import { StoreProvider } from '@/app/providers/StoreProvider'
import type { StateSchema } from '@/app/providers/StoreProvider'
import { type ReducersMapObject } from '@reduxjs/toolkit'

export interface componentRenderOptions {
  route?: string
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const componentRender = (
  component: ReactNode,
  options: componentRenderOptions = {}
) => {
  const { route = '/', initialState, asyncReducers } = options
  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
        <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  )
}
