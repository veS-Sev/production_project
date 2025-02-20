import { useTranslation } from 'react-i18next'
import { Tabs, type TabItem } from 'shared/ui/Tabs/Tabs'
import { memo, useCallback, useMemo } from 'react'
import { ArticleType } from '../../model/consts/consts'

interface ArticleTypeTabsProps {
  className?: string
  value: ArticleType
  onChangeType: (type: ArticleType) => void
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const { value, onChangeType } = props
  const { t } = useTranslation('articles')
  const typeTabs = useMemo<TabItem[]>(
    () => [
      { value: ArticleType.ALL, content: t('Все') },
      { value: ArticleType.ECONOMICS, content: t('Экономика') },
      { value: ArticleType.IT, content: t('Айти') },
      { value: ArticleType.SCIENCE, content: t('Наука') }
    ],
    [t]
  )
  const onClickTab = useCallback((tab: TabItem) => {
    onChangeType(tab.value as ArticleType)
  }, [onChangeType])
  return <Tabs onClickTab={onClickTab} tabs={typeTabs} value={value}/>
}
)
