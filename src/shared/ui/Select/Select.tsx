import { classNames, type Mods } from '../../lib/classNames/classNames'
import cls from './Select.module.scss'
import { type ChangeEvent, useMemo } from 'react'
export interface SelectOption<T extends string> {
  value: T
  content: string
}
interface SelectProps<T extends string> {
  className?: string
  label?: string
  value?: T
  options?: SelectOption<T>[]
  onChange: (value: T) => void
  readonly?: boolean
}
const mods: Mods = {}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const { className, label, value, options, onChange, readonly } = props
  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value as T)
    }
  }
  const optionsList = useMemo(
    () =>
      options?.map((opt) => (
        <option className={cls.option} value={opt.value} key={opt.value}>
          {opt.content}
        </option>
      )),
    [options]
  )
  return (
    <div className={classNames(cls.Select, mods, [className])}>
      {label && <span className={cls.label}>{`${label} >`}</span>}
      <select
        onChange={onChangeHandler}
        value={value}
        className={classNames(cls.select)}
        disabled={readonly}
      >
        {optionsList}
      </select>
    </div>
  )
}
