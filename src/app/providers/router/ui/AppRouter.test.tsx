import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'
import { AppRouter } from './AppRouter'
import { getRouteAbout, getRouteAdminPanel, getRouteProfile } from '@/shared/const/route'
import { screen } from '@testing-library/react'
import { UserRole } from '@/entities/User'

describe('app/providers/router/ui/AppRouter', () => {
  test('Страница должна рендериться', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAbout()
    })
    const page = await screen.findByTestId('AboutPage')
    expect(page).toBeInTheDocument()
  })

  test('Страница не найдена', async () => {
    componentRender(<AppRouter />, {
      route: '/asdfadsf'
    })
    const page = await screen.findByTestId('NotFoundPage')
    expect(page).toBeInTheDocument()
  })

  test('Редирект неавторизованного пользователя на главную', async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile('1')
    })
    const page = await screen.findByTestId('MainPage')
    expect(page).toBeInTheDocument()
  })

  // test('Доступ к закрытой страницы для авторизованного пользователя', async () => {
  //   componentRender(<AppRouter />, {
  //     route: getRouteProfile('1'),
  //     initialState: {
  //       user: { _inited: true, authData: {} }
  //     }
  //   })

  //   const page = await screen.findByTestId('ProfilePage')
  //   expect(page).toBeInTheDocument()
  // })

  test('Доступ запрещен (отсутствует роль)', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: { user: { authData: { roles: [UserRole.USER] } } }
    })
    const page = await screen.findByTestId('ForbiddenPage')
    expect(page).toBeInTheDocument()
  })

  test('Доступ разрешен (присутствует роль)', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: { user: { authData: { roles: [UserRole.ADMIN] } } }
    })
    const page = await screen.findByTestId('AdminPanelPage')
    expect(page).toBeInTheDocument()
  })
})
