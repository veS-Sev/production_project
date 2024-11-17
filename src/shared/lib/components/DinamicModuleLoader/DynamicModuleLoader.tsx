import { useEffect } from 'react'
import type { FC } from 'react'
import { useDispatch, useStore } from 'react-redux'
import type { Reducer } from '@reduxjs/toolkit'
import type { ReduxStoreWithManager, StateSchemaKeys } from 'app/providers/StoreProvider'

export type ReducersList = {
  [name in StateSchemaKeys]?: Reducer
}

export type ReducersStateEntry = [StateSchemaKeys, Reducer]

interface DynamicModuleLoaderProps {
  reducers: ReducersList
  removeAfterUnmount?: boolean
}
export const DynamicModuleLoader: FC < DynamicModuleLoaderProps> = (props) => {
  const { children, reducers, removeAfterUnmount = true } = props
  const store = useStore() as ReduxStoreWithManager
  const dispatch = useDispatch()

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as StateSchemaKeys, reducer)
      dispatch({ type: `@INIT ${name} reducer` })
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name, reducer]) => {
          store.reducerManager.remove(name as StateSchemaKeys)
          dispatch({ type: `@DESTROY ${name} reducer` })
        })
      }
    }
    // eslint-disable-next-line
  }, [])

  return (
  <>{children}</>
  )
}
