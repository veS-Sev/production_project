import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Flex } from './Flex'

export default {
  title: 'shared/Stack/Flex',
  component: Flex,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Flex>

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />

export const Row = Template.bind({})
Row.args = {
  direction: 'row',
  children: (
    <>
      <div>flex</div>
      <div>flex</div>
      <div>flex</div>
      <div>flex</div>
    </>
  )
}

export const RowGap4 = Template.bind({})
RowGap4.args = {
  direction: 'row',
  gap: '4',
  children: (
    <>
      <div>flex</div>
      <div>flex</div>
      <div>flex</div>
      <div>flex</div>
    </>
  )
}

export const RowGap8 = Template.bind({})
RowGap8.args = {
  direction: 'row',
  gap: '8',
  children: (
    <>
      <div>flex</div>
      <div>flex</div>
      <div>flex</div>
      <div>flex</div>
    </>
  )
}

export const RowGap16 = Template.bind({})
RowGap16.args = {
  direction: 'row',
  gap: '16',
  children: (
    <>
      <div>flex</div>
      <div>flex</div>
      <div>flex</div>
      <div>flex</div>
    </>
  )
}

export const Column = Template.bind({})
Column.args = {
  direction: 'column',
  children: (
    <>
      <div>flex</div>
      <div>flex</div>
      <div>flex</div>
      <div>flex</div>
    </>
  )
}

export const ColumnGap16 = Template.bind({})
ColumnGap16.args = {
  direction: 'column',
  gap: '16',
  children: (
    <>
      <div>flex</div>
      <div>flex</div>
      <div>flex</div>
      <div>flex</div>
    </>
  )
}

export const ColumnAlignEnd = Template.bind({})
ColumnAlignEnd.args = {
  direction: 'column',
  align: 'end',
  children: (
    <>
      <div>flex</div>
      <div>flex</div>
      <div>flex</div>
      <div>flex</div>
    </>
  )
}
