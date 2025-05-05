import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Code.module.scss'
import { Button } from '../Button'
import CopyIcon from '../../assets/icons/copy-20-20.svg'
import { useCallback } from 'react'
import { ButtonTheme } from '../Button/Button'

interface CodeProps {
  className?: string
  text: string
}

export const Code = ({ className, text }: CodeProps) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text)
  }, [text])

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR} onClick={onCopy} className={cls.copyBtn}>
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  )
}
