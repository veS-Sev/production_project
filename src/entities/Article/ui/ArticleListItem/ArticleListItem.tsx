import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleListItem.module.scss'
import { Icon } from '@/shared/ui/Icon'
import Eye from '@/shared/assets/icons/eye-20-20.svg'
import { Card } from '@/shared/ui/Card'
import { Text } from '@/shared/ui/Text'
import { useHover } from '@/shared/lib/hooks/useHover/useHover'
import { Avatar } from '@/shared/ui/Avatar'
import { Button } from '@/shared/ui/Button'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { type HTMLAttributeAnchorTarget } from 'react'
import { getRouteArticleDetails } from '@/shared/const/route'
import { useTranslation } from 'react-i18next'
import { AppLink } from '@/shared/ui/AppLink'
import { ArticleView, ArticleBlockType } from '../../model/consts/consts'
import { type Article } from '../../model/types/article'

interface ArticleListItemProps {
  className?: string
  article: Article
  view: ArticleView
  target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem = (props: ArticleListItemProps) => {
  const { className, article, view, target } = props
  const { t } = useTranslation('articles')
  const [isHover, bindHover] = useHover()

  const textBlock = article.blocks.find(block => block.type === ArticleBlockType.TEXT)!

  const types = (
    <Text text={article.type.join(', ')} className={classNames(cls.types)} />
  )
  const views = (
    <>
      <Text text={String(article.views)} className={classNames(cls.views)} />
      <Icon className={classNames(cls.viewsIcon)} Svg={Eye} />
    </>
  )

  if (view === ArticleView.BIG) {
    return (
      <div
        {...bindHover}
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <Card className={classNames(cls.card)}>
          <div className={classNames(cls.header)}>
            <Avatar
              size={30}
              alt={article.user.username}
              src={article.user.avatar}
            />
            <Text
              text={article.user.username}
              className={classNames(cls.username)}
            />
            <Text text={article.createdAt} className={classNames(cls.date)} />
          </div>
          <Text title={article.subtitle} className={classNames(cls.title)} />
          {types}
          <img src={article.img} className={classNames(cls.image)} />
          {textBlock && (<ArticleTextBlockComponent block={textBlock} className={classNames(cls.textBlock)}/>)}
          <div className={classNames(cls.footer)}>
            <AppLink to = {
      getRouteArticleDetails(article.id)
    } target={target}> <Button>{t('Читать далее')}</Button></AppLink>
            {views}
          </div>
        </Card>
      </div>
    )
  }
  return (
    <AppLink to = {
      getRouteArticleDetails(article.id)
    } target= {target}
      {...bindHover}
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
    >
      <Card className={classNames(cls.card)} >
        <div className={classNames(cls.imageWrapper)}>
          <img
            src={article.img}
            alt={article.subtitle}
            className={classNames(cls.image)}
          />
          <Text text={article.createdAt} className={classNames(cls.date)} />
        </div>
        <div className={classNames(cls.imfoWrapper)}>
          {types}
          {views}
        </div>
        <Text text={article.subtitle} className={classNames(cls.title)} />
      </Card>
    </AppLink>
  )
}
