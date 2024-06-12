import { MemoryRouter } from 'react-router-dom'
import type { ReactNode } from 'react'
import { render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import i18n from 'shared/config/i18n/i18n'
import { StoreProvider } from 'app/providers/StoreProvider'
import type { DeepPartial } from '@reduxjs/toolkit'
import type { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'

export interface componentRenderOptions {
  route?: string
  initialState?: DeepPartial<StateSchema>
}

export const componentRender = (component: ReactNode, options: componentRenderOptions = {}) => {
  const { route = '/', initialState } = options
  return render(
    <StoreProvider initialState={initialState}>
    <MemoryRouter initialEntries={[route]}>
    <I18nextProvider i18n={i18n}>
    {component}
  </I18nextProvider>
  </MemoryRouter>
  </StoreProvider>
  )
}
