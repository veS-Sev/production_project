import type { Meta, StoryObj } from '@storybook/react'
import AvatarImage from 'shared/assets/test/scale_1200.png'
import { EditableProfileCard } from './EditableProfileCard'
import { Theme } from 'app/providers/ThemeProvider'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { StoreDecorator } from 'shared/config/storybook'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

const meta: Meta<typeof EditableProfileCard> = {
  title: 'features/EditableProfileCard',
  component: EditableProfileCard,
  decorators: [
    StoreDecorator({
      profile: {
        form: {
          firstname: 'Fifa',
          lastname: 'Cool',
          username: 'Volya',
          currency: Currency.RUB,
          avatar: AvatarImage,
          city: 'Norilsk',
          age: 98,
          country: Country.RUS
        }
      }
    })
  ]
  // parameters: {
  //   layout: 'padded'
  // }
}
export default meta

type Story = StoryObj<typeof EditableProfileCard>

export const Light: Story = {
  decorators: [
    ThemeDecorator(Theme.LIGHT)
  ]
}

export const Dark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK)
  ],
  parameters: {
    backgrounds: {
      values: [
        { name: 'dark', value: '#333478' }
      ]
    }
  }
}
