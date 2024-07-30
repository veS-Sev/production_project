// import { type Dispatch } from '@reduxjs/toolkit'
import axios from 'axios'
// import { type StateSchema } from 'app/providers/StoreProvider'
import { userActions } from 'entities/User'
import { loginByUsername } from './loginByUsername'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
jest.mock('axios')
const mockedAxios = jest.mocked(axios, true)
describe('loginByUsername', () => {
  // let dispatch: Dispatch
  // let getState: () => StateSchema

  // beforeEach(() => {
  //   dispatch = jest.fn()
  //   getState = jest.fn()
  // })
  // test('succes login', async () => {
  //   const userValue = { username: '123', id: '1' }
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))
  //   const action = loginByUsername({ username: '123', password: '1' })
  //   const result = await action(dispatch, getState, undefined)
  //   console.log(result)
  //   expect(dispatch).toBeCalledWith(userActions.setAuthData(userValue))
  //   // eslint-disable-next-line @typescript-eslint/unbound-method
  //   expect(mockedAxios.post).toHaveBeenCalled()
  //   expect(dispatch).toHaveBeenCalledTimes(3)
  //   expect(result.meta.requestStatus).toBe('fulfilled')
  //   expect(result.payload).toEqual(userValue)
  // })

  // test('error login', async () => {
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ status: '403' }))
  //   const action = loginByUsername({ username: '123', password: '1' })
  //   const result = await action(dispatch, getState, undefined)
  //   console.log(result)
  //   // eslint-disable-next-line @typescript-eslint/unbound-method
  //   expect(mockedAxios.post).toHaveBeenCalled()
  //   expect(dispatch).toHaveBeenCalledTimes(2)
  //   expect(result.meta.requestStatus).toBe('rejected')
  //   expect(result.payload).toBe('error')
  // })

  test('succes login', async () => {
    const userValue = { username: '123', id: '1' }
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))
    const thunk = new TestAsyncThunk(loginByUsername)
    const result = await thunk.callThunk({ username: '123', password: '123' })
    console.log(result)
    expect(thunk.dispatch).toBeCalledWith(userActions.setAuthData(userValue))
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(userValue)
  })

  test('error login', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: '403' }))
    const thunk = new TestAsyncThunk(loginByUsername)
    const result = await thunk.callThunk({ username: '123', password: '1' })
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe('error')
  })
})
