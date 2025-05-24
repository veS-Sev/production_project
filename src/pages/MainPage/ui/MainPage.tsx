import { memo } from 'react'
import { Page } from '@/widgets/Page'
import { useTranslation } from 'react-i18next'
import { RatingCard } from '@/entities/Rating/ui/RatingCard/RatingCard'

const MainPage = memo(() => {
  const { t } = useTranslation('main')
  return (
    <Page>
      {t('Главная страница')}
      <RatingCard title={t('Как вам статья?')} hasFeedback={ true} feedbackTitle={t('Оставьте отзыв')} />
    </Page>
  )
})

export default MainPage
