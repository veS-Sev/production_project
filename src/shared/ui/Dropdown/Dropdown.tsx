import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Dropdown.module.scss'
import { Menu } from '@headlessui/react'
import { Fragment } from 'react'
import { type DropdownDirection } from 'shared/types/dropdownDirection'
import { AppLink } from '../AppLink'

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

const mapDirectionClass: Record<DropdownDirection, string> = {
  'bottom-left': cls.optionsBottomLeft,
  'bottom-right': cls.optionsBottomRight,
  'top-left': cls.optionsTopLeft,
  'top-right': cls.optionsTopRight,
  top: cls.optionsTop,
  bottom: cls.optionsBottom
}

export function Dropdown (props: DropdownProps) {
  const { className, items, trigger, direction = 'bottom' } = props
  const menuClasses = [mapDirectionClass[direction]]
  return (
    <Menu as={'div'} className={classNames(cls.Dropdown, {}, [className])}>
      <Menu.Button className={classNames(cls.trigger)}>{trigger}</Menu.Button>
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
