import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CommentCard.module.scss'
import { type Comment } from '../../model/types/comment'
import { Avatar } from 'shared/ui/Avatar'
import { Text } from 'shared/ui/Text'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { AppLink } from 'shared/ui/AppLink/index'
import { RouterPath } from 'shared/config/routeConfig'
interface CommentCardProps {
  className?: string
  comment?: Comment
  isLoading?: boolean
}

export const CommentCard = (props: CommentCardProps) => {
  const { className, comment, isLoading } = props

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentCard, {}, [className])}>
        <div className={cls.header}>
           <Skeleton border={'50%'} width={'50px'} height={'50px'}/>
           <Skeleton className={cls.username} width={'50%'}/>
        </div>
        <Skeleton width={'100%'}/>
      </div>
    )
  }
  if (!comment) {
    return null
  }
  return (
    <div className={classNames(cls.CommentCard, {}, [className])}>
      <AppLink to={`${RouterPath.profile}${comment?.user.id}`}className={cls.header}>
        {comment
          ? <Avatar
            src={comment?.user?.avatar}
            size={40}
            alt={comment?.user?.username}
          />
          : null}
        <Text className={cls.username} title={comment?.user.username} />
      </AppLink>
      <Text className={cls.text} text={comment?.text} />
    </div>
  )
}
