import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator'
import { TextSize, TextTheme, TextAlign, Text } from './Text'
export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
  size: TextSize.M,
  align: TextAlign.LEFT,
  theme: TextTheme.PRIMARY,
  title: 'Lorem ipsum dolor',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  size: TextSize.M,
  align: TextAlign.LEFT,
  theme: TextTheme.PRIMARY,
  title: 'Lorem ipsum dolor',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
}

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const PrimaryPeach = Template.bind({})
PrimaryPeach.args = {
  theme: TextTheme.PRIMARY,
  title: 'Lorem ipsum dolor',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
}

PrimaryPeach.decorators = [ThemeDecorator(Theme.PEACH)]

export const Error = Template.bind({})
Error.args = {
  theme: TextTheme.ERROR,
  title: 'Lorem ipsum dolor',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
}

export const ErrorDark = Template.bind({})
ErrorDark.args = {
  theme: TextTheme.ERROR,
  title: 'Lorem ipsum dolor',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
}

ErrorDark.decorators = [ThemeDecorator(Theme.DARK)]

export const ErrorPeach = Template.bind({})
ErrorPeach.args = {
  size: TextSize.M,
  align: TextAlign.LEFT,
  theme: TextTheme.ERROR,
  title: 'Lorem ipsum dolor',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
}

ErrorPeach.decorators = [ThemeDecorator(Theme.PEACH)]

export const OnlyText = Template.bind({})
OnlyText.args = {
  size: TextSize.M,
  align: TextAlign.LEFT,
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
}

export const OnlyTextDark = Template.bind({})
OnlyTextDark.args = {
  size: TextSize.M,
  align: TextAlign.LEFT,
  theme: TextTheme.PRIMARY,
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
}

OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTitle = Template.bind({})
OnlyTitle.args = {
  size: TextSize.M,
  align: TextAlign.LEFT,
  title: 'Lorem ipsum dolor'
}

export const OnlyTitleDark = Template.bind({})
OnlyTitleDark.args = {
  theme: TextTheme.PRIMARY,
  title: 'Lorem ipsum dolor'
}

OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const TextSizeL = Template.bind({})
TextSizeL.args = {
  size: TextSize.L,
  align: TextAlign.LEFT,
  title: 'Lorem ipsum dolor',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
}

export const TextSizeLDark = Template.bind({})
TextSizeLDark.args = {
  size: TextSize.L,
  align: TextAlign.LEFT,
  title: 'Lorem ipsum dolor',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
}
TextSizeLDark.decorators = [ThemeDecorator(Theme.DARK)]
