import { type Story } from '@storybook/react'
import 'app/styles/index.scss'
import { BrowserRouter } from 'react-router-dom'

export const RouterDecorator = (StoryComponent: Story) => (
    <BrowserRouter><StoryComponent/></BrowserRouter>)
