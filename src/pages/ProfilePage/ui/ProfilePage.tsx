import {
  DynamicModuleLoader,
  type ReducersList
} from 'shared/lib/components/DinamicModuleLoader/DynamicModuleLoader'
import {
  fetchProfileData,
  profileReducer,
  getProfileData,
  getProfileError,
  getProfileIsLoading,
  profileActions,
  getProfileReadonly,
  getProfileForm,
  ProfileCard
} from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { useCallback, useEffect } from 'react'
import { ProfilePageHeader } from './ProfilePageHeader'
import { type Currency } from 'entities/Currency'
import { type Country } from 'entities/Country'

const reducers: ReducersList = {
  profile: profileReducer
}

const ProfilePage = () => {
  const dispatch = useAppDispatch()
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)
  const formData = useSelector(getProfileForm)
  const readonly = useSelector(getProfileReadonly)
  useEffect(() => {
    dispatch(fetchProfileData())
  }, [])
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
      <ProfilePageHeader />
      <ProfileCard
        data={formData}
        isLoading={isLoading}
        error={error}
        onChangeLastname={onChangeLastname}
        onChangeFirstname={onChangeFirstname}
        readonly ={readonly}
        onChangeUsername={onChangeUsername}
        onChangeAge={onChangeAge}
        onChangeAvatar={onChangeAvatar}
        onChangeCity={onChangeCity}
        onChangeCurrency={onChangeCurrency}
    onChangeCountry={onChangeCountry}
      />
    </DynamicModuleLoader>
  )
}

export default ProfilePage
