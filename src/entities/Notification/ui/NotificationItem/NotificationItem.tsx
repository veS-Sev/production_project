import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './NotificationItem.module.scss'
import { Card } from '@/shared/ui/Card'
import { Text, TextSize } from '@/shared/ui/Text'
import { type Notification } from '../../module/notification'

interface NotificationItemProps {
  className?: string
  data: Notification
}

export const NotificationItem = (props: NotificationItemProps) => {
  const { className, data } = props
  const content = <Card className={classNames(cls.NotificationItem, {}, [className])}><Text title={data.title} text={data.description} size={TextSize.S} />
  </Card>
  if (data.href) {
    return <a href={data.href} rel='noreferrer' target={'_blank'} className={classNames(cls.link, {}, [className])}> { content}</a>
  }
  return content
}
