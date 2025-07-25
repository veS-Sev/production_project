import { Popover as HPopover } from '@headlessui/react'
import popupCls from '../../styles/popups.module.scss'
import cls from './Popover.module.scss'
import { type DropdownDirection } from '../../../../types/dropdownDirection'
import { mapDirectionClass } from '../../styles/consts'
import { classNames } from '../../../../lib/classNames/classNames'

interface PopoverProps {
  className?: string
  trigger: React.ReactNode
  direction?: DropdownDirection
  children: React.ReactNode
}

export const Popover = (props: PopoverProps) => {
  const { className, trigger, direction = 'bottom-left', children } = props

  const menuClasses = [mapDirectionClass[direction]]
  return <HPopover className={classNames(cls.Popover, {}, [className, popupCls.popup])}>
    <HPopover.Button as={'div'}
      className={classNames(popupCls.trigger)}>{trigger}</HPopover.Button>

      <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
      {children}
      </HPopover.Panel>
    </HPopover>
}
