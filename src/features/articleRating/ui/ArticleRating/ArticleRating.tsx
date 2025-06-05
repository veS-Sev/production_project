import { useTranslation } from 'react-i18next'
import { RatingCard } from '@/entities/Rating'
import { useArticleRatig, useRateArticle } from '../../model/api/articleRatingApi'
import { getUserAuthData } from '@/entities/User'
import { useSelector } from 'react-redux'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'
import { useCallback } from 'react'

export interface ArticleRatingProps {
  className?: string
  articleId: string
}

const ArticleRating = (props: ArticleRatingProps) => {
  const { articleId } = props
  const userId = useSelector(getUserAuthData)?.id
  const { data, isLoading, isError } = useArticleRatig({ articleId, userId: userId ?? '' })

  const { t } = useTranslation()
  const [rateArticleMutation] = useRateArticle()
  const handleRateArticle = useCallback((starNumber: number, feedbackText?: string) => {
    try {
      rateArticleMutation({
        userId: userId ?? '',
        articleId,
        rate: starNumber,
        feedbackText
      })
    } catch (e) {
      console.log(e)
    }
  }, [articleId, userId, rateArticleMutation])
  const onCancel = useCallback((starNumber: number) => { handleRateArticle(starNumber) }, [handleRateArticle])

  const onAccept = useCallback((starsCount: number, feedbackText?: string) => {
    handleRateArticle(starsCount, feedbackText)
  }, [handleRateArticle])

  if (isLoading) {
    return <Skeleton height='150' width={'100%'}/>
  }
  const rating = data?.[0]
  if (isError) {
    console.log(isError)
    return <div>{ 'Рейтинг не загружен'}</div>
  }

  return <RatingCard onAccept={onAccept} onCancel={onCancel} title={rating?.rate ? t('Спасибо за оценку') : t('Как вам статья?')} hasFeedback={true} feedbackTitle={t('Оставьте отзыв')} rate={rating?.rate} />
}
export default ArticleRating
