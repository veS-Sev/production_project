import { memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input'
import { Button } from 'shared/ui/Button'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { loginActions, loginReducer } from '../../model/slice/loginSlice/loginSlice'
import { loginByUsername } from 'features/authByUsername/model/services/loginByUsername/loginByUsername'
import { Text, TextTheme } from 'shared/ui/Text'
import { getLoginError, getLoginIsLoading, getLoginPassword, getLoginUsername } from '../../model/selector'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DinamicModuleLoader/DynamicModuleLoader'
export interface LoginFormProps {
  className?: string
  onSucces: () => void
}

const initialReducers: ReducersList = {
  loginForm: loginReducer
}

const LoginForm = memo(({ className, onSucces }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginIsLoading)
  const error = useSelector(getLoginError)
  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }))
    if (result.meta.requestStatus === 'fulfilled') { onSucces() }
  }, [onSucces, dispatch, username, password])

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
<div className={classNames(cls.LoginForm, {}, [className])}>
  <Text title={t('ФОРМА АВТОРИЗАЦИИ')}/>
  {error && <Text theme ={ TextTheme.ERROR} text={t('Неверно ввели логин или пароль')}/>}

<Input onChange={onChangeUsername} value={username} autoFocus placeholder={t('Введите логин')} className={classNames(cls.input)}/>

<Input onChange={onChangePassword} value={password} placeholder={t('Введите пароль')} className={classNames(cls.input)}/>

<Button disabled = {isLoading} onClick={onLoginClick} theme={ButtonTheme.OUTLINE} className={classNames(cls.LoginBtn)}>{t('Войти')}</Button>
</div>
</DynamicModuleLoader>
  )
})

export default LoginForm
