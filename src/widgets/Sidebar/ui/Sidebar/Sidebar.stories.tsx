import type { Meta, StoryObj } from '@storybook/react'
import { Sidebar } from './Sidebar'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from '@/shared/config/storybook'

const meta: Meta<typeof Sidebar> = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  decorators: [
    ThemeDecorator(Theme.LIGHT),
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

export const Light: Story = { decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({ user: { authData: {} } })] }

export const Dark: Story = { decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({ user: { authData: {} } })] }

export const NoAuth: Story = { decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({ user: {} })] }
