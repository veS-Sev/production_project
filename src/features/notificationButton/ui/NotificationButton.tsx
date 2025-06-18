import { Popover } from '@/shared/ui/Popups'
import { NotificationList } from '@/entities/Notification'
import { Icon } from '@/shared/ui/Icon'
import NotificationIcon from '@/shared/assets/icons/notification.svg'
import { useState } from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import { DrawerAsync as Drawer } from '@/shared/ui/Drawer'
import { Button, ButtonTheme } from '@/shared/ui/Button'

interface NotificationButtonProps {
  className?: string
}

export const NotificationButton = (props: NotificationButtonProps) => {
  const [isOpenDrawer, setOpenDrawer] = useState(false)
  const onShowDrawer = () => {
    setOpenDrawer(true)
  }
  const onCloseDrawer = () => {
    setOpenDrawer(false)
  }
  const trigger = <Button theme={ButtonTheme.CLEAR} onClick={onShowDrawer}
      ><Icon Svg={NotificationIcon} inverted /></Button>

  return <div>
    <BrowserView>
      <Popover trigger={<Icon Svg={NotificationIcon} inverted/>}><NotificationList />
    </Popover>
  </BrowserView>
    <MobileView>
      {trigger}
     <Drawer isOpen={isOpenDrawer} onClose={onCloseDrawer}><NotificationList /></Drawer>
   </MobileView></div>
}
