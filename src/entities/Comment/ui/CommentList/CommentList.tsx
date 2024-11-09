import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CommentList.module.scss'
import { type Comment } from '../../model/types/comment'
import { CommentCard } from '../CommentCard/CommentCard'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text'

interface CommentListProps {
  className?: string
  comments?: Comment[]
  isLoading?: boolean
}

export const CommentList = (props: CommentListProps) => {
  const { className, comments, isLoading } = props
  const { t } = useTranslation()
  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      { comments?.length
        ? (
            comments.map(comment =>
              (<CommentCard className={cls.comment}comment={comment} key={comment?.text}/>)
            ))
        : <Text text={t('Комментариев нет')} />
      }
    </div>
  )
}
