import {
  DynamicModuleLoader,
  type ReducersList
} from 'shared/lib/components/DinamicModuleLoader/DynamicModuleLoader'
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useEffect } from 'react'
const reducers: ReducersList = {
  profile: profileReducer
}

const ProfilePage = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchProfileData())
  }, [])
  return (
    <DynamicModuleLoader reducers={reducers} >
      <ProfileCard/>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
