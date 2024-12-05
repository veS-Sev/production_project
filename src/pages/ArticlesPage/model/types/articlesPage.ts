import { type EntityState } from '@reduxjs/toolkit'
import type { Article, ArticleView } from 'entities/Article'

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean
  error?: string
  view: ArticleView
  _inited?: boolean
  // pagination
  page: number
  hasMore: boolean
  limit?: number
}
