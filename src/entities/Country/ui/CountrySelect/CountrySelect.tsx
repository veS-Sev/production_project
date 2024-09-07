import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import cls from './CountrySelect.module.scss'
import { memo, useMemo } from 'react'
import { Country } from 'entities/Country/model/types/country'
import { Select } from 'shared/ui/Select'
import { useTranslation } from 'react-i18next'

interface CountrySelectProps {
  className?: string
  label?: string
  value?: string
  onChange?: (country: Country) => void
  readonly?: boolean
}
const mods: Mods = {}

const options = [
  { value: Country.BEL, content: Country.BEL },
  { value: Country.RUS, content: Country.RUS },
  { value: Country.USA, content: Country.USA }
]
export const CountrySelect = memo((props: CountrySelectProps) => {
  const { className, value, onChange, readonly } = props
  const { t } = useTranslation()
  const onChangeHandler = useMemo(
    () => (value: string) => {
      if (onChange) {
        onChange(value as Country)
      }
    },
    [onChange]
  )

  return (
    <div className={classNames(cls.CountrySelect, mods, [className])}>
      <Select
      label={t('Укажите страну ')}
        onChange={onChangeHandler}
        value={value}
        className={classNames(cls.select)}
        options={options}
        readonly={readonly}
      />
    </div>
  )
})
