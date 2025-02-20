import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import AvatarImage from 'shared/assets/test/scale_1200.png'
import { EditableProfileCard } from './EditableProfileCard'
import { Theme } from 'app/providers/ThemeProvider'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { StoreDecorator } from 'shared/config/storybook'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

export default {
  title: 'features/EditableProfileCard',
  component: EditableProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof EditableProfileCard>

const Template: ComponentStory<typeof EditableProfileCard> = (args) => (
  <EditableProfileCard {...args} />
)

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [
  ThemeDecorator(Theme.LIGHT),
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

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
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
