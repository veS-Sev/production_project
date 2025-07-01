import type { Meta, StoryObj } from '@storybook/react'
import AvatarImage from '@/shared/assets/test/scale_1200.png'
import { EditableProfileCard } from './EditableProfileCard'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { StoreDecorator } from '@/shared/config/storybook'

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

export const Primary: Story = {}
