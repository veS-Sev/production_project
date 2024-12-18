import { combineReducers } from '@reduxjs/toolkit'
import { type ArticleDetailsPageSchema } from '../types'
import { articleDetailsPageRecomendationReducer } from './articleDetailsPageRecomendation.slice'
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice'

export const articleDetailsPageReducers =
  combineReducers<ArticleDetailsPageSchema>({
    recommendations: articleDetailsPageRecomendationReducer,
    comments: articleDetailsCommentsReducer
  })
