import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { ListBox } from './ListBox'
import { Country } from 'entities/Country/model/types/country'

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '100px' }}>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof ListBox>

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />

export const Bottom = Template.bind({})
Bottom.args = {
  items: [
    { value: Country.BEL, content: Country.BEL },
    { value: Country.RUS, content: Country.RUS },
    { value: Country.USA, content: Country.USA }
  ],
  value: 'Укажите страну',
  direction: 'bottom'
}

export const BottomRight = Template.bind({})
BottomRight.args = {
  items: [
    { value: Country.BEL, content: Country.BEL },
    { value: Country.RUS, content: Country.RUS },
    { value: Country.USA, content: Country.USA }
  ],
  value: 'Укажите страну',
  direction: 'bottom-right'
}

export const BottomLeft = Template.bind({})
BottomLeft.args = {
  items: [
    { value: Country.BEL, content: Country.BEL },
    { value: Country.RUS, content: Country.RUS },
    { value: Country.USA, content: Country.USA }
  ],
  value: 'Укажите страну',
  direction: 'bottom-left'
}

export const Top = Template.bind({})
Top.args = {
  items: [
    { value: Country.BEL, content: Country.BEL },
    { value: Country.RUS, content: Country.RUS },
    { value: Country.USA, content: Country.USA }
  ],
  value: 'Укажите страну',
  direction: 'top'
}

export const TopLeft = Template.bind({})
TopLeft.args = {
  items: [
    { value: Country.BEL, content: Country.BEL },
    { value: Country.RUS, content: Country.RUS },
    { value: Country.USA, content: Country.USA }
  ],
  value: 'Укажите страну',
  direction: 'top-left'
}

export const TopRight = Template.bind({})
TopRight.args = {
  items: [
    { value: Country.BEL, content: Country.BEL },
    { value: Country.RUS, content: Country.RUS },
    { value: Country.USA, content: Country.USA }
  ],
  value: 'Укажите страну',
  direction: 'top-right'
}
