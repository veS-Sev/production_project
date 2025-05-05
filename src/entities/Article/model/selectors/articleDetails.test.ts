import { type StateSchema } from '@/app/providers/StoreProvider'
import {
  getArticleDetailsData,
  getArticleDetailsIsLoading,
  getArticleDetailsError
} from './articleDetails'

describe('getArticleDetailsData', () => {
  test('should return data object', () => {
    const data = {
      id: '1',
      title: 'Javascript news',
      subtitle: 'Что нового в JS за 2024 год?',
      img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png'
    }
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data
      }
    }

    expect(getArticleDetailsData(state as StateSchema)).toEqual(data)
  })

  test('should work with emty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined)
  })
})

describe('getArticleDetailsIsLoading', () => {
  test('should return isLoading status', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true
      }
    }

    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true)
  })
  test('should work with emty isLoading', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false)
  })
})

describe('getArticleDetailsError', () => {
  test('should return error string', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'some error'
      }
    }

    expect(getArticleDetailsError(state as StateSchema)).toEqual('some error')
  })

  test('should work with emty error', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined)
  })
})
