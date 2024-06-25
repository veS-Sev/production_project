import { memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input'
import { Button } from 'shared/ui/Button'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions } from '../../model/slice/loginSlice/loginSlice'
import { getLoginState } from 'features/authByUsername/model/selector/getLoginState/getLoginState'
import { loginByUsername } from 'features/authByUsername/model/services/loginByUsername/loginByUsername'
import { Text, TextTheme } from 'shared/ui/Text'
interface LoginFormProps {
  className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { username, password, isLoading, error } = useSelector(getLoginState)
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
<div className={classNames(cls.LoginForm, {}, [className])}>
  {error && <Text theme ={ TextTheme.ERROR} title={t('ФОРМА АВТОРИЗАЦИИ')} text={t('Неверно ввели логин или пароль')}/>}

<Input onChange={onChangeUsername} value={username} autoFocus placeholder={t('Введите логин')} className={classNames(cls.input)}/>

<Input onChange={onChangePassword} value={password} placeholder={t('Введите пароль')} className={classNames(cls.input)}/>

<Button disabled = {isLoading} onClick={onLoginClick} theme={ButtonTheme.OUTLINE} className={classNames(cls.LoginBtn)}>{t('Войти')}</Button>
</div>
  )
})
