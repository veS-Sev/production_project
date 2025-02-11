import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { type Country } from 'entities/Country'
import { type Currency } from 'entities/Currency'

import { useSelector } from 'react-redux'
import {
  type ReducersList,
  DynamicModuleLoader
} from 'shared/lib/components/DinamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitionalEffect } from 'shared/lib/hooks/useInitionalEffect/useInitionalEffect'
import { EditableProfileHeader } from '../EditableProfileHeader'

import { TextTheme, Text } from 'shared/ui/Text'
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError'
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm'
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors'
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData'

import { ProfileCard } from 'entities/Profile/ui/ProfileCard/ProfileCard'
import { profileReducer, profileActions } from '../../model/slice/profileSlice'
import { ValidateProfileError } from '../../model/types/editableProfileCardSchema'
import { VStack } from 'shared/ui/Stack'

const reducers: ReducersList = {
  profile: profileReducer
}

interface EditableProfileCardProps {
  className?: string
  id: string
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { className, id } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)
  const formData = useSelector(getProfileForm)
  const readonly = useSelector(getProfileReadonly)
  const validateErrors = useSelector(getProfileValidateErrors)

  const validateErrorTranslate = {
    [ValidateProfileError.EMPTY_DATA]: t('Форма не заполнена'),
    [ValidateProfileError.ICORRECT_AGE]: t('Не верно введен возраст'),
    [ValidateProfileError.ICORRECT_CITY]: t('Не указан город'),
    [ValidateProfileError.SERVER_ERROR]: t('Ошибка при отправке данных'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('Не выбрана страна'),
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
      <VStack max className={classNames('', {}, [className])}>
        <EditableProfileHeader />
        {validateErrors?.length &&
          validateErrors.map((err) => (
            <Text
              key={err}
              theme={TextTheme.ERROR}
              text={validateErrorTranslate[err]}
                data-testid='EditableProfileCard.Error'
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
      </VStack>
    </DynamicModuleLoader>
  )
})
