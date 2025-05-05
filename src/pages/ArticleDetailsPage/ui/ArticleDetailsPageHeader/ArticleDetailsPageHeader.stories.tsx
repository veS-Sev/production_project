import type { Meta, StoryObj } from '@storybook/react'
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader'
import { StoreDecorator } from '@/shared/config/storybook'

const meta: Meta<typeof ArticleDetailsPageHeader> = {
  title: 'pages/ArticleDetailsPage/ArticleDetailsPageHeader',
  component: ArticleDetailsPageHeader,
  decorators: [StoreDecorator({ user: { authData: {} } })],
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof ArticleDetailsPageHeader>

export const Basic: Story = {}

// export default {
//   title: 'pages/ArticleDetailsPage/ArticleDetailsPageHeader',
//   component: ArticleDetailsPageHeader,
//   argTypes: {
//     backgroundColor: { control: 'color' }
//   }
// } as Meta<typeof ArticleDetailsPageHeader>

// const Template: ComponentStory<typeof ArticleDetailsPageHeader> = (args) => <ArticleDetailsPageHeader {...args} />

// export const Primary = Template.bind({})
// Primary.args = {}
// Primary.decorators = [StoreDecorator({

// })]
