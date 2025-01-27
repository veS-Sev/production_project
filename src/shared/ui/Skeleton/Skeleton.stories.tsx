import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Skeleton } from './Skeleton'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator'
export default {
  title: 'shared/Skeleton',
  component: Skeleton,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Skeleton>

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />

export const Normal = Template.bind({})
Normal.args = {
  width: '100%',
  height: 200
}

export const Cercle = Template.bind({})
Cercle.args = {
  width: 100,
  height: 100,
  border: '50%'
}

export const DarkCercle = Template.bind({})
DarkCercle.args = {
  width: 100,
  height: 100,
  border: '50%'
}
DarkCercle.decorators = [ThemeDecorator(Theme.DARK)]
export const Dark = Template.bind({})
Dark.args = {
  width: '100%',
  height: 200
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const PeachCercle = Template.bind({})
PeachCercle.args = {
  width: 100,
  height: 100,
  border: '50%'
}
PeachCercle.decorators = [ThemeDecorator(Theme.PEACH)]

export const Peach = Template.bind({})
Peach.args = {
  width: '100%',
  height: 200
}
Peach.decorators = [ThemeDecorator(Theme.PEACH)]
