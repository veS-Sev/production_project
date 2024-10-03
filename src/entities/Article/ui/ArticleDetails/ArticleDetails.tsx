import { classNames } from 'shared/lib/classNames/classNames'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import cls from './ArticleDetails.module.scss'
import {
  DynamicModuleLoader,
  type ReducersList
} from 'shared/lib/components/DinamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from '../../model/slices/articleDetailsSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Text, TextAlign } from 'shared/ui/Text'
import { useEffect, memo } from 'react'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import {
  getArticleDetailsData,
  getArticleDetailsIsLoading,
  getArticleDetailsError
} from '../../model/selectors/articleDetails'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'

interface ArticleDetailsProps {
  className?: string
  id: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer
}
export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const { t } = useTranslation('articles')
  const dispatch = useAppDispatch()
  const isLoading = true
  // const isLoading = useSelector(getArticleDetailsIsLoading)
  const article = useSelector(getArticleDetailsData)
  const error = useSelector(getArticleDetailsError)

  useEffect(() => {
    dispatch(fetchArticleById(id))
  }, [dispatch, id])

  let content

  if (isLoading) {
    content = <div><Skeleton className={cls.avatar} width={200} height={200} border={'50%'}/>
      <Skeleton className={cls.title} width={300} height={24}/>
      <Skeleton className={cls.skeleton} width={600} height={24}/>
      <Skeleton className={cls.skeleton} width={'100%'} height={300} border={'0%'}/>
      <Skeleton className={cls.skeleton} width={'100%'} height={300} border={'0%'}/></div>
  } else if (error) {
    content = <Text align={TextAlign.CENTER} title={t('Произошла ошибка при загрузке статьи')} />
  } else {
    content = <div>ArticleDetails</div>
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
      <div className={classNames(cls.ArticleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  )
})
