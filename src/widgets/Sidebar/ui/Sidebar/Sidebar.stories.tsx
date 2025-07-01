import type { Meta, StoryObj } from '@storybook/react'
import { Sidebar } from './Sidebar'
import { StoreDecorator } from '@/shared/config/storybook'

const meta: Meta<typeof Sidebar> = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  decorators: [
    StoreDecorator({ user: { authData: {} } })
  ],
  // render: () => <Sidebar prop="value" />,
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof Sidebar>

// export default {
//   title: 'widgets/Sidebar',
//   component: Sidebar,
//   argTypes: {
//     backgroundColor: { control: 'color' }
//   }
// } as ComponentMeta<typeof Sidebar>

// export const WithProp: Story = {
//   render: () => <Sidebar prop="value" />
// }

// const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />

export const Basic: Story = { decorators: [StoreDecorator({ user: { authData: {} } })] }

export const NoAuth: Story = { decorators: [StoreDecorator({ user: {} })] }
