import { Button } from '@/shared/ui/Button'
import { useCounterActions } from '../model/slice/counterSlice'
import { useTranslation } from 'react-i18next'
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue'

export const Counter = () => {
  const value = useCounterValue()
  const { t } = useTranslation()
  const { decrement, addSome, increment } = useCounterActions()
  const addSomeHandler = (num: number) => {
    addSome(num)
  }
  const incrementHandler = () => {
    increment()
  }
  const decrementHandler = () => {
    decrement()
  }
  const num = 10
  return (
<div data-testid={'counter'}>
      <h1 data-testid={'value-title'}>{`value = ${value}`}</h1>
      <Button data-testid={'addFive-btn'} onClick={() => addSomeHandler(num)}>{t(`add${num}`)}</Button>
<Button data-testid={'increment-btn'} onClick={incrementHandler}>{t('increment')}</Button>
<Button data-testid={'decrement-btn'} onClick={decrementHandler}>{t('decrement')}</Button>
</div>
  )
}
