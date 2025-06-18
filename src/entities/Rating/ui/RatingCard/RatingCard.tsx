import { useTranslation } from 'react-i18next'
import { Card } from '@/shared/ui/Card'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'
import { Modal } from '@/shared/ui/Modal'
import { Input } from '@/shared/ui/Input'
import { useCallback, useState } from 'react'
import { StarRating } from '@/shared/ui/StarRating'
import { Button, ButtonTheme } from '@/shared/ui/Button'

import { BrowserView, MobileView } from 'react-device-detect'
import { DrawerAsync as Drawer } from '@/shared/ui/Drawer'

interface RatingCardProps {
  className?: string
  title: string
  hasFeedback: boolean
  feedbackTitle: string
  onCancel?: (starNumber: number) => void
  onAccept?: (starNumber: number, feedbackText?: string) => void
  rate?: number
}

export const RatingCard = (props: RatingCardProps) => {
  const { title, hasFeedback, feedbackTitle, onCancel, onAccept, rate = 0 } = props
  const { t } = useTranslation()
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [starCount, setStarCount] = useState(rate)
  const [feedBack, setFeedBack] = useState('')

  const onSelectStars = useCallback((selectedStarsCount: number) => {
    setStarCount(selectedStarsCount)
    if (hasFeedback) {
      setIsOpenModal(true)
    } else {
      onAccept?.(selectedStarsCount)
    }
  }, [onAccept, hasFeedback])

  const onCloseModal = useCallback(() => { setIsOpenModal(false) }, [])

  const acceptHandle = useCallback(() => {
    onAccept?.(starCount, feedBack)
    onCloseModal()
  }, [starCount, feedBack, onAccept, onCloseModal])

  const cancelHandle = useCallback(() => {
    onCloseModal()
    onCancel?.(starCount)
  }, [onCancel, onCloseModal, starCount])

  const modalContent = <>        <Text text={feedbackTitle}/>
        <Input placeholder={ t('Ваш текст') } onChange={setFeedBack}/></>

  return <Card>
    <VStack max gap={'16'} align={'center'}>
      <Text title={title} />
      <StarRating selectedStars={starCount} onSelect={onSelectStars}/>
    </VStack>
    <BrowserView>
    <Modal isOpen={isOpenModal} onClose={onCloseModal} lazy
       className={'ratingModal'}>
      <VStack max gap={'16'}>
{modalContent}
      </VStack>
      <HStack gap={'16'} justify={'end'} max>
        <Button onClick={acceptHandle} theme={ButtonTheme.OUTLINE_RED}>{t('Отправить')}</Button>
        <Button onClick={cancelHandle}>{t('Отменить')}</Button>
      </HStack>
      </Modal>
    </BrowserView>

    <MobileView>
      <Drawer isOpen={isOpenModal} onClose={cancelHandle} lazy>
      <VStack max gap={'32'}>
          {modalContent}
        <Button onClick={acceptHandle} theme={ButtonTheme.BACKGROUND_INVERTED} fullWidth={true}>{t('Отправить')}</Button></VStack>
      </Drawer>
      </MobileView>
  </Card>
}
