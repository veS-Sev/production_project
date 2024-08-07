import type { Country, Currency } from 'shared/const'

export interface Profile {
  first: string
  last: string
  name: string
  currency: Currency
  avatar: string
  city: string
  age: number
  country: Country
}

export interface ProfileSchema {
  data?: Profile
  error?: string
  isLoading: boolean
  readonly: boolean
}
