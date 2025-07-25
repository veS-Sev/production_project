import {
  bindActionCreators,
  createSlice,
  type CreateSliceOptions,
  type SliceCaseReducers
} from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'

export const buildSlice = <
  State,
  CaseReducers extends SliceCaseReducers<State>,
  Name extends string = string
>(
    options: CreateSliceOptions<State, CaseReducers, Name>
  ) => {
  const slice = createSlice(options)
  const useActions = (): typeof slice.actions => {
    const dispatch = useDispatch()
    // @ts-ignore
    return useMemo(() => bindActionCreators(slice.actions, dispatch),
      [dispatch]
    )
  }
  return { ...slice, useActions }
}
