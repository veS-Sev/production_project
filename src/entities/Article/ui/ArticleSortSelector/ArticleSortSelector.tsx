import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleSortSelector.module.scss'
import { useTranslation } from 'react-i18next'
import { type SelectOption } from 'shared/ui/Select/index'
import { memo, useCallback, useMemo } from 'react'
import { Select } from 'shared/ui/Select'
import { ArticleSortField } from '../../model/types/article'
import { type SortOrder } from 'shared/types'
interface ArticleSortSelectorProps {
  className?: string
  order: SortOrder
  sort: ArticleSortField
  onChangeOrder: (newOrder: SortOrder) => void
  onChangeSortField: (newSortField: ArticleSortField) => void
}

export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
  const { t } = useTranslation('articles')
  const { className, order, sort, onChangeOrder, onChangeSortField } = props
  const orderOptions = useMemo<SelectOption<SortOrder>[]>(
    () => [
      { value: 'asc', content: t('возрастанию') },
      { value: 'desc', content: t('убыванию') }
    ],
    [t]
  )

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
    () => [
      { value: ArticleSortField.CREATED, content: t('созданию') },
      { value: ArticleSortField.TITLE, content: t('названию') },
      { value: ArticleSortField.VIEWS, content: t('просмотрам') }
    ],
    [t]
  )

  return (
    <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
      <Select
        onChange={onChangeSortField}
        value={sort}
        options={sortFieldOptions}
        label={t('Сортировать по')}
      />
      <Select
        onChange={onChangeOrder}
        value={order}
        options={orderOptions}
        label={t('по')}
        className={classNames(cls.order)}
      />
    </div>
  )
}
