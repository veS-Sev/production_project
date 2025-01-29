import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CommentList.module.scss'
import { type Comment } from '../../model/types/comment'
import { CommentCard } from '../CommentCard/CommentCard'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text'
import { VStack } from 'shared/ui/Stack'

interface CommentListProps {
  className?: string
  comments?: Comment[]
  isLoading?: boolean
}

export const CommentList = (props: CommentListProps) => {
  const { className, comments, isLoading } = props
  const { t } = useTranslation()

  if (isLoading) {
    return (<>
    <CommentCard isLoading/>
      <CommentCard />
      <CommentCard />
      </>)
  }

  return (
    <VStack max gap={'16'}className={classNames(cls.CommentList, {}, [className])}>
      { comments?.length
        ? (
            comments.map(comment =>
              (<CommentCard isLoading={isLoading} className={cls.comment}comment={comment} key={comment?.text}/>)
            ))
        : <Text text={t('Комментариев нет')} />
      }
    </VStack>
  )
}
