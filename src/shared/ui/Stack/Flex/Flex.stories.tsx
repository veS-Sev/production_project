import type { Meta, StoryObj } from '@storybook/react'
import { Flex } from './Flex'

const meta: Meta<typeof Flex> = {
  title: 'shared/Stack/Flex',
  component: Flex,
  decorators: [],
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof Flex>

export const Row: Story = {
  args: {
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
}
export const RowGap4: Story = {
  args: {
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
}

export const RowGap8: Story = {
  args: {
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
}

export const RowGap16: Story = {
  args: {
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
}

export const Column: Story = {
  args: {
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
}

export const ColumnGap16: Story = {
  args: {
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
}

export const ColumnAlignEnd: Story = {
  args: {
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
}
