import { classNames } from '@/shared/lib/classNames/classNames'
import { List, WindowScroller, type ListRowProps } from 'react-virtualized'
import { type HTMLAttributeAnchorTarget, memo } from 'react'
import cls from './ArticleList.module.scss'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItemSkeleton/ArticleListItemSkeleton'
import { Text, TextSize } from '@/shared/ui/Text'
import { PAGE_ID } from '@/widgets/Page'
import { ArticleView } from '../../model/consts/consts'
import { type Article } from '../../model/types/article'
import { HStack } from '@/shared/ui/Stack'

interface ArticleListProps {
  className?: string
  articles: Article[]
  view?: ArticleView
  isLoading?: boolean
  target?: HTMLAttributeAnchorTarget
  virtualized?: boolean
  //
  label?: any
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
    target,
    virtualized = true
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

    return (
      <HStack gap={'16'} key={key} style={style} className={cls.row}>
        {items}
      </HStack>
    )
  }

  return (
    <WindowScroller
      scrollElement={document.getElementById(PAGE_ID) as Element}
    >
      {({
        height,
        width,
        registerChild,
        onChildScroll,
        isScrolling,
        scrollTop
      }) => (
        <HStack
          className={classNames(cls.ArticleList, {}, [cls[view], className])}
          // ref={registerChild}
        >
          {virtualized
            ? (<List
              autoHeight
              height={height ?? 700}
              rowCount={rowCount}
              rowHeight={isBig ? 700 : 330}
              rowRenderer={rowRender}
              width={width ? width - 80 : 700}
              onScroll={onChildScroll}
              isScrolling={isScrolling}
              scrollTop={scrollTop}
            />
              )
            : (articles.map((article) => <ArticleListItem
            className={cls.card} article={article} view={view} target={target} key={article.id}/>)
              )}

          {isLoading && getSceletons(view)}
        </HStack>
      )}
    </WindowScroller>
  )
})
