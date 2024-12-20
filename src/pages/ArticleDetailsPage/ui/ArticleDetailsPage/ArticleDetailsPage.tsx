import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailsPage.module.scss'
import { useTranslation } from 'react-i18next'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useCallback } from 'react'
import { AddCommentForm } from 'features/addCommentForm'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router-dom'
import { Text, TextSize } from 'shared/ui/Text'
import { CommentList } from 'entities/Comment'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DinamicModuleLoader/DynamicModuleLoader'
import { useSelector } from 'react-redux'
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice'
import { getArticleCommentsIsLoading, getArticleCommentsError } from 'pages/ArticleDetailsPage/model/selectors/comments'
import { useInitionalEffect } from 'shared/lib/hooks/useInitionalEffect/useInitionalEffect'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { Page } from 'widgets/Page'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import { getArticleRecommendationsIsLoading, getArticleRecommendationsError } from '../../model/selectors/recommendations'
import { getArticleRecommendations } from '../../model/slice/articleDetailsPageRecomendation.slice'
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList'
import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations'
import { articleDetailsPageReducers } from '../../model/slice/index'
export interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducers
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('articles')
  const { id } = useParams<{ id: string }>()
  const comments = useSelector(getArticleComments.selectAll)
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)
  const commentsError = useSelector(getArticleCommentsError)
  const recommendations = useSelector(getArticleRecommendations.selectAll)
  const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading)
  const recommendationsError = useSelector(getArticleRecommendationsError)
  const dispatch = useAppDispatch()
  useInitionalEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
    dispatch(fetchArticleRecommendations())
  })

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text))
  }, [dispatch])

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
    <ArticleDetailsPageHeader/>
      <ArticleDetails id={id} />
      <Text size={TextSize.L} title={t('Рекомендации')} className={cls.recommendationsTitle}/>
      <ArticleList target={'_blank'} articles={recommendations} isLoading={recommendationsIsLoading} className={cls.recommendations}/>
      <Text size={TextSize.L} title={t('Комментарии')} className={cls.commentTitle}/>
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
