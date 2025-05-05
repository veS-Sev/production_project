import { Button } from '@/shared/ui/Button'
import { counterActions } from '../model/slice/counterSlice'
import { useDispatch, useSelector } from 'react-redux'
import type { StateSchema } from '@/app/providers/StoreProvider'
import { useTranslation } from 'react-i18next'

export const Counter = () => {
  const dispatch = useDispatch()
  const value = useSelector((state: StateSchema) => state.counter.value)
  const { t } = useTranslation()
  const increment = () => {
    dispatch(counterActions.increment())
  }
  const decrement = () => {
    dispatch(counterActions.decrement())
  }

  return (
<div data-testId={'counter'}>
<h1 data-testId={'value-title'}>{`value = ${value}`}</h1>
<Button data-testId={'increment-btn'} onClick={increment}>{t('increment')}</Button>
<Button data-testId={'decrement-btn'} onClick={decrement}>{t('decrement')}</Button>
</div>
  )
}
