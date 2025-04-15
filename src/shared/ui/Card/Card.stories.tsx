import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'
import { Text } from '../Text'

const meta: Meta<typeof Card> = {
  title: 'shared/Card',
  component: Card,
  decorators: [],
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof Card>

export const Primary: Story = {
  args: {
    children: (<>
      <Text title={'Это заголовок'}/>
      <Text text={'Это заголовок'}/></>
    )
  }
}
