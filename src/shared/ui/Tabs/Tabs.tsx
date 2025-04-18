import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Tabs.module.scss'
import { useCallback, type ReactNode, memo } from 'react'
import { CapdTheme, Card } from '../Card'

export interface TabItem {
  value: string
  content: ReactNode
}

interface TabsProps {
  className?: string
  onClickTab: (tab: TabItem) => void
  tabs: TabItem[]
  value: string
}

export const Tabs = memo((props: TabsProps) => {
  const { className, onClickTab, tabs, value } = props

  const clickHandle = useCallback(
    (tab: TabItem) => {
      return () => {
        onClickTab(tab)
      }
    },
    [onClickTab]
  )

  return (
    <div className={classNames(cls.Tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          cardTheme={
            tab.value === value ? CapdTheme.NORMAL : CapdTheme.OUTLINED
          }
          key={tab.value}
          onClick={clickHandle(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  )
})
