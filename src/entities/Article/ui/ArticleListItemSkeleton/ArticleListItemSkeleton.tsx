import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleListItemSkeleton.module.scss'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { Card } from 'shared/ui/Card'
import {
  ArticleView
} from '../../model/types/article'
interface ArticleListItemSkeletonProps {
  className?: string
  view: ArticleView
}

export const ArticleListItemSkeleton = (props: ArticleListItemSkeletonProps) => {
  const {
    className,
    view
  } = props
  if (view === ArticleView.BIG) {
    return (
      <div
        className={classNames(cls.ArticleListItemSkeleton, {}, [
          className,
          cls[view]
        ])}
      >
        <Card className={classNames(cls.card, {}, [
          className,
          cls[view]
        ])}>
          <div className={classNames(cls.header)}>
            <Skeleton border={'50%'}
           width={30} height={30}
            />
            <Skeleton
              className={classNames(cls.username)} width={100} height={16}
            />
            <Skeleton className={classNames(cls.date)} width={70} height={16} />
          </div>
          <Skeleton className={classNames(cls.title)} height={50} />
          <Skeleton className={classNames(cls.types)} width={50} height={16}/>
          <Skeleton className={classNames(cls.image)} height={200} />
          <Skeleton className={classNames(cls.textBlock)} height={100}/>
          <div className={classNames(cls.footer)}>
            <Skeleton className={classNames(cls.views)} height={30}/>
          </div>
        </Card>
      </div>
    )
  }
  return (
    <div className={classNames(cls.ArticleListItemSkeleton, {}, [className, cls[view]])}>
        <Card className={classNames(cls.card, {}, [
          className,
          cls[view]
        ])}>
          <div className={classNames(cls.imageWrapper)}>
          <Skeleton width={200} height={200} /></div>
          <Skeleton width={130} height={30} />
        </Card>
    </div>
  )
}
