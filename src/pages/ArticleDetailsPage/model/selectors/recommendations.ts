import { type StateSchema } from '@/app/providers/StoreProvider'
export const getArticleRecommendationsIsLoading = (state: StateSchema) =>
  state.articleDetailsPage?.recommendations?.isLoading || undefined
export const getArticleRecommendationsError = (state: StateSchema) =>
  state.articleDetailsPage?.recommendations?.error
