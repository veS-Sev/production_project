import { useEffect } from 'react'
import type { FC } from 'react'
import { useDispatch, useStore } from 'react-redux'
import type { Reducer } from '@reduxjs/toolkit'
import type { ReduxStoreWithManager, StateSchemaKeys } from 'app/providers/StoreProvider'

export type ReducersList = {
  [name in StateSchemaKeys]?: Reducer
}

export type ReducersStateEntry = [StateSchemaKeys, Reducer]

interface DinamicModuleLoaderProps {
  reducers: ReducersList
  removeAfterUnmount?: boolean
}
export const DinamicModuleLoader: FC < DinamicModuleLoaderProps> = (props) => {
  const { children, reducers, removeAfterUnmount } = props
  const store = useStore() as ReduxStoreWithManager
  const dispatch = useDispatch()

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducersStateEntry) => {
      store.reducerManager.add(name, reducer)
      dispatch({ type: `@INIT ${name}` })
    })

    return () => {
      Object.entries(reducers).forEach(([name, reducer]: ReducersStateEntry) => {
        if (removeAfterUnmount) {
          store.reducerManager.remove(name)
          dispatch({ type: `@DELETE ${name} loginForm 2` })
        }
      })
    }
    // eslint-disable-next-line
  }, [])

  return (
  <>{children}</>
  )
}
