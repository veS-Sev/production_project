import type { Meta, StoryObj } from '@storybook/react'
import ProfilePage from './ProfilePage'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from '../../../shared/config/storybook'
import { Country } from '../../../entities/Country'
import AvatarImage from 'shared/assets/test/scale_1200.png'
import { Currency } from 'entities/Currency'

const form = {
  firstname: 'Fifa',
  lastname: 'Cool',
  username: 'Volya',
  currency: Currency.RUB,
  avatar: AvatarImage,
  city: 'Norilsk',
  age: 98,
  country: Country.RUS
}

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePager',
  component: ProfilePage,
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      profile: {
        form
      }
    })
  ],
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof ProfilePage>

export const Light: Story = {}

export const Dark: Story = {
  args: { id: '1' },
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
}

export const Peach: Story = {
  args: { id: '1' },
  decorators: [
    ThemeDecorator(Theme.PEACH)
  ]
}
