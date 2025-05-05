import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleImageBlockComponent.module.scss'
import { memo } from 'react'
import { type ArticleImageBlock } from '../../model/types/article'
import { Text, TextAlign } from '@/shared/ui/Text'
interface ArticleImageBlockComponentProps {
  className?: string
  block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo(({ className, block }: ArticleImageBlockComponentProps) => {
  return <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
    <img src={block.src} alt={block.title} className={cls.image}/>
  {block.title && <Text text={block.title} className={cls.imageTitle} align={TextAlign.CENTER}/>}
  </div>
}
)
