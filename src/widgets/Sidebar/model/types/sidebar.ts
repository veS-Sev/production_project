import { RouterPath } from '@/shared/const/route'
import MainIcon from '@/shared/assets/icons/main-20-20.svg'
import AboutIcon from '@/shared/assets/icons/about-20-20.svg'
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg'
import ArticlesIcon from '@/shared/assets/icons/article-20-20.svg'
export interface SidebarItemType {
  text: string
  path: string
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>
  authOnly?: true
}

export const SidebarItemList: SidebarItemType[] = [
  { text: 'Главная', path: RouterPath.main, Icon: MainIcon },
  { text: 'О Нас', path: RouterPath.about, Icon: AboutIcon },
  { text: 'Профиль', path: RouterPath.profile, Icon: ProfileIcon, authOnly: true },
  { text: 'Статьи', path: RouterPath.articles, Icon: ArticlesIcon, authOnly: true }
]
