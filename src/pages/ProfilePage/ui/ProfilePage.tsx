import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DinamicModuleLoader/DynamicModuleLoader'
import { profileReducer } from 'entities/Profile'

const reducers: ReducersList = {
  profile: profileReducer
}

export const ProfilePage = () => {
  const { t } = useTranslation('main')
  return (
    <DynamicModuleLoader reducers={ reducers} removeAfterUnmount>
        <div>
            {t('ПРОФИЛЬ')}
        </div></DynamicModuleLoader>
  )
}

export default ProfilePage
