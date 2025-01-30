import { BugButton } from 'app/providers/ErrorBoundary'
import { memo } from 'react'
import { Page } from 'widgets/Page'
import { useTranslation } from 'react-i18next'

const MainPage = memo(() => {
  const { t } = useTranslation('main')
  return (
    <Page>
      <BugButton />
      {t('Главная страница')}
    </Page>
  )
})

export default MainPage
