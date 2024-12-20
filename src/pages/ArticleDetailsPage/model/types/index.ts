import { type ArticleDetailsCommentsSchema } from '../types/articleDetailsPageComments'
import { type ArticleDetailsPageRecomendationShcema } from '../types/articleDetailsPageRecomendation'

export interface ArticleDetailsPageSchema {
  comments: ArticleDetailsCommentsSchema
  recommendations: ArticleDetailsPageRecomendationShcema
}
