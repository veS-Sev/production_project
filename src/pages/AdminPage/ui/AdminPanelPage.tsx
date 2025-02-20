import { BugButton } from 'app/providers/ErrorBoundary'
import { memo } from 'react'
import { Page } from 'widgets/Page'
import { useTranslation } from 'react-i18next'

const AdminPanelPage = memo(() => {
  const { t } = useTranslation('admin')
  return (
    <Page>
      <BugButton style ={{ marginRight: '30px' }} />
      {t('Админ страница')}
    </Page>
  )
})

export default AdminPanelPage
