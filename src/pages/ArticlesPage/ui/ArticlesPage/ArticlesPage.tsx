import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlesPage.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList'
import { type ArticleView } from 'entities/Article/model/types/article'
import {
  articlesPageActions,
  articlesPageReducer,
  getArticles
} from '../../model/slice/articlesPageSlice'
import {
  DynamicModuleLoader,
  type ReducersList
} from 'shared/lib/components/DinamicModuleLoader/DynamicModuleLoader'
import { useInitionalEffect } from 'shared/lib/hooks/useInitionalEffect/useInitionalEffect'
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors'
import { ArticlesViewSelector } from 'entities/Article/index'
import { Page } from 'shared/ui/Page'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
interface ArticlesPageProps {
  className?: string
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesPageIsLoading)
  const view = useSelector(getArticlesPageView)
  const error = useSelector(getArticlesPageError)

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view))
    },
    [dispatch]
  )

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage())
  }, [dispatch])

  useInitionalEffect(() => {
    dispatch(articlesPageActions.initState())
    dispatch(
      fetchArticlesList({
        page: 1
      })
    )
  })

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page
        onScrollEnd={onLoadNextPart}
        className={classNames(cls.ArticlesPage, {}, [className])}
      >
        <ArticlesViewSelector onViewClick={onChangeView} view={view} />
        {t('Статьи')}
        <ArticleList view={view} isLoading={isLoading} articles={articles} />
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
