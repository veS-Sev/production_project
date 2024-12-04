import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleList.module.scss'
import { type Article, ArticleView } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItemSkeleton/ArticleListItemSkeleton'

interface ArticleListProps {
  className?: string
  articles: Article[]
  view: ArticleView
  isLoading: boolean
}

const getSceletons = (view: ArticleView) => {
  return new Array(view === ArticleView.BIG ? 3 : 9).fill(0).map((item, index) => (
    <ArticleListItemSkeleton view={view} key={index}/>
  ))
}

export const ArticleList = (props: ArticleListProps) => {
  const { className, view, articles, isLoading } = props
  // if (isLoading) {
  //   return (<div className={classNames(cls.ArticleList, {}, [className, cls[view]])}> {getSceletons(view)}
  // </div>)
  // }
  const renderArticles = (articles: Article[]) =>
    articles.map((article, id) => (
      <ArticleListItem className={cls.card} key={article.id} view={view} article={article} />
    ))
  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.length > 0 ? renderArticles(articles) : null}
      {isLoading && getSceletons(view)}
    </div>
  )
}
