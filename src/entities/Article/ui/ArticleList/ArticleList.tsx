import { classNames } from 'shared/lib/classNames/classNames'
import {
  List,
  WindowScroller,
  type ListRowProps
} from 'react-virtualized'
import { type HTMLAttributeAnchorTarget, memo } from 'react'
import cls from './ArticleList.module.scss'
import { type Article, ArticleView } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItemSkeleton/ArticleListItemSkeleton'
import { Text, TextSize } from 'shared/ui/Text'
import { PAGE_ID } from 'widgets/Page'
interface ArticleListProps {
  className?: string
  articles: Article[]
  view?: ArticleView
  isLoading?: boolean
  target?: HTMLAttributeAnchorTarget
}

const getSceletons = (view: ArticleView) => {
  return new Array(view === ArticleView.BIG ? 3 : 9)
    .fill(0)
    .map((item, index) => <ArticleListItemSkeleton view={view} key={index} />)
}

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    view = ArticleView.SMALL,
    articles,
    isLoading,
    target
  } = props

  const isBig = view === ArticleView.BIG
  const itemsPerRow = isBig ? 1 : 3
  const rowCount = isBig
    ? articles.length
    : Math.ceil(articles.length / itemsPerRow)

  if (!isLoading && articles.length === 0) {
    return <Text title={'Статьи не найдены'} size={TextSize.L} />
  }

  const rowRender = ({ index, isScrolling, key, style }: ListRowProps) => {
    console.log('@scroll Articles list')
    const items = []
    const fromIndex = index * itemsPerRow
    // константа с индексом, которым ограничиваемся
    const toIndex = Math.min(fromIndex + itemsPerRow, articles.length)

    for (let i = fromIndex; i < toIndex; i += 1) {
      items.push(
        <ArticleListItem
          target={target}
          className={cls.card}
          key={articles[i]?.id}
          view={view}
          article={articles[i]}
        />
      )
    }

    return <div key={key} style={style} className={cls.row}>{items}</div>
  }

  return (
    <WindowScroller
      // onScroll={() => console.log('@scroll')}
      scrollElement={document.getElementById(PAGE_ID) as Element}
      // width={700}
    >
      {({
        height,
        width,
        registerChild,
        onChildScroll,
        isScrolling,
        scrollTop
      }) => (
        <div
          className={classNames(cls.ArticleList, {}, [cls[view], className])}
          ref={registerChild}
        >{width}
          <List
            autoHeight
            height={height ?? 700}
            rowCount={rowCount}
            rowHeight={isBig ? 700 : 330 }
            rowRenderer={rowRender}
            width={width ? width - 80 : 700}
            onScroll={onChildScroll}
            isScrolling={isScrolling}
            scrollTop={scrollTop}
          />
          {isLoading && getSceletons(view)}
        </div>
      )}
    </WindowScroller>
  )
})
