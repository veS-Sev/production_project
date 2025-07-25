import { memo } from 'react'
import { Page } from '@/widgets/Page'
import { useTranslation } from 'react-i18next'

const AboutPage = memo(() => {
  const { t } = useTranslation('translation')
  return (
    <Page data-testid={'AboutPage'}>
      {t('О сайте')}
        </Page>
  )
})

export default AboutPage
