import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleEditPage.module.scss'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { Page } from 'widgets/Page'

interface ArticleEditPageProps {
  className?: string
}

const ArticleEditPage = (props: ArticleEditPageProps) => {
  const { className } = props
  const { id } = useParams<{ id: string }>()
  const isEdit = Boolean(id)
  const { t } = useTranslation()
  return (
    <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
      {isEdit ? `Редактирование статьи с индексом${id}` : 'Создание статьи'}
    </Page>
  )
}
export default ArticleEditPage
