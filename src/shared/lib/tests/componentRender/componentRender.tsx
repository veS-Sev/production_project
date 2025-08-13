import { MemoryRouter } from 'react-router-dom'
import type { ReactNode } from 'react'
import { render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../../config/i18n/i18n'
import { StoreProvider } from '@/app/providers/StoreProvider'
import type { StateSchema } from '@/app/providers/StoreProvider'
import { type ReducersMapObject } from '@reduxjs/toolkit'
// eslint-disable-next-line
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import { Theme } from '../../theme/ThemeContext'
// eslint-disable-next-line
import '@/app/styles/index.scss'

export interface componentRenderOptions {
  route?: string
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
  theme?: Theme
}
export interface TestProviderProps {
  options?: componentRenderOptions
  children: ReactNode
}
export const TestProvider = (props: TestProviderProps) => {
  const { children, options = {} } = props
  const { route = '/', initialState, asyncReducers, theme = Theme.LIGHT } = options
  return <MemoryRouter initialEntries={[route]}>
      <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider initialTheme={theme}>
          <div className={`app ${theme}`}>
          {children}</div>
        </ThemeProvider>
      </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
}

export const componentRender = (
  component: ReactNode,
  options: componentRenderOptions = {}
) => {
  return render(<TestProvider options={options}>{component}</TestProvider >
  )
}
