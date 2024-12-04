import { memo } from 'react'
import { Page } from 'shared/ui/Page'
import { useTranslation } from 'react-i18next'

const AboutPage = memo(() => {
  const { t } = useTranslation('translation')
  return (
        <Page>{t('О сайте')}
        </Page>
  )
})

export default AboutPage
