import { rtkApi } from 'shared/api/index'
export const recomendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecomendationsList: build.query({
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
