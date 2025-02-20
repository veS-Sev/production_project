import { useEffect } from 'react'
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
  children: React.ReactNode
}
export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
  const { children, reducers, removeAfterUnmount = true } = props
  const store = useStore() as ReduxStoreWithManager
  const dispatch = useDispatch()
  const mountedReducers = store.reducerManager.getMountedReducers()
  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounted = mountedReducers[name as StateSchemaKeys]
      if (!mounted) {
        store.reducerManager.add(name as StateSchemaKeys, reducer)
        dispatch({ type: `@INIT ${name} reducer` })
      }
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
