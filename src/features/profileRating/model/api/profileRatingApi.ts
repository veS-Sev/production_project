import { type Rating } from '@/entities/Rating'
import { rtkApi } from '@/shared/api/index'

interface GetProfileRating {
  userId: string
  profileId: string
}

export interface RateProfileArgs {
  userId: string
  profileId: string
  rate: number
  feedbackText?: string
}
export const profileRatigApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRatig: build.query<Rating[], GetProfileRating>({
      query: ({ userId, profileId }) => ({
        url: '/profile-ratings',
        params: {
          userId,
          profileId
        }
      })
    }),
    rateArticle: build.mutation<void, RateProfileArgs>({
      query: (arg: RateProfileArgs) => ({
        url: '/profile-ratings',
        method: 'POST',
        body: arg
      })
    })
  })
})

export const useProfileRatig = profileRatigApi.useGetArticleRatigQuery
export const useRateProfile = profileRatigApi.useRateArticleMutation
