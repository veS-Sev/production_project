import { lazy, Suspense } from 'react'
import { type ArticleRatingProps } from './ArticleRating'
import { Skeleton } from '@/shared/ui/Skeleton'

const ArticleRatingLazy = lazy(async () => await import('./ArticleRating'))

export const ArticleRatingAsync = (props: ArticleRatingProps) => {
  return <Suspense fallback={
    <Skeleton width={'100%'} height={150}/>
  }><ArticleRatingLazy {...props} /></Suspense>
}
