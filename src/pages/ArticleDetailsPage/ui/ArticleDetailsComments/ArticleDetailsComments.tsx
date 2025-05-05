import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { AddCommentForm } from '@/features/addCommentForm'
import { Text, TextSize } from '@/shared/ui/Text'
import { CommentList } from '@/entities/Comment'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { Suspense, useCallback } from 'react'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitionalEffect } from '@/shared/lib/hooks/useInitionalEffect/useInitionalEffect'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice'
import { useSelector } from 'react-redux'
import { VStack } from '@/shared/ui/Stack'
import { Loader } from '@/shared/ui/Loader/Loader'

interface ArticleDetailsPageCommentsProps {
  className?: string
  id?: string
}

export const ArticleDetailsComments = (
  props: ArticleDetailsPageCommentsProps
) => {
  const { className, id } = props
  const { t } = useTranslation()
  const comments = useSelector(getArticleComments.selectAll)
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)
  const dispatch = useAppDispatch()
  useInitionalEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
  })

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text))
    },
    [dispatch]
  )

  return (
    <VStack gap={'8'} max
      className={classNames('', {}, [className])}
    >
      <Text
        size={TextSize.L}
        title={t('Комментарии')}
      />
      <Suspense fallback={<Loader/>}>
        <AddCommentForm onSendComment={onSendComment} />
      </Suspense>
      <CommentList isLoading={commentsIsLoading} comments={comments} />
    </VStack>
  )
}
