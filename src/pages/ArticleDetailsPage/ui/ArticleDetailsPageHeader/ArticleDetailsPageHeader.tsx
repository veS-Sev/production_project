import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleDetailsPageHeader.module.scss'
import { Button } from '@/shared/ui/Button'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getArticleDetailsData } from '@/entities/Article'
import { getRouteArticles, getRouteArticleDetails } from '@/shared/const/route'
interface ArticleDetailsPageHeaderProps {
  className?: string
}

export const ArticleDetailsPageHeader = (
  props: ArticleDetailsPageHeaderProps
) => {
  const { className } = props
  const navigate = useNavigate()
  const { t } = useTranslation('articles')
  // const canEdit = useSelector(getCanEditArticle)
  const article = useSelector(getArticleDetailsData)
  const onBackToArticlesList = useCallback(() => {
    navigate(getRouteArticles())
  }, [navigate])

  const onEditArticle = useCallback(() => {
    if (article) {
      navigate(getRouteArticleDetails(article.id))
    }
  }, [navigate, article])

  return (
    <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
      <Button onClick={onBackToArticlesList}>{t('К списку статей')}</Button>
      <Button onClick={onEditArticle} className={cls.editBtn}>{t('Редактировать') }</Button>
    </div>
  )
}
