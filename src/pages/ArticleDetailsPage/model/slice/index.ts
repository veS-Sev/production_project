import { combineReducers } from '@reduxjs/toolkit'
import { type ArticleDetailsPageSchema } from '../types'
import { articleDetailsPageRecomendationReducer } from './articleDetailsPageRecomendationSlice'
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slice/articleDetailsCommentsSlice'

export const articleDetailsPageReducers =
  combineReducers<ArticleDetailsPageSchema>({
    recommendations: articleDetailsPageRecomendationReducer,
    comments: articleDetailsCommentsReducer
  })
