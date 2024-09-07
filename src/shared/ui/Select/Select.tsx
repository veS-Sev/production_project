import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import cls from './Select.module.scss'
import { type ChangeEvent, memo, useMemo } from 'react'
interface SelectOption {
  value: string
  content: string
}
interface SelectProps {
  className?: string
  label?: string
  value?: string
  options: SelectOption[]
  onChange?: (value: string) => void
  readonly?: boolean
}
const mods: Mods = {}

export const Select = memo((props: SelectProps) => {
  const { className, label, value, options, onChange, readonly } = props
  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value)
    }
  }
  const optionsList = useMemo(
    () =>
      options.map((opt) => (
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
})
