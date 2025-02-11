import { type Article } from 'entities/Article'
import { rtkApi } from 'shared/api/index'
export const recomendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecomendationsList: build.query<Article[], number>({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit
        }
      })
    })
  })
})

export const useArticleRecomendatonsList = recomendationsApi.useGetArticleRecomendationsListQuery
