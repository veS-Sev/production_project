import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './EditableProfileHeader.module.scss'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { Text } from '@/shared/ui/Text'

import { useSelector } from 'react-redux'
import { profileActions } from '../../model/slice/profileSlice'
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getUserAuthData } from '@/entities/User'
import { HStack } from '@/shared/ui/Stack'
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData'

interface EditableProfileHeaderProps {
  className?: string
}

export const EditableProfileHeader = ({ className }: EditableProfileHeaderProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const readonly = useSelector(getProfileReadonly)
  const authData = useSelector(getUserAuthData)
  const profileData = useSelector(getProfileForm)
  const canEdit = authData?.id === profileData?.id

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
    <HStack max justify='between' className={classNames(cls.EditableProfileHeader, {}, [className])}>
      <Text title={t('Профиль')} />
      {canEdit && (
        <div className={cls.btnWrapper}>
      {readonly
        ? (
        <Button data-testid={'EditableProfileHeader.EditButton'} className={cls.editBtn} theme={ButtonTheme.OUTLINE} onClick ={onEdit}>
          {t('Редактировать')}
        </Button>)
        : (
        <div>
                  <Button data-testid={'EditableProfileHeader.CancelButton'} className={cls.cancelBtn} theme={ButtonTheme.OUTLINE} onClick = {onCancel}>
          {t('Отменить')}
        </Button>
        <Button data-testid={'EditableProfileHeader.SaveButton'} className={cls.saveBtn} theme={ButtonTheme.OUTLINE_RED} onClick = {onSave}>
          {t('Сохранить')}
        </Button>

        </div>
          )
}</div>)}
    </HStack>
  )
}
