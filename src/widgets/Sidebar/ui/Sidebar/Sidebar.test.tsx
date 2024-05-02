import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from 'widgets/Sidebar/ui'
import { renderWithTranslations } from 'shared/lib/tests/renderWithTranslations/renderWithTranslations'

describe('Sidebar', () => {
  test('Sidebar test render', () => {
    renderWithTranslations(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    screen.debug()
  })

  test('Sidebar toggle test', () => {
    renderWithTranslations(<Sidebar />)
    expect(screen.getByTestId('sidebar-toggle')).toBeInTheDocument()
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    screen.debug()
  })
})
