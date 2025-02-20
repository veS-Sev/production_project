import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import ProfilePage from './ProfilePage'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from '../../../shared/config/storybook'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import AvatarImage from 'shared/assets/test/scale_1200.png'

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
export default {
  title: 'Pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage />

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [
  ThemeDecorator(Theme.LIGHT),
  StoreDecorator({
    profile: {
      form
    }
  })
]

export const Dark = Template.bind({})
Dark.args = { id: '1' }
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      form
    }
  })
]

export const Peach = Template.bind({})
Peach.args = { id: '1' }
Peach.decorators = [
  ThemeDecorator(Theme.PEACH),
  StoreDecorator({
    profile: {
      form
    }
  })
]
