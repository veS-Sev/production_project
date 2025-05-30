import { useTranslation } from 'react-i18next'
import { RatingCard } from '@/entities/Rating'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { useProfileRatig, useRateProfile } from '../../model/api/profileRatingApi'
import { useCallback } from 'react'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'

interface ProfileRatingProps {
  className?: string
  profileId: string
}

export const ProfileRating = (props: ProfileRatingProps) => {
  const { profileId } = props
  const { t } = useTranslation()
  const [rateProfileMuration] = useRateProfile()
  const userId = useSelector(getUserAuthData)?.id
  const { data, isLoading, isError } = useProfileRatig({ profileId, userId: userId ?? '' })
  const rating = data?.[0]
  const handleRateProfile = useCallback((starNumber: number, feedbackText?: string) => {
    try {
      rateProfileMuration({ rate: starNumber, feedbackText, profileId, userId: userId ?? '' })
    } catch (e) {
      console.log(e)
    }
  }, [profileId, rateProfileMuration, userId])
  const onAccept = useCallback((starNumber: number, feedbackText?: string) => {
    handleRateProfile(starNumber, feedbackText)
  }, [handleRateProfile])
  const onCancel = useCallback((starNumber: number) => {
    handleRateProfile(starNumber)
  }, [handleRateProfile])

  if (isError) {
    console.log(isError)
  }
  if (!userId || isError) {
    return <div>{'Рейтинг не загружен'}</div>
  }

  if (isLoading) {
    return <Skeleton height={150} width={'100%'} />
  }

  return <RatingCard hasFeedback={false} title={rating?.rate ? t('Спасибо за оценку') : t('Оцените профиль')} onCancel={onCancel} onAccept={onAccept} rate={rating?.rate} feedbackTitle={'Давайте оценим этот профиль'} />
}
