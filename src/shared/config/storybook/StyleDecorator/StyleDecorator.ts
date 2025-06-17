// import { type Story } from '@storybook/react'
import { type StoryFn } from '@storybook/react'
// eslint-disable-next-line
import '@/app/styles/index.scss'

export const StyleDecorator = (story: () => StoryFn) => story()
