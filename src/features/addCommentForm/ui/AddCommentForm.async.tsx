import { lazy, type FC } from 'react'
import { type AddCommentFormProps } from '../ui/AddCommentForm'

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(async () => await new Promise(resolve => {
  // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
  setTimeout(() => { resolve(import('./AddCommentForm')) }, 400)
}))
