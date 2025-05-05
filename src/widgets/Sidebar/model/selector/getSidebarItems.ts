import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from '@/entities/User'
import { RouterPath } from '@/shared/config/routeConfig'
import MainIcon from '@/shared/assets/icons/main-20-20.svg'
import AboutIcon from '@/shared/assets/icons/about-20-20.svg'
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg'
import ArticlesIcon from '@/shared/assets/icons/article-20-20.svg'
import { type SidebarItemType } from '../types/sidebar'

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
    { text: 'Главная', path: RouterPath.main, Icon: MainIcon },
    { text: 'О Нас', path: RouterPath.about, Icon: AboutIcon },
    {
      text: 'Статьи',
      path: RouterPath.articles,
      Icon: ArticlesIcon,
      authOnly: true
    }
  ]
  if (userData) {
    sidebarItemsList.push({
      text: 'Профиль',
      path: `${RouterPath.profile}${userData.id}`,
      Icon: ProfileIcon,
      authOnly: true
    })
  }
  return sidebarItemsList
})
