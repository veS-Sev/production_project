import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticlesPageFilters.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import {
  getArticlesPageView,
  getArticlesPageSort,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageType
} from '../../model/selectors/articlesPageSelectors'
import { type ArticleSortField, ArticlesViewSelector, type ArticleType, type ArticleView } from '@/entities/Article'
import { articlesPageActions } from '../../model/slice/articlesPageSlice'
import { ArticleSortSelector, ArticleTypeTabs } from '@/entities/Article'
import { Card } from '@/shared/ui/Card'
import { Input } from '@/shared/ui/Input'
import { type SortOrder } from '@/shared/types/SortOrder'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebaunce'
import { HStack, VStack } from '@/shared/ui/Stack'

interface ArticlesPageFiltersProps {
  className?: string
}

export const ArticlesPageFilters = memo(
  ({ className }: ArticlesPageFiltersProps) => {
    const dispatch = useAppDispatch()
    const view = useSelector(getArticlesPageView)
    const { t } = useTranslation('articles')
    const order = useSelector(getArticlesPageOrder)
    const sort = useSelector(getArticlesPageSort)
    const search = useSelector(getArticlesPageSearch)
    const type = useSelector(getArticlesPageType)
    console.log('@@@type', type)
    const fetchData = useCallback(() => {
      dispatch(fetchArticlesList({ replace: true }))
    }, [dispatch])

    const debounceOnChange = useDebounce(fetchData, 500)
    const onChangeView = useCallback(
      (view: ArticleView) => {
        dispatch(articlesPageActions.setView(view))
      },
      [dispatch]
    )

    const onChangeOrder = (newOrder: SortOrder) => {
      dispatch(articlesPageActions.setOrder(newOrder))
      dispatch(articlesPageActions.setPage(1))
      fetchData()
    }
    const onChangeSortField = (newSortField: ArticleSortField) => {
      dispatch(articlesPageActions.setSort(newSortField))
      dispatch(articlesPageActions.setPage(1))
      fetchData()
    }

    const onChangeSearch = (newSortField: string) => {
      dispatch(articlesPageActions.setSearch(newSortField))
      dispatch(articlesPageActions.setPage(1))
      debounceOnChange()
    }

    const onChangeType = (type: ArticleType) => {
      dispatch(articlesPageActions.setType(type))
      dispatch(articlesPageActions.setPage(1))
      fetchData()
    }

    return (
      <VStack gap={'16'} max className={classNames(cls.ArticlesPageFilters, {}, [className])}>
        <HStack max className={classNames(cls.sortWrapper)}>
          <ArticleSortSelector
            order={order}
            sort={sort}
            onChangeOrder={onChangeOrder}
            onChangeSortField={onChangeSortField}
          />
          <ArticlesViewSelector onViewClick={onChangeView} view={view} />
        </HStack>
        <Card className={classNames(cls.inputCard)}>
          <Input
            value={search}
            onChange={onChangeSearch}
            placeholder={t('Поиск')}
          />
        </Card>
        <ArticleTypeTabs onChangeType={onChangeType} value={type} />
      </VStack>
    )
  }
)
