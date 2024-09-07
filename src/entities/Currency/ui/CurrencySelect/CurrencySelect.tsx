import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import cls from './CurrencySelect.module.scss'
import { memo, useMemo } from 'react'
import { Currency } from 'entities/Currency/model/types/currency'
import { Select } from 'shared/ui/Select'
import { useTranslation } from 'react-i18next'
interface CurrencySelectProps {
  className?: string
  label?: string
  value?: string
  onChange?: (value: Currency) => void
  readonly?: boolean
}
const mods: Mods = {}

const options = [
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.USD, content: Currency.USD }
]
export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const { className, value, onChange, readonly } = props
  const { t } = useTranslation()
  const onChangeHandler = useMemo(
    () => (value: string) => {
      if (onChange) {
        onChange(value as Currency)
      }
    },
    [onChange]
  )

  return (
    <div className={classNames(cls.CurrencySelect, mods, [className])}>
      <Select
      label={t('Укажите валюту ')}
        onChange={onChangeHandler}
        value={value}
        className={classNames(cls.select)}
        options={options}
        readonly={readonly}
      />
    </div>
  )
})
