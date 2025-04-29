import { Popover } from 'shared/ui/Popups'
import { NotificationList } from 'entities/Notification'
import { Icon } from 'shared/ui/Icon'
import NotificationIcon from 'shared/assets/icons/notification.svg'
import { useState } from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import { Drawer } from 'shared/ui/Drawer/Drawer'
import { Button } from 'shared/ui/Button'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { AnimationProvider } from 'shared/lib/components/AnimationProvider'

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
      <AnimationProvider>
     <Drawer isOpen={isOpenDrawer} onClose={onCloseDrawer}><NotificationList /></Drawer>
    </AnimationProvider></MobileView></div>
}
