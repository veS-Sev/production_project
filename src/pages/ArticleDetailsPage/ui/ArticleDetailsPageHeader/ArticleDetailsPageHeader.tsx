import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleDetailsPageHeader.module.scss'
import { Button } from '@/shared/ui/Button'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { RouterPath } from '@/shared/const/route'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getArticleDetailsData } from '@/entities/Article'
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
    navigate(RouterPath.articles)
  }, [navigate])

  const onEditArticle = useCallback(() => {
    navigate(`${RouterPath.article_details}${article?.id}/edit`)
  }, [navigate, article?.id])

  return (
    <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
      <Button onClick={onBackToArticlesList}>{t('К списку статей')}</Button>
      <Button onClick={onEditArticle} className={cls.editBtn}>{t('Редактировать') }</Button>
    </div>
  )
}
