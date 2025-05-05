import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './AddCommentForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Input } from '@/shared/ui/Input'
import { Button } from '@/shared/ui/Button'
import { ButtonTheme } from '@/shared/ui/Button/Button'
import { addCommentFormReducer, addCommentFormActions } from '../model/slice/addCommentFormSlice'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { DynamicModuleLoader, type ReducersList } from '@/shared/lib/components/DinamicModuleLoader/DynamicModuleLoader'
import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { getCommentFormText } from '../model/selectors/getCommentForm'
import { HStack } from '@/shared/ui/Stack'

const initialReducers: ReducersList = {
  addCommentForm: addCommentFormReducer
}

export interface AddCommentFormProps {
  className?: string
  onSendComment: (text: string) => void
}

const AddCommentForm = memo(({ className, onSendComment }: AddCommentFormProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const text = useSelector(getCommentFormText)
  // const error = useSelector(addCommentFormErrorSelector)
  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value))
  }, [dispatch])
  const onSendHandler = useCallback(() => {
    onSendComment(text || '')
    onCommentTextChange('')
  }, [onSendComment, text, onCommentTextChange])
  return (<DynamicModuleLoader reducers={initialReducers} >
  <HStack className={classNames(cls.AddCommentForm, {}, [className])}>
    <Input placeholder={t('Текст комментария')} onChange={onCommentTextChange}className={cls.input} value={text}/>
    <Button onClick={onSendHandler} theme={ButtonTheme.OUTLINE}>{t('Отправить')}</Button>
  </HStack>
  </DynamicModuleLoader>)
})
export default AddCommentForm
