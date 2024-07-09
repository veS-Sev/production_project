import { memo, useCallback, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input'
import { Button } from 'shared/ui/Button'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { loginActions, loginReducer } from '../../model/slice/loginSlice/loginSlice'
import { loginByUsername } from 'features/authByUsername/model/services/loginByUsername/loginByUsername'
import { Text, TextTheme } from 'shared/ui/Text'
import { getLoginError, getLoginIsLoading, getLoginPassword, getLoginUsername } from '../../model/selector'
import { DinamicModuleLoader, ReducersList, ReducersStateEntry } from 'shared/lib/components/DinamicModuleLoader/DinamicModuleLoader'
export interface LoginFormProps {
  className?: string
}

const initialReducers: ReducersList = {
  loginForm: loginReducer
}

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

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
  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }))
  }, [dispatch, username, password])

  return (
    <DinamicModuleLoader removeAfterUnmount = {true} reducers={initialReducers}>
<div className={classNames(cls.LoginForm, {}, [className])}>
  {error && <Text theme ={ TextTheme.ERROR} title={t('ФОРМА АВТОРИЗАЦИИ')} text={t('Неверно ввели логин или пароль')}/>}

<Input onChange={onChangeUsername} value={username} autoFocus placeholder={t('Введите логин')} className={classNames(cls.input)}/>

<Input onChange={onChangePassword} value={password} placeholder={t('Введите пароль')} className={classNames(cls.input)}/>

<Button disabled = {isLoading} onClick={onLoginClick} theme={ButtonTheme.OUTLINE} className={classNames(cls.LoginBtn)}>{t('Войти')}</Button>
</div>
</DinamicModuleLoader>
  )
})

export default LoginForm
