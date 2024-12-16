import { type EntityState } from '@reduxjs/toolkit'
import type { Article, ArticleView, ArticleSortField, ArticleType } from 'entities/Article'
import { type SortOrder } from 'shared/types'

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean
  error?: string
  view: ArticleView
  // pagination
  page: number
  hasMore: boolean
  limit?: number
  // sort
  order: SortOrder
  sort: ArticleSortField
  search: string
  type: ArticleType

  _inited?: boolean
}
