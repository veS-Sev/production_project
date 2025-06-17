import type { Meta, StoryObj } from '@storybook/react'
import { ListBox } from './ListBox'
import { Country } from '@/entities/Country/testing'

const meta: Meta<typeof ListBox> = {
  title: 'shared/Popups/ListBox',
  component: ListBox,
  decorators: [(Story) => (
      <div style={{ padding: '100px' }}>
        <Story />
      </div>
  )],
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof ListBox>

export const Bottom: Story = {
  args: {
    items: [
      { value: Country.BEL, content: Country.BEL },
      { value: Country.RUS, content: Country.RUS },
      { value: Country.USA, content: Country.USA }
    ],
    value: 'Укажите страну',
    direction: 'bottom'
  }
}

export const BottomRight: Story = {
  args: {
    items: [
      { value: Country.BEL, content: Country.BEL },
      { value: Country.RUS, content: Country.RUS },
      { value: Country.USA, content: Country.USA }
    ],
    value: 'Укажите страну',
    direction: 'bottom-right'
  }
}

export const BottomLeft: Story = {
  args: {
    items: [
      { value: Country.BEL, content: Country.BEL },
      { value: Country.RUS, content: Country.RUS },
      { value: Country.USA, content: Country.USA }
    ],
    value: 'Укажите страну',
    direction: 'bottom-left'
  }
}

export const Top: Story = {
  args: {
    items: [
      { value: Country.BEL, content: Country.BEL },
      { value: Country.RUS, content: Country.RUS },
      { value: Country.USA, content: Country.USA }
    ],
    value: 'Укажите страну',
    direction: 'top'
  }
}

export const TopLef: Story = {
  args: {
    items: [
      { value: Country.BEL, content: Country.BEL },
      { value: Country.RUS, content: Country.RUS },
      { value: Country.USA, content: Country.USA }
    ],
    value: 'Укажите страну',
    direction: 'top-left'
  }
}

export const TopRight: Story = {
  args: {
    items: [
      { value: Country.BEL, content: Country.BEL },
      { value: Country.RUS, content: Country.RUS },
      { value: Country.USA, content: Country.USA }
    ],
    value: 'Укажите страну',
    direction: 'top-right'
  }
}
