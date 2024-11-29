import { type EntityState } from '@reduxjs/toolkit'
import type { Article, ArticleView } from 'entities/Article'

export interface ArticlesPageShcema extends EntityState<Article> {
  isLoading?: boolean
  error?: string
  view: ArticleView
}
