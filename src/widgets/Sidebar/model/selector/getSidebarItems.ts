import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from '@/entities/User'
import { getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile } from '@/shared/const/route'
import MainIcon from '@/shared/assets/icons/main-20-20.svg'
import AboutIcon from '@/shared/assets/icons/about-20-20.svg'
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg'
import ArticlesIcon from '@/shared/assets/icons/article-20-20.svg'
import { type SidebarItemType } from '../types/sidebar'

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
    { text: 'Главная', path: getRouteMain(), Icon: MainIcon },
    { text: 'О Нас', path: getRouteAbout(), Icon: AboutIcon }
  ]
  if (userData) {
    sidebarItemsList.push(
      {
        text: 'Профиль',
        path: getRouteProfile(userData.id),
        Icon: ProfileIcon,
        authOnly: true
      },
      {
        path: getRouteArticles(),
        Icon: ArticlesIcon,
        text: 'Статьи',
        authOnly: true
      }
    )
  }
  return sidebarItemsList
})
