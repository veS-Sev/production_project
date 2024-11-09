import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailsPage.module.scss'
import { useTranslation } from 'react-i18next'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { memo } from 'react'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router-dom'
import { Text } from 'shared/ui/Text'
import { CommentList } from 'entities/Comment'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DinamicModuleLoader/DynamicModuleLoader'
import { articleDetailsCommentsReducer } from '../../model/slice/ArticleDetailsCommentsSlice'
import { useSelector } from 'react-redux'
import { getArticleComments } from 'pages/ArticleDetailsPage/model/slice/ArticleDetailsCommentsSlice'
import { get } from 'http'
import { getArticleCommentsIsLoading, getArticleCommentsError } from 'pages/ArticleDetailsPage/model/selectors/comments'
import { useInitionalEffect } from 'shared/lib/hooks/useInitionalEffect/useInitionalEffect'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId'
interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('articles')
  const { id } = useParams<{ id: string }>()
  const comments = useSelector(getArticleComments.selectAll)
  const isLoading = useSelector(getArticleCommentsIsLoading)
  const error = useSelector(getArticleCommentsError)
  const dispatch = useAppDispatch()
  useInitionalEffect(() => { dispatch(fetchCommentsByArticleId(id)) })
  if (!id) {
    return (
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t('Статья не найдена')}
      </div>
    )
  }

  console.log('comments', comments)
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
    <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      <ArticleDetails id={id} />
      <Text title={t('Комментарии')} />
      <CommentList
        comments={comments}
      />
    </div>
    </DynamicModuleLoader>
  )
}
export default memo(ArticleDetailsPage)
