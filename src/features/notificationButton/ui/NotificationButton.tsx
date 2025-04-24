import { Popover } from 'shared/ui/Popups'
import { NotificationList } from 'entities/Notification'
import { Icon } from 'shared/ui/Icon'
import NotificationIcon from 'shared/assets/icons/notification.svg'

interface NotificationButtonProps {
  className?: string
}

export const NotificationButton = (props: NotificationButtonProps) => {
  return <Popover trigger={<Icon Svg={NotificationIcon} inverted />} ><NotificationList />
    </Popover>
}
