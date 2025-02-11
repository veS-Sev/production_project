import { memo } from 'react'
import { Page } from 'widgets/Page'
import { useTranslation } from 'react-i18next'

const ForbiddenPage = memo(() => {
  const { t } = useTranslation('forbidden')
  return (
    <Page>
      {t('Доступ запрещен')}
    </Page>
  )
})

export default ForbiddenPage
