import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading'
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData'
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError'
import { Input } from 'shared/ui/Input'
import { Button } from 'shared/ui/Button'
import { Text } from 'shared/ui/Text'
import { ButtonTheme } from 'shared/ui/Button/Button'

interface ProfileCardProps {
  className?: string
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation('profile')
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)
  const data = useSelector(getProfileData)

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('Профиль')} />
        <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
          {t('Редактировать')}
        </Button>
      </div>
      <div className={cls.data}>
        <Input
          value={data?.first}
          placeholder={t('Ваше имя')}
          className={cls.input}
          autofocus={false}
        />
        <Input
         type={'text'}
          value={data?.last}
          placeholder={t('Ваша фамилия')}
          className={cls.input}
          autofocus={false}
        />
      </div>
    </div>
  )
}
// import { classNames } from 'shared/lib/classNames/classNames'
// import { useTranslation } from 'react-i18next'
// import { useSelector } from 'react-redux'
// import { getProfileData } from 'entities/Profile/model/selectors/getProfileData'
// import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading'
// import { getProfileError } from 'entities/Profile/model/selectors/getProfileError'
// import { Text } from 'shared/ui/Text/Text'
// import { Button, ButtonTheme } from 'shared/ui/Button/Button'
// import { Input } from 'shared/ui/Input/Input'
// import cls from './ProfileCard.module.scss'

// interface ProfileCardProps {
//   className?: string
// }

// export const ProfileCard = ({ className }: ProfileCardProps) => {
//   const { t } = useTranslation('profile')
//   const data = useSelector(getProfileData)
//   const isLoading = useSelector(getProfileIsLoading)
//   const error = useSelector(getProfileError)

//   return (
//     <div className={classNames(cls.ProfileCard, {}, [className])}>
//       <div className={cls.header}>
//         <Text title={t('Профиль')} />
//         <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
//           {t('Редактировать')}
//         </Button>
//       </div>
//       <div className={cls.data}>
//         <Input
//           value={data?.first}
//           placeholder={t('Ваше имя')}
//           className={cls.input}
//         />
//         <Input
//           value={data?.last}
//           placeholder={t('Ваша фамилия')}
//           className={cls.input}
//         />
//       </div>
//     </div>
//   )
// }
