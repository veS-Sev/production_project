import type { Country } from '../../../Country'
import type { Currency } from '../../../Currency'
export interface Profile {
  id?: string
  firstname?: string
  lastname?: string
  username?: string
  currency?: Currency
  avatar?: string
  city?: string
  age?: number
  country?: Country
}
