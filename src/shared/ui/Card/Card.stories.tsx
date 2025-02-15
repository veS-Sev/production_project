import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Card } from './Card'
import { Text } from '../Text'

export default {
  title: 'shared/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: (<>
    <Text title={'Это заголовок'}/>
    <Text text={'Это заголовок'}/></>
  )
}
