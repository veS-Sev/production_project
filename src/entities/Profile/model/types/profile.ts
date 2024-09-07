import type { Country } from 'entities/Country'
import type { Currency } from 'entities/Currency'
export interface Profile {
  firstname?: string
  lastname?: string
  username?: string
  currency?: Currency
  avatar?: string
  city?: string
  age?: number
  country?: Country
}

export interface ProfileSchema {
  data?: Profile
  form?: Profile
  error?: string
  isLoading: boolean
  readonly: boolean
}
