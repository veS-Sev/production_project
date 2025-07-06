import { memo } from 'react'
import { Page } from '@/widgets/Page'
import { useTranslation } from 'react-i18next'
import { Counter } from '@/entities/Counter'

const MainPage = memo(() => {
  const { t } = useTranslation('main')
  return (
    <Page data-testid={'MainPage'}>
      {t('Главная страница')}
      <Counter/>

    </Page>
  )
})

export default MainPage
