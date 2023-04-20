import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from './Button'

export default {
  title: 'ReactComponentLibrary/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const FirstButton = Template.bind({})
FirstButton.args = {
  label: 'First Button',
}

export const SecondButton = Template.bind({})
SecondButton.args = {
  label: 'Second Button',
}