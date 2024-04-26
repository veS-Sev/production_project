import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

// компонент для тестов
interface BugButtonProps {
  className?: string
}

export const BugButton = ({ className }: BugButtonProps) => {
  const { t } = useTranslation()
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
<Button onClick={ throwError } className={classNames('bug_button', {}, [className])}>
{t('Прокидываем ошибку')}
</Button>
  )
}
