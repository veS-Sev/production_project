import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { Page } from 'widgets/Page'
import { EditableProfileCard } from 'features/editableProfileCard'
import { VStack } from 'shared/ui/Stack'
import { Text } from 'shared/ui/Text'

const ProfilePage = () => {
  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation()
  if (!id) {
    return <Text title={t('Профиль не найден')} />
  }

  return (
    <Page>
      <VStack gap='16' max>
        <EditableProfileCard />
      </VStack>
    </Page>
  )
}

export default ProfilePage
