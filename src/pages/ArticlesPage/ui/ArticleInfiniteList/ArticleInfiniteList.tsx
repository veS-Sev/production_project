import { useTranslation } from 'react-i18next'
import { ArticleList } from '@/entities/Article'
import {
  getArticlesPageIsLoading,
  getArticlesPageView,
  getArticlesPageError
  , getArticlesPageLimit
} from '../../model/selectors/articlesPageSelectors'
import { getArticles } from '../../model/slice/articlesPageSlice'
import { useSelector } from 'react-redux'
import { VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text/index'

interface ArticleInfiniteListProps {
  className?: string
}

export const ArticleInfiniteList = (props: ArticleInfiniteListProps) => {
  // const limit = useSelector(getArticlesPageLimit)
  const { t } = useTranslation()
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesPageIsLoading)
  const view = useSelector(getArticlesPageView)
  const error = useSelector(getArticlesPageError)

  if (error) {
    return (
      <Text title={'Статьи не были загружены'}/>
    )
  }

  return (
    <VStack max gap={'8'}>
      <Text title={t('Статьи')}/>
      <ArticleList view={view} isLoading={isLoading} articles={articles} />
    </VStack>
  )
}
