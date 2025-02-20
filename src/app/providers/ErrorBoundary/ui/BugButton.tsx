import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button'
import { ButtonHTMLAttributes, type CSSProperties, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

// компонент для тестов
interface BugButtonProps {
  className?: string
  style?: CSSProperties | undefined
}

export const BugButton = ({ className, style }: BugButtonProps) => {
  const { t } = useTranslation('translation')
  const [error, setError] = useState(false)
  const throwError = () => {
    setError(true)
  }

  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])
  return (
<Button style = {style} onClick={ throwError } className={classNames('bug_button', {}, [className])}>
{t('Прокидываем ошибку')}
</Button>
  )
}
