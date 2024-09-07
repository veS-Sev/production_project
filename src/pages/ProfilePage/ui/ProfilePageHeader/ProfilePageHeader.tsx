import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ProfilePageHeader.module.scss'
import { Button } from 'shared/ui/Button'
import { Text } from 'shared/ui/Text'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

interface ProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const readonly = useSelector(getProfileReadonly)

  const onEdit = () => {
    dispatch(profileActions.setReadonly(false))
  }
  const onCancel = () => {
    dispatch(profileActions.cancelEdit())
  }
  const onSave = () => {
    dispatch(updateProfileData())
  }

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('Профиль')} />
      {readonly
        ? (
        <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE} onClick ={onEdit}>
          {t('Редактировать')}
        </Button>)
        : (
        <div>
                  <Button className={cls.cancelBtn} theme={ButtonTheme.OUTLINE} onClick = {onCancel}>
          {t('Отменить')}
        </Button>
        <Button className={cls.saveBtn} theme={ButtonTheme.OUTLINE_RED} onClick = {onSave}>
          {t('Сохранить')}
        </Button>

        </div>
          )
}
    </div>
  )
}
