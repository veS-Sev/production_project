import { createRoot } from 'react-dom/client'
import '../src/app/styles/index.scss'
import { StoreProvider } from '@/app/providers/StoreProvider'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import App from './app/App'
import './shared/config/i18n/i18n'
import { ErrorBoundary } from '@/app/providers/ErrorBoundary'

const container = document.getElementById('root')

if (!container) {
  throw new Error('Root не найден. Не удалось вмонтировать react-приложение ')
}

const root = createRoot(container)
root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
        <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>
)
