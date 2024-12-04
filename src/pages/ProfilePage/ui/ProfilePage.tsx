import {
  DynamicModuleLoader,
  type ReducersList
} from 'shared/lib/components/DinamicModuleLoader/DynamicModuleLoader'
import {
  fetchProfileData,
  profileReducer,
  getProfileValidateErrors,
  getProfileError,
  getProfileIsLoading,
  profileActions,
  getProfileReadonly,
  getProfileForm,
  ProfileCard,
  ValidateProfileError
} from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { useCallback } from 'react'
import { ProfilePageHeader } from './ProfilePageHeader'
import { type Currency } from 'entities/Currency'
import { type Country } from 'entities/Country'
import { TextTheme, Text } from 'shared/ui/Text'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { useInitionalEffect } from 'shared/lib/hooks/useInitionalEffect/useInitionalEffect'
import { Page } from 'shared/ui/Page'

const reducers: ReducersList = {
  profile: profileReducer
}

const ProfilePage = () => {
  const { id } = useParams<{ id: string }>()
  const dispatch = useAppDispatch()
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)
  const formData = useSelector(getProfileForm)
  const readonly = useSelector(getProfileReadonly)
  const validateErrors = useSelector(getProfileValidateErrors)
  const { t } = useTranslation()
  const validateErrorTranslate = {
    [ValidateProfileError.EMPTY_DATA]: t('Форма не заполнена'),
    [ValidateProfileError.ICORRECT_AGE]: t('Не верно введен возраст'),
    [ValidateProfileError.ICORRECT_CITY]: t('Не указан город'),
    [ValidateProfileError.SERVER_ERROR]: t('Ошибка при отправке данных'),
    [ValidateProfileError.ICORRECT_NAME]: t('Имя в Фамилия обязательны')
  }
  useInitionalEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id))
    }
  })

  const onChangeFirstname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ firstname: value || '' }))
    },
    [dispatch]
  )
  const onChangeLastname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ lastname: value || '' }))
    },
    [dispatch]
  )
  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value || '' }))
    },
    [dispatch]
  )
  const onChangeAge = useCallback(
    (value?: number | string) => {
      dispatch(profileActions.updateProfile({ age: Number(value || 0) }))
    },
    [dispatch]
  )
  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value || '' }))
    },
    [dispatch]
  )
  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value || '' }))
    },
    [dispatch]
  )
  const onChangeCurrency = useCallback(
    (currency: Currency) => {
      dispatch(profileActions.updateProfile({ currency }))
    },
    [dispatch]
  )
  const onChangeCountry = useCallback(
    (country: Country) => {
      dispatch(profileActions.updateProfile({ country }))
    },
    [dispatch]
  )
  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page>
      <ProfilePageHeader />
      {validateErrors?.length &&
        validateErrors.map((err) => (
          <Text
            key={err}
            theme={TextTheme.ERROR}
            text={validateErrorTranslate[err]}
          />
        ))}
      <ProfileCard
        data={formData}
        isLoading={isLoading}
        error={error}
        onChangeLastname={onChangeLastname}
        onChangeFirstname={onChangeFirstname}
        readonly={readonly}
        onChangeUsername={onChangeUsername}
        onChangeAge={onChangeAge}
        onChangeAvatar={onChangeAvatar}
        onChangeCity={onChangeCity}
        onChangeCurrency={onChangeCurrency}
        onChangeCountry={onChangeCountry}
      />
      </Page>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
