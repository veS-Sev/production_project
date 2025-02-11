import { type StateSchema } from 'app/providers/StoreProvider'
import { UserRole } from '../../types/UserSchema'
import { createSelector } from '@reduxjs/toolkit'

export const getUserRoles = (state: StateSchema) => state.user.authData?.roles

export const isUserAdmin = createSelector(getUserRoles, (role) => Boolean(role?.includes(UserRole.ADMIN)))
export const isUserManager = createSelector(getUserRoles, (role) => Boolean(role?.includes(UserRole.MANAGER)))
