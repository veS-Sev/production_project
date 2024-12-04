import { classNames } from 'shared/lib/classNames/classNames'
import { useSelector } from 'react-redux'
import cls from './ArticleDetails.module.scss'
import {
  DynamicModuleLoader,
  type ReducersList
} from 'shared/lib/components/DinamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from '../../model/slices/articleDetailsSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Text, TextAlign, TextSize } from 'shared/ui/Text'
import { memo, useCallback } from 'react'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import {
  getArticleDetailsData,
  getArticleDetailsIsLoading,
  getArticleDetailsError
} from '../../model/selectors/articleDetails'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { Avatar } from 'shared/ui/Avatar'
import EyeIcon from 'shared/assets/icons/eye-20-20.svg'
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg'
import { Icon } from 'shared/ui/Icon'
import { AtricleBlockType, type ArticleBlock } from '../../index'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import { useInitionalEffect } from 'shared/lib/hooks/useInitionalEffect/useInitionalEffect'
import { useTranslation } from 'react-i18next'
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
  const isLoading = useSelector(getArticleDetailsIsLoading)
  const article = useSelector(getArticleDetailsData)
  const error = useSelector(getArticleDetailsError)

  useInitionalEffect(() => { dispatch(fetchArticleById(id)) })

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case AtricleBlockType.CODE:
        return <ArticleCodeBlockComponent key={block.id} block={block} />
      case AtricleBlockType.IMAGE:
        return <ArticleImageBlockComponent key={block.id} block={block} />
      case AtricleBlockType.TEXT:
        return <ArticleTextBlockComponent key={block.id} block={block} />
      default:
        return null
    }
  }, [])
  let content

  if (isLoading) {
    content = (
      <>
        <Skeleton
          className={cls.avatar}
          width={200}
          height={200}
          border={'50%'}
        />
        <Skeleton className={cls.title} width={300} height={24} />
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton
          className={cls.skeleton}
          width={'100%'}
          height={300}
          border={'0%'}
        />
        <Skeleton
          className={cls.skeleton}
          width={'100%'}
          height={300}
          border={'0%'}
        />
      </>
    )
  } else if (error) {
    content = (
      <Text
        align={TextAlign.CENTER}
        title={t('Произошла ошибка при загрузке статьи')}
      />
    )
  } else {
    content = (
      <>
        <div className={cls.avatarWrapper}>
          <Avatar
            size={200}
            src={article?.img}
            alt={'Аватар'}
            className={cls.avatar}
          />
        </div>
        <Text
          size={TextSize.L}
          title={article?.title}
          text={article?.subtitle}
        />
        <div className={cls.articleInfo}>
          <Icon Svg={EyeIcon} className={cls.icon} />
          <Text text={String(article?.views)} />
        </div>
        <div className={cls.articleInfo}>
          <Icon Svg={CalendarIcon} className={cls.icon} />
          <Text text={article?.createdAt} />
        </div>
        {article?.blocks?.map(renderBlock)}
      </>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
      <div className={classNames(cls.ArticleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  )
})
