import { type User } from '../../../User'

export interface Comment {
  id: string
  text: string
  user: User
}
