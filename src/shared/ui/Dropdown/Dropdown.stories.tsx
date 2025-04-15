import type { Meta, StoryObj } from '@storybook/react'
import { Dropdown } from './Dropdown'

const meta: Meta<typeof Dropdown> = {
  title: 'shared/Dropdown',
  component: Dropdown,
  decorators: [(Story) => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
  )],
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof Dropdown>

// export default {
//   title: 'shared/Dropdown',
//   component: Dropdown,
//   argTypes: {
//     backgroundColor: { control: 'color' }
//   },
//   decorators: [
//     (Story) => (
//       <div style={{ padding: '20px' }}>
//         <Story />
//       </div>
//     )
//   ]
// } as Meta<typeof Dropdown>

// const Template: ComponentStory<typeof Dropdown> = (args) => (
//   <Dropdown {...args} />
// )

export const Primary: Story = {
  args: {
    items: [
      { disabled: false, content: 'asdfgh' },
      { disabled: true, content: 'second' },
      { disabled: false, content: 'third' }
    ],
    trigger: 'Триггер'
  }
}
