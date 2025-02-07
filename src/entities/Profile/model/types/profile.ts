import type { Country } from 'entities/Country'
import type { Currency } from 'entities/Currency'
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
