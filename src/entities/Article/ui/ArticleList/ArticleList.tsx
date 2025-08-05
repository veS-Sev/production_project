import { classNames } from '@/shared/lib/classNames/classNames'
import { type HTMLAttributeAnchorTarget, memo } from 'react'
import cls from './ArticleList.module.scss'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItemSkeleton/ArticleListItemSkeleton'
import { Text, TextSize } from '@/shared/ui/Text'
import { ArticleView } from '../../model/consts/consts'
import { type Article } from '../../model/types/article'

interface ArticleListProps {
  className?: string
  articles: Article[]
  view?: ArticleView
  isLoading?: boolean
  target?: HTMLAttributeAnchorTarget
  //
  label?: any
}

const getSceletons = (view: ArticleView) => {
  return new Array(view === ArticleView.BIG ? 3 : 9)
    .fill(0)
    .map((item, index) => <ArticleListItemSkeleton view={view} key={index} />)
}

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    view = ArticleView.SMALL,
    articles,
    isLoading,
    target
  } = props

  if (!isLoading && articles.length === 0) {
    return <Text title={'Статьи не найдены'} size={TextSize.L} />
  }

  return (
        <div data-testid={'ArticleList'}
          className={classNames(cls.ArticleList, {}, [cls[view], className])}
    >{
      articles.map((article) => <ArticleListItem
      className={cls.card} article={article} view={view} target={target} key={article.id}/>)}

          {isLoading && getSceletons(view)}
        </div>
  )
})
