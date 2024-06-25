import type { CounterShema } from 'entities/Counter'
import type { UserSchema } from 'entities/User'
import type { LoginShema } from 'features/authByUsername'

export interface StateSchema {
  counter: CounterShema
  user: UserSchema
  loginForm: LoginShema
}
