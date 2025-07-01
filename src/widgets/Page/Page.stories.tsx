import type { Meta, StoryObj } from '@storybook/react'
import { Page } from './Page'
import { StoreDecorator } from '@/shared/config/storybook'

const meta: Meta<typeof Page> = {
  title: 'widgets/Page',
  component: Page,
  decorators: [StoreDecorator({})],
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof Page>

export const Primary: Story = {}

// export default {
//   title: 'shared/Page',
//   component: Page,
//   argTypes: {
//     backgroundColor: { control: 'color' }
//   }
// } as ComponentMeta<typeof Page>

// const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />

// export const Primary = Template.bind({})
// Primary.args = {}
