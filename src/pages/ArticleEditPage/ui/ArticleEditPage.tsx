import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { Page } from '@/widgets/Page'

interface ArticleEditPageProps {
  className?: string
}

const ArticleEditPage = () => {
  const { id } = useParams<{ id: string }>()
  const isEdit = Boolean(id)
  const { t } = useTranslation()
  return (
    <Page>
      {isEdit ? `Редактирование статьи с индексом ${id}` : 'Создание статьи'}
    </Page>
  )
}
export default ArticleEditPage
