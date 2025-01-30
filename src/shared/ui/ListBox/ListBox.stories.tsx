import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { ListBox } from './ListBox'
import { Country } from 'entities/Country/model/types/country'

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ListBox>

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />

export const Primary = Template.bind({})
Primary.args = {
  items: [
    { value: Country.BEL, content: Country.BEL },
    { value: Country.RUS, content: Country.RUS },
    { value: Country.USA, content: Country.USA }
  ],
  value: 'Укажите страну',
  direction: 'bottom'
}
