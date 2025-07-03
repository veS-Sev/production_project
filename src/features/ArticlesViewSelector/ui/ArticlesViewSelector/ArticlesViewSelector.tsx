import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticlesViewSelector.module.scss'
import ListIcon from '@/shared/assets/icons/list-24-24.svg'
import TiledIcon from '@/shared/assets/icons/tiled-24-24.svg'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { Icon } from '@/shared/ui/Icon'
import { HStack } from '@/shared/ui/Stack'
import { ArticleView } from '@/entities/Article'

interface ArticlesViewSelectorProps {
  className?: string
  view: ArticleView
  onViewClick: (view: ArticleView) => void
}

const viewTypes = [
  { view: ArticleView.SMALL, icon: TiledIcon },
  { view: ArticleView.BIG, icon: ListIcon }
]
export const ArticlesViewSelector = (props: ArticlesViewSelectorProps) => {
  const { className, view, onViewClick } = props
  const onClick = (newView: ArticleView) => {
    return () => onViewClick?.(newView)
  }

  return (
    <HStack align={'center'} className={classNames(cls.ArticlesViewSelector, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          onClick={onClick(viewType.view)}
          theme={ButtonTheme.CLEAR}
          key={viewType.view}
        >
          <Icon Svg={viewType.icon} className={classNames(cls.icon, { [cls.notSelected]: viewType.view !== view })}/>
        </Button>
      ))}
    </HStack>
  )
}
