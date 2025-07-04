import { Button } from '@/shared/ui/Button'
import { useCounterActions } from '../model/slice/counterSlice'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue'

export const Counter = () => {
  const dispatch = useDispatch()
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
<div data-testId={'counter'}>
      <h1 data-testId={'value-title'}>{`value = ${value}`}</h1>
      <Button data-testId={'addFive-btn'} onClick={() => addSomeHandler(num)}>{t(`add${num}`)}</Button>
<Button data-testId={'increment-btn'} onClick={incrementHandler}>{t('increment')}</Button>
<Button data-testId={'decrement-btn'} onClick={decrementHandler}>{t('decrement')}</Button>
</div>
  )
}
