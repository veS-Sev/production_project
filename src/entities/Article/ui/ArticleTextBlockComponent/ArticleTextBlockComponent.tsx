import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleTextBlockComponent.module.scss'
import { memo } from 'react'
import { Text } from '@/shared/ui/Text'
import { type ArticleTextBlock } from '../../model/types/article'
interface ArticleTextBlockComponentProps {
  className?: string
  block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo(
  ({ className, block }: ArticleTextBlockComponentProps) => {
    return (
      <div
        className={classNames(cls.ArticleTextBlockComponent, {}, [className])}
      >
        {block.title && <Text title={block.title} className={cls.title} />}
        {block.paragraphs.map((paragraph) => (
          <Text text={paragraph} key={paragraph} className={cls.paragraph} />
        ))}
      </div>
    )
  }
)
