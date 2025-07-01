import type { Meta, StoryObj } from '@storybook/react'
import ProfilePage from './ProfilePage'
import { StoreDecorator } from '../../../shared/config/storybook'
import { Country } from '../../../entities/Country'
import AvatarImage from '@/shared/assets/test/scale_1200.png'
import { Currency } from '@/entities/Currency'

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
  title: 'pages/ProfilePage',
  component: ProfilePage,
  decorators: [
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

export const Basic: Story = {}
