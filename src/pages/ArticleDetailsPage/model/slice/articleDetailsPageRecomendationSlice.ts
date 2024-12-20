import { createSlice, createEntityAdapter, type PayloadAction } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations'
import { type ArticleDetailsPageRecomendationShcema } from '../types/articleDetailsPageRecomendation'
import { type Article } from 'entities/Article'
const recommendationsAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id
})

export const getArticleRecommendations = recommendationsAdapter.getSelectors(
  (state: StateSchema) =>
    state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState()
)

const articleDetailsPageRecomendationSlice = createSlice({
  name: 'articleDetailsPageRecomendationSlice',
  initialState: recommendationsAdapter.getInitialState<ArticleDetailsPageRecomendationShcema>({
    ids: [],
    entities: {},
    isLoading: false,
    error: undefined
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecommendations.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(
        fetchArticleRecommendations.fulfilled,
        (state, action: PayloadAction<Article[]>) => {
          state.isLoading = false
          recommendationsAdapter.setAll(state, action.payload)
        }
      )
      .addCase(fetchArticleRecommendations.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { reducer: articleDetailsPageRecomendationReducer } = articleDetailsPageRecomendationSlice
