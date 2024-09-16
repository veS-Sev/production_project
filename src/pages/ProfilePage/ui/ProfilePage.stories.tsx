import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import ProfilePage from './ProfilePage'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from '../../../../config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from '../../../../config/storybook/StoreDecorator'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import AvatarImage from 'shared/assets/test/scale_1200.png'

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
