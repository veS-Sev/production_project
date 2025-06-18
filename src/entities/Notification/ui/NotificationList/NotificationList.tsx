import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './NotificationList.module.scss'
import { useNotificationList } from '../../api/notificationApi'
import { VStack } from '@/shared/ui/Stack'
import { NotificationItem } from '../NotificationItem/NotificationItem'
import { Skeleton } from '@/shared/ui/Skeleton'

interface NotificationListProps {
  className?: string

}

export const NotificationList = (props: NotificationListProps) => {
  const { className } = props
  const { data, isLoading } = useNotificationList(null, {
    pollingInterval: 10000
  })

  if (isLoading) {
    return <VStack max gap={'16'} className={classNames(cls.NotificationList, {}, [className])}>
     <Skeleton width={'100%'} border={'8px'} height={'80px'} />
     <Skeleton width={'100%'} border={'8px'} height={'80px'} />
     <Skeleton width={'100%'} border={'8px'} height={'80px'}/>
  </VStack>
  }
  return <VStack max gap={'16'} className={classNames(cls.NotificationList, {}, [className])}>
    {data?.map(item => (
      <NotificationItem data={item} key={item.id} />
    ))}
  </VStack>
}
