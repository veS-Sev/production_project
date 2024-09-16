import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text'
import { type Profile } from 'entities/Profile/model/types/profile'
import { Loader } from 'shared/ui/Loader/Loader'
import { Avatar } from 'shared/ui/Avatar'
import { type Currency, CurrencySelect } from 'entities/Currency'
import { type Country, CountrySelect } from 'entities/Country'
import { validateProfileData } from 'entities/Profile/model/services/validateProfileData/validateProfileData'
interface ProfileCardProps {
  className?: string
  data?: Profile
  isLoading?: boolean
  error?: string
  onChangeFirstname: (value?: string) => void
  onChangeLastname: (value?: string) => void
  readonly?: boolean
  onChangeUsername: (value?: string) => void
  onChangeAge: (value?: number | string) => void
  onChangeCity: (value?: string) => void
  onChangeAvatar: (value?: string) => void
  onChangeCurrency: (currency: Currency) => void
  onChangeCountry: (country: Country) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeLastname,
    onChangeFirstname,
    onChangeUsername,
    onChangeAge,
    onChangeAvatar,
    onChangeCity,
    onChangeCurrency,
    onChangeCountry
  } = props
  const { t } = useTranslation(['translation'])
  // const { t } = useTranslation(['profile'])
  const mods: Mods = {
    [cls.editing]: !readonly
  }
  if (isLoading) {
    return (
      <div
        className={classNames(cls.ProfileCard, { [cls.loading]: true }, [
          className
        ])}
      >
        <Loader />
      </div>
    )
  }

  if (error) {
    return (
      <div
        className={classNames(cls.ProfileCard, { [cls.loading]: true }, [
          className
        ])}
      >
        <Text
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
          title={t('Произошла ошибка')}
          text={t('Попробуйте обновить страницу')}
        />
      </div>
    )
  }
  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      <div className={cls.data}>
        <div className={cls.avatarWrapper}>
          {' '}
          {data?.avatar && (
            <Avatar
              src={data?.avatar}
              size={150}
              alt={'Тут должен быть аватар'}
            />
          )}
        </div>

        <Input
          value={data?.firstname}
          placeholder={t('Ваше имя')}
          className={cls.input}
          autofocus={false}
          readonly={readonly}
          onChange={onChangeFirstname}
          type={'text'}
        />
        <Input
          type={'text'}
          value={data?.lastname}
          placeholder={t('Ваша фамилия')}
          className={cls.input}
          autofocus={false}
          readonly={readonly}
          onChange={onChangeLastname}
        />
        <Input
          type={'text'}
          value={data?.username}
          placeholder={t('Ваш ник')}
          className={cls.input}
          autofocus={false}
          readonly={readonly}
          onChange={onChangeUsername}
        />
        <Input
          type={'text'}
          value={data?.age}
          placeholder={t('Ваш возраст')}
          className={cls.input}
          autofocus={false}
          readonly={readonly}
          onChange={onChangeAge}
        />
        <Input
          type={'text'}
          value={data?.city}
          placeholder={t('Ваш город')}
          className={cls.input}
          autofocus={false}
          readonly={readonly}
          onChange={onChangeCity}
        />
        <Input
          type={'text'}
          value={data?.avatar}
          placeholder={t('Ваш аватар')}
          className={cls.input}
          autofocus={false}
          readonly={readonly}
          onChange={onChangeAvatar}
        />
        <CurrencySelect
         className={cls.input}
          value={data?.currency}
          readonly={readonly}
          onChange={onChangeCurrency}
        />
                <CountrySelect
         className={cls.input}
          value={data?.country}
          readonly={readonly}
          onChange={onChangeCountry}
        />
      </div>
    </div>
  )
}
