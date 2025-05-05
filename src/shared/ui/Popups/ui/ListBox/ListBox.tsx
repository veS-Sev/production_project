import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ListBox.module.scss'
import { type DropdownDirection } from '@/shared/types'
import { Fragment } from 'react'
import { Listbox } from '@headlessui/react'
import { Button } from '../../../Button/Button'
import { HStack } from '../../../Stack'
import { mapDirectionClass } from '../../styles/consts'
import popupsCls from '../../styles/popups.module.scss'

export interface ListBoxItem {
  value: string
  content: React.ReactNode
  disabled?: boolean
}

interface ListBoxProps {
  className?: string
  items?: ListBoxItem[]
  value?: string
  defaultValue?: string
  onChange: (value: string) => void
  readonly?: boolean
  label?: string
  direction?: DropdownDirection
}

export function ListBox (props: ListBoxProps) {
  const {
    className,
    items,
    value,
    defaultValue,
    onChange,
    readonly,
    label,
    direction = 'bottom-right'
  } = props
  const optionClasses = [mapDirectionClass[direction]]
  return (
    <HStack gap = {'4'}>
      <> {label && `${label} >`}</>
      <Listbox
        disabled={readonly}
        as={'div'}
        className={classNames(cls.ListBox, {}, [className, popupsCls.popup])}
        value={value}
        onChange={onChange}
      >
        <Listbox.Button className={cls.trigger}>
          <Button disabled={readonly}>{value ?? defaultValue}</Button>
        </Listbox.Button>
        <Listbox.Options className={classNames(cls.options, {}, optionClasses)}>
          {items?.map((item) => (
            <Listbox.Option
              key={item.value}
              value={item.value}
              disabled={item?.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(
                    cls.item,
                    { [popupsCls.active]: active, [popupsCls.disabled]: item?.disabled },
                    [className]
                  )}
                >
                  {selected && '>'}
                  {item.content}
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </HStack>
  )
}
