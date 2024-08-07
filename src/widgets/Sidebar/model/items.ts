import { RouterPath } from 'shared/config/routeConfig'
import MainIcon from 'shared/assets/icons/main-20-20.svg'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg'
export interface SidebarItemType {
  text: string
  path: string
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemList: SidebarItemType[] = [
  { text: 'Главная', path: RouterPath.main, Icon: MainIcon },
  { text: 'О нас', path: RouterPath.about, Icon: AboutIcon },
  { text: 'Профиль', path: RouterPath.profile, Icon: ProfileIcon }
]
