import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleDetailsPage.module.scss'
import { ArticleDetails } from '@/entities/Article'
import { useParams } from 'react-router-dom'
import { ArticleRating } from '@/features/articleRating'

import {
  DynamicModuleLoader,
  type ReducersList
} from '@/shared/lib/components/DinamicModuleLoader/DynamicModuleLoader'
import { Page } from '@/widgets/Page'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import { ArticleRecomendationsList } from '@/features/articleRecomendationsList'
import { articleDetailsPageReducers } from '../../model/slice/index'
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments'
export interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducers
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { id } = useParams<{ id: string }>()
  if (!id) {
    return null
  }
  return (
  <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <ArticleRating articleId={id} />
        <ArticleRecomendationsList />
        <ArticleDetailsComments id={id}/>
      </Page>
  </DynamicModuleLoader>
  )
}
export default ArticleDetailsPage
