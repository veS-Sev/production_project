import { classNames } from '@/shared/lib/classNames/classNames'
import { Suspense } from 'react'
import cls from './LoginModal.module.scss'
import { Modal } from '@/shared/ui/Modal'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'
import { Loader } from '@/shared/ui/Loader'

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
  return (
        <Modal isOpen = {isOpen} onClose={onClose}className={classNames(cls.LoginModal, {}, [className])} lazy>

<Suspense fallback={<Loader/>}><LoginFormAsync onSucces={onClose}/></Suspense>

</Modal>
  )
}
