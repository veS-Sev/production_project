import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailsPage.module.scss'
import { useTranslation } from 'react-i18next'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useCallback } from 'react'
import { AddCommentForm } from 'features/addCommentForm'
import { ArticleDetails } from 'entities/Article'
import { useParams, useNavigate } from 'react-router-dom'
import { Text } from 'shared/ui/Text'
import { CommentList } from 'entities/Comment'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DinamicModuleLoader/DynamicModuleLoader'
import { articleDetailsCommentsReducer } from '../../model/slice/ArticleDetailsCommentsSlice'
import { useSelector } from 'react-redux'
import { getArticleComments } from 'pages/ArticleDetailsPage/model/slice/ArticleDetailsCommentsSlice'
import { getArticleCommentsIsLoading, getArticleCommentsError } from 'pages/ArticleDetailsPage/model/selectors/comments'
import { useInitionalEffect } from 'shared/lib/hooks/useInitionalEffect/useInitionalEffect'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { Button } from 'shared/ui/Button'
import { RouterPath } from 'shared/config/routeConfig'
import { Page } from 'shared/ui/Page'

export interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('articles')
  const { id } = useParams<{ id: string }>()
  const comments = useSelector(getArticleComments.selectAll)
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)
  const error = useSelector(getArticleCommentsError)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  useInitionalEffect(() => { dispatch(fetchCommentsByArticleId(id)) })

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text))
  }, [dispatch])

  const onBackToArticlesList = useCallback(() => {
    navigate(RouterPath.articles)
  }, [navigate])

  if (!id) {
    return (
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t('Статья не найдена')}
      </Page>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
    <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
    <Button onClick={onBackToArticlesList}>{t('К списку статей')}</Button>
      <ArticleDetails id={id} />
      <Text title={t('Комментарии')} />
      <AddCommentForm onSendComment={onSendComment}/>
      <CommentList
      isLoading={commentsIsLoading}
        comments={comments}
      />
    </Page>
    </DynamicModuleLoader>
  )
}
export default ArticleDetailsPage
