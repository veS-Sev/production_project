import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { ProfileCard } from './ProfileCard'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import AvatarImage from 'shared/assets/test/scale_1200.png'

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
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

export const WithError = Template.bind({})
WithError.args = {
  error: 'Обнаружена ошибка'
}

export const Loading = Template.bind({})
Loading.args = {
  isLoading: true
}
