import { type Story } from '@storybook/react'
import '../../../src/app/styles/index.scss'
import { BrowserRouter } from 'react-router-dom'

export const RouterDecorator = (story: () => Story) => (
    <BrowserRouter>{story()}</BrowserRouter>)
