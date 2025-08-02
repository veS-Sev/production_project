import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticlesPage.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import {
  articlesPageReducer
} from '../../model/slice/articlesPageSlice'
import {
  DynamicModuleLoader,
  type ReducersList
} from '@/shared/lib/components/DinamicModuleLoader/DynamicModuleLoader'
import { useInitionalEffect } from '@/shared/lib/hooks/useInitionalEffect/useInitionalEffect'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Page } from '@/widgets/Page'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters'
import { useSearchParams } from 'react-router-dom'
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList'
interface ArticlesPageProps {
  className?: string
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props
  useTranslation()
  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams()

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage())
  }, [dispatch])

  useInitionalEffect(() => {
    dispatch(initArticlesPage(searchParams))
  })

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page
        data-testid={'ArticlesPage'}
        onScrollEnd={onLoadNextPart}
        className={classNames(cls.ArticlesPage, {}, [className])}
      >
        <ArticlesPageFilters/>
        <ArticleInfiniteList/>
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
