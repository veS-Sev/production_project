import type { Meta, StoryObj } from '@storybook/react'
import { ProfileCard } from './ProfileCard'
import { Currency } from '@/entities/Currency'
import { Country } from '@/entities/Country'
import AvatarImage from '@/shared/assets/test/scale_1200.png'

const meta: Meta<typeof ProfileCard> = {
  title: 'entities/Profile/ProfileCard',
  component: ProfileCard,
  decorators: [],
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof ProfileCard>

export const Primary: Story = {
  args: {
    data: {
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
}

export const WithError: Story = {
  args: {
    error: 'Обнаружена ошибка'
  }
}

export const Loading: Story = {
  args: {
    isLoading: true
  }
}
