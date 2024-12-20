import { lazy, type FC } from 'react'
import { type AddCommentFormProps } from '../ui/AddCommentForm'

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(async () => await import('./AddCommentForm'))
