import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Modal } from './Modal'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator'

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, adipisci ut? Excepturi incidunt possimus ipsa quasi, esse sit sunt expedita necessitatibus laboriosam voluptatibus corporis, eligendi fugiat a molestias iste iure!',
    isOpen: true
  }
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Primary = Template.bind({})
Primary.args = {

}

export const Dark = Template.bind({})
Dark.args = {

}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
