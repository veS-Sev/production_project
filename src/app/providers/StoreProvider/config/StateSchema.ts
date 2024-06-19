import type { CounterShema } from 'entities/Counter'
import type { UserSchema } from 'entities/User'

export interface StateSchema {
  counter: CounterShema
  user: UserSchema
}
