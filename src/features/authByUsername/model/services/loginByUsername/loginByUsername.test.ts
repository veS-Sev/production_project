// import { type Dispatch } from '@reduxjs/toolkit'
// import axios from 'axios'
// import { type StateSchema } from 'app/providers/StoreProvider'
import { userActions } from '@/entities/User'
import { loginByUsername } from './loginByUsername'
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

describe('loginByUsername', () => {
  test('succes login', async () => {
    const userValue = { username: '123', id: '1' }

    const thunk = new TestAsyncThunk(loginByUsername)

    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }))

    const result = await thunk.callThunk({ username: '123', password: '123' })
    expect(thunk.dispatch).toBeCalledWith(userActions.setAuthData(userValue))
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(thunk.api.post).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(userValue)
  })

  test('error login', async () => {
    const thunk = new TestAsyncThunk(loginByUsername)
    thunk.api.post.mockReturnValue(Promise.resolve({ status: '403' }))

    const result = await thunk.callThunk({ username: '123', password: '1' })
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(thunk.api.post).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe('error')
  })
})
