import { classNames, type Mods } from '@/shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { Input } from '@/shared/ui/Input'
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text'
import { type Profile } from '../../model/types/profile'
import { Loader } from '@/shared/ui/Loader'
import { Avatar } from '@/shared/ui/Avatar'
import { type Currency, CurrencySelect } from '../../../Currency'
import { type Country, CountrySelect } from '../../../Country'
import { HStack, VStack } from '@/shared/ui/Stack'
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
      <HStack max justify='center'
        className={classNames(cls.ProfileCard, { [cls.loading]: true }, [
          className
        ])}
      >
        <Loader />
      </HStack>
    )
  }

  if (error) {
    return (
      <HStack max justify='center'
        className={classNames(cls.ProfileCard, { [cls.loading]: true }, [
          className
        ])}
      >
        <Text
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
          title={t('Профиль не найден')}
          text={t('Попробуйте обновить страницу')}
          // data-testid={'EditableProfileCard.Error'}
        />
      </HStack>
    )
  }
  return (
    <VStack justify='center' max className={classNames(cls.ProfileCard, mods, [className])}>
        <HStack justify='center' max>
          {data?.avatar && (
            <Avatar
              src={data?.avatar}
              size={150}
              alt={'Тут должен быть аватар'}
            />
          )}
        </HStack>
 <VStack align='start' className={cls.data} max>
        <Input
          value={data?.firstname}
          placeholder={t('Ваше имя')}
          className={cls.input}
          autofocus={false}
          readonly={readonly}
          onChange={onChangeFirstname}
          type={'text'}
          data-testid={'EditableProfileCard.Firstname'}
        />
        <Input
          type={'text'}
          value={data?.lastname}
          placeholder={t('Ваша фамилия')}
          className={cls.input}
          autofocus={false}
          readonly={readonly}
          onChange={onChangeLastname}
          data-testid={'EditableProfileCard.Lastname'}
        />
        <Input
          type={'text'}
          value={data?.username}
          placeholder={t('Ваш ник')}
          className={cls.input}
          autofocus={false}
          readonly={readonly}
          onChange={onChangeUsername}
          data-testid={'EditableProfileCard.Username'}
        />
        <Input
          type={'text'}
          value={data?.age}
          placeholder={t('Ваш возраст')}
          className={cls.input}
          autofocus={false}
          readonly={readonly}
          onChange={onChangeAge}
          data-testid={'EditableProfileCard.Age'}
        />
        <Input
          type={'text'}
          value={data?.city}
          placeholder={t('Ваш город')}
          className={cls.input}
          autofocus={false}
          readonly={readonly}
          onChange={onChangeCity}
          data-testid={'EditableProfileCard.City'}
        />
        <Input
          type={'text'}
          value={data?.avatar}
          placeholder={t('Ваш аватар')}
          className={cls.input}
          autofocus={false}
          readonly={readonly}
          onChange={onChangeAvatar}
          data-testid={'EditableProfileCard.Avatar'}
        />
        <CurrencySelect
         className={cls.input}
          value={data?.currency}
          readonly={readonly}
          onChange={onChangeCurrency}
          label = {'Укажите валюту'}
        />
                <CountrySelect
         className={cls.input}
          value={data?.country}
          readonly={readonly}
          onChange={onChangeCountry}
          label = {'Укажите страну'}
        />
      </VStack >
    </VStack>
  )
}
