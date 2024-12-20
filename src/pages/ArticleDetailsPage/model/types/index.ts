import { type ArticleDetailsCommentsShcema } from '../types/articleDetailsPageComments'
import { type ArticleDetailsPageRecomendationShcema } from '../types/articleDetailsPageRecomendation'

export interface ArticleDetailsPageSchema {
  comments: ArticleDetailsCommentsShcema
  recommendations: ArticleDetailsPageRecomendationShcema
}
