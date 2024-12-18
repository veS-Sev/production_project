import { ArticleDetailsCommentsShcema } from '../types/articleDetailsPageComments'
import { ArticleDetailsPageRecomendationShcema } from '../types/articleDetailsPageRecomendation'

export interface ArticleDetailsPageSchema {
  comments: ArticleDetailsCommentsShcema
  recommendations: ArticleDetailsPageRecomendationShcema
}
