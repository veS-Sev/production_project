import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleRecomendationsList.module.scss'
import { useTranslation } from 'react-i18next'
import { useArticleRecomendatonsList } from '../../model/api/api'
import { memo } from 'react'
import { ArticleList } from '@/entities/Article/ui/ArticleList/ArticleList'
import { Text, TextSize } from '@/shared/ui/Text'
import { VStack } from '@/shared/ui/Stack'

interface ArticleRecomendationsListProps {
  className?: string
}

export const ArticleRecomendationsList = memo(
  (props: ArticleRecomendationsListProps) => {
    const { className } = props
    const { t } = useTranslation()
    const { isLoading, data: articles, error } = useArticleRecomendatonsList(3)
    if (isLoading || error || !articles) {
      return null
    }
    console.log('@data: articles', articles)
    return (
      <VStack gap='8'
        className={classNames('', {}, [className])}
      >
        <Text
          size={TextSize.L}
          title={t('Рекомендации')}
        />
        <ArticleList
          target={'_blank'}
          articles={articles}
          isLoading={isLoading}
          className={classNames(cls.recommendationsWrapper)}
        />
      </VStack>
    )
  }
)
