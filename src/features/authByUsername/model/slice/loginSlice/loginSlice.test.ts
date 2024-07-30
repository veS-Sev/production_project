import { type LoginShema } from '../../type/LoginShema'
import { type DeepPartial } from '@reduxjs/toolkit'
import { loginReducer, loginActions } from './loginSlice'

describe('loginSlice test ', () => {
  test('test set username ', () => {
    const state: DeepPartial<LoginShema> = { username: '123' }
    expect(loginReducer(state as LoginShema, loginActions.setUsername('123'))).toEqual({ username: '123' })
  })
  test('test set password ', () => {
    const state: DeepPartial<LoginShema> = { password: '12345' }
    expect(loginReducer(state as LoginShema, loginActions.setPassword('12345'))).toEqual({ password: '12345' })
  })
})
