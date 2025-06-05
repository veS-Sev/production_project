import { MainPage } from '@/pages/MainPage'
import { AboutPage } from '@/pages/AboutPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ProfilePage } from '@/pages/ProfilePage'
import { ArticlesPage } from '@/pages/ArticlesPage'
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage'
import { ArticleEditPage } from '@/pages/ArticleEditPage'
import { ForbiddenPage } from '@/pages/ForbiddenPage'
import { AdminPanelPage } from '@/pages/AdminPage'
import { UserRole } from '@/entities/User'
import { AppRoutes, RouterPath } from '@/shared/const/route'
import type { AppRouteProps } from '@/shared/types/route'

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: RouterPath.main,
    element: <MainPage />
  },
  [AppRoutes.ABOUT]: {
    path: RouterPath.about,
    element: <AboutPage />
  },
  [AppRoutes.PROFILE]: {
    path: `${RouterPath.profile}:id`,
    element: <ProfilePage />,
    authOnly: true
  },
  [AppRoutes.ARTICLES]: {
    path: RouterPath.articles,
    element: <ArticlesPage />,
    authOnly: true
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: `${RouterPath.article_details}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true
  },
  [AppRoutes.ARTICLE_CREATE]: {
    path: `${RouterPath.article_create}`,
    element: <ArticleEditPage/>,
    authOnly: true
  },
  [AppRoutes.ARTICLE_EDIT]: {
    path: `${RouterPath.article_edit}`,
    element: <ArticleEditPage />,
    authOnly: true
  },
  [AppRoutes.ADMIN_PANEL]: {
    path: `${RouterPath.admin}`,
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRole.MANAGER, UserRole.ADMIN]
  },
  [AppRoutes.FORBIDDEN]: {
    path: `${RouterPath.forbidden}`,
    element: <ForbiddenPage />,
    authOnly: true
  },
  [AppRoutes.NOT_FOUND]: {
    path: RouterPath.not_found,
    element: <NotFoundPage />
  }
}
