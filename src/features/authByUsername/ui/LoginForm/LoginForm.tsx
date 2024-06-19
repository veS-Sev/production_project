import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input'
import { Button } from 'shared/ui/Button'

interface LoginFormProps {
  className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation()
  return (
<div className={classNames(cls.LoginForm, {}, [className])}>
<Input autoFocus placeholder={t('Введите логин')} className={classNames(cls.input)}/>
<Input placeholder={t('Введите пароль')} className={classNames(cls.input)}/>
<Button className={classNames(cls.LoginBtn)}>{t('Войти')}</Button>
</div>
  )
}
