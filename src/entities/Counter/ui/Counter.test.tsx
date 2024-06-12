import { fireEvent, screen } from '@testing-library/react'
import { Counter } from './Counter'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'

describe('Counter', () => {
  test('Counter test', () => {
    componentRender(<Counter />)
    expect(screen.getByTestId('counter')).toBeInTheDocument()
    screen.debug()
  })

  test('Counter increnment test', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } }
    })
    expect(screen.getByTestId('increment-btn')).toBeInTheDocument()
    const incrementBtn = screen.getByTestId('increment-btn')
    fireEvent.click(incrementBtn)
    expect(screen.getByTestId('value-title')).toContainHTML('11')
    screen.debug()
  })

  test('Counter decrement test', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } }
    })
    expect(screen.getByTestId('decrement-btn')).toBeInTheDocument()

    const decrementBtn = screen.getByTestId('decrement-btn')
    fireEvent.click(decrementBtn)

    expect(screen.getByTestId('value-title')).toContainHTML('9')
    screen.debug()
  })
})
