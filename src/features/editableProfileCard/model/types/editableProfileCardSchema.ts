import type { Country } from '@/entities/Country'
import type { Currency } from '@/entities/Currency'
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

export enum ValidateProfileError {
  ICORRECT_CITY = 'ICORRECT_CITY',
  ICORRECT_NAME = 'ICORRECT_NAME',
  ICORRECT_AGE = 'ICORRECT_AGE',
  SERVER_ERROR = 'SERVER_ERROR',
  INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
  EMPTY_DATA = 'EMPTY_DATA',
}
export interface ProfileSchema {
  data?: Profile
  form?: Profile
  error?: string
  isLoading: boolean
  readonly: boolean
  validateErrors?: ValidateProfileError[]
}
