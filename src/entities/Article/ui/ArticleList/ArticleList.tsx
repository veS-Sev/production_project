import { classNames } from 'shared/lib/classNames/classNames'
import { type HTMLAttributeAnchorTarget, memo } from 'react'
import cls from './ArticleList.module.scss'
import { type Article, ArticleView } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItemSkeleton/ArticleListItemSkeleton'
import { Text, TextSize } from 'shared/ui/Text'
interface ArticleListProps {
  className?: string
  articles: Article[]
  view?: ArticleView
  isLoading?: boolean
  target?: HTMLAttributeAnchorTarget
}

const getSceletons = (view: ArticleView) => {
  return new Array(view === ArticleView.BIG ? 3 : 9).fill(0).map((item, index) => (
    <ArticleListItemSkeleton view={view} key={index}/>
  ))
}

export const ArticleList = memo((props: ArticleListProps) => {
  const { className, view = ArticleView.SMALL, articles, isLoading, target } = props

  if (!isLoading && articles.length === 0) {
    return (<Text title={'Статьи не найдены'} size={TextSize.L}/>)
  }
  const renderArticles = (articles: Article[]) =>
    articles.map((article, id) => (
      <ArticleListItem target = {target}className={cls.card} key={article.id} view={view} article={article} />
    ))
  return (
    <div className={classNames(cls.ArticleList, {}, [cls[view], className])}>
      {articles.length > 0 ? renderArticles(articles) : null}
      {isLoading && getSceletons(view)}
    </div>
  )
}
)
