import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlesViewSelector.module.scss'
import { ArticleView } from '../../model/types/article'
import ListIcon from 'shared/assets/icons/list-24-24.svg'
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg'
import { Button } from 'shared/ui/Button'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { Icon } from 'shared/ui/Icon'

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
    <div className={classNames(cls.ArticlesViewSelector, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          onClick={onClick(viewType.view)}
          theme={ButtonTheme.CLEAR}
          key={viewType.view}
        >
            {/* className={classNames('', { [cls.notSelected]: viewType.view !== view })} */}
          <Icon Svg={viewType.icon} className={classNames('', { [cls.notSelected]: viewType.view !== view })}/>
        </Button>
      ))}
    </div>
  )
}
