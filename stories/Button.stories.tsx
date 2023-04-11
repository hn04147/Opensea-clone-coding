import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from '../components/Button'

export default {
    title: 'Component/Button',
    component: Button,
    argTypes: {
        text: {
            description: 'Text in button area',
            control: 'text'
        },
        size: {
            description: 'The size of button',
            control: {
                type: 'inline-radio',
                options: ['sm', 'md', 'lg', 'free']
            }
        },
        outline: {
            description: 'Whether the type of this button is outlined with white background or just blue background without outline',
            control: 'boolean'
        }
    }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Large = Template.bind({})
Large.args = {
    text: 'Button',
    size: 'lg',
    outline: false
}