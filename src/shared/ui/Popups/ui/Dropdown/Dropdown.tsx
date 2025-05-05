import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Dropdown.module.scss'
import { Menu } from '@headlessui/react'
import { Fragment } from 'react'
import { type DropdownDirection } from '@/shared/types/dropdownDirection'
import { AppLink } from '../../../AppLink'
import { mapDirectionClass } from '../../styles/consts'
import popupCls from '../../styles/popups.module.scss'
export interface DropdownItem {
  href?: string
  disabled: boolean
  content: React.ReactNode
  onClick?: () => void
}

interface DropdownProps {
  className?: string
  items: DropdownItem[]
  trigger: React.ReactNode
  direction?: DropdownDirection
}

export function Dropdown (props: DropdownProps) {
  const { className, items, trigger, direction = 'bottom' } = props
  const menuClasses = [mapDirectionClass[direction]]
  return (
    <Menu as={'div'} className={classNames(cls.Dropdown, {}, [className, popupCls.popup])}>
      <Menu.Button className={classNames(popupCls.trigger)}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
        {items.map((item) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              onClick={item.onClick}
              className={classNames(cls.item, { [cls.active]: active })}
            >
              {item.content}
            </button>
          )
          if (item.href) {
            return (
              <Menu.Item
                as={AppLink}
                to={item.href}
                key={String(new Date())}
                disabled={item.disabled}
              >
                {content}
              </Menu.Item>
            )
          }

          return (
            <Menu.Item as={Fragment} key={String(new Date())} disabled={item.disabled}>
              {content}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
}
