import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ListBox.module.scss'
import { Fragment } from 'react'
import { Listbox } from '@headlessui/react'
import { Button } from '../Button/Button'
import { HStack } from '../Stack'

export interface ListBoxItem {
  value: string
  content: React.ReactNode
  disabled?: boolean
}

export type DropdownDirection = 'top' | 'bottom'
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

const mapDirectionClass: Record<DropdownDirection, string> = {
  bottom: cls.optionsBottom,
  top: cls.optionsTop
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
    direction = 'bottom'
  } = props
  const optionClasses = [mapDirectionClass[direction]]
  return (
    <HStack gap = {'4'}>
      <> {label && `${label} >`}</>
      <Listbox
        disabled={readonly}
        as={'div'}
        className={classNames(cls.ListBox, {}, [className])}
        value={value}
        onChange={onChange}
      >
        <Listbox.Button className={cls.trigger} disabled={readonly}>
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
                    { [cls.active]: active, [cls.disabled]: item?.disabled },
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
