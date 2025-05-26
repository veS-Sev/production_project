import { type Rating } from '@/entities/Rating'
import { rtkApi } from '@/shared/api/index'

interface GetArticleRating {
  userId: string
  articleId: string
}

interface RateArticleArgs {
  userId: string
  articleId: string
  rate: number
  feedbackText?: string
}
export const articleRatigApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRatig: build.query<Rating[], GetArticleRating>({
      query: ({ userId, articleId }) => ({
        url: '/article-ratings',
        params: {
          userId,
          articleId
        }
      })
    }),
    rateArticle: build.mutation<void, RateArticleArgs >({
      query: (arg: RateArticleArgs) => ({
        url: '/article-ratings',
        method: 'POST',
        body: arg
      })
    })
  })
})

export const useArticleRatig = articleRatigApi.useGetArticleRatigQuery
export const useRateArticle = articleRatigApi.useRateArticleMutation
