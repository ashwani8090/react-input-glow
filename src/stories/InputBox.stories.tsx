import React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { InputBox } from '../InputBox'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'InputBox',
  component: InputBox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {}
} satisfies Meta<typeof InputBox>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const InputBoxFixed: Story = {
  args: {
    name: 'Label',
    label: 'Email',
    isFloating: false
  }
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const FloatingInline: Story = {
  args: {
    name: 'Label',
    label: 'Email',
    labelPosition: 'inline'
  }
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const FloatingOutside: Story = {
  args: {
    name: 'Label',
    label: 'Email',
    labelPosition: 'outside'
  }
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const FloatingInside: Story = {
  args: {
    name: 'Label',
    label: 'Email',
    labelPosition: 'inside'
  }
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const InputPassword: Story = {
  args: {
    name: 'Label',
    label: 'Password',
    labelPosition: 'outside',
    type: 'password',
    icon: false
  }
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const InputPasswordIcon: Story = {
  args: {
    name: 'Label',
    label: 'Password',
    labelPosition: 'outside',
    type: 'password'
  }
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const FloatingInputPrimaryColor: Story = {
  args: {
    name: 'Label',
    label: 'Email',
    labelPosition: 'outside',
    primaryColor: '#10c0e7'
  }
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const FloatingInputPrimaryBorder: Story = {
  args: {
    name: 'Label',
    label: 'Email',
    labelPosition: 'outside',
    borderRadius: '0px'
  }
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const FloatingInputPrimaryBorderWidth: Story = {
  args: {
    name: 'Label',
    label: 'Email',
    labelPosition: 'outside',
    borderWidth: '2px'
  }
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const InputBoxHeight: Story = {
  args: {
    name: 'Label',
    label: 'Email',
    labelPosition: 'outside',
    height: '30px'
  }
}



// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const InputBoxWidth: Story = {
  args: {
    name: 'Label',
    label: 'Email',
    labelPosition: 'outside',
    width: '400px',
  }
}


// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const InputBoxRightIcon: Story = {
  args: {
    name: 'user',
    label: 'Username',
    labelPosition: 'outside',
    width: '300px',
    icon: <FontAwesomeIcon icon={faUser} />

  }
}



// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const InputBoxLeftIcon: Story = {
  args: {
    name: 'user',
    label: 'Username',
    labelPosition: 'outside',
    width: '300px',
    icon: <FontAwesomeIcon icon={faLock}  color='gray' />,
    iconPosition:'left'
  }
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const InputBoxInlineLeftIcon: Story = {
  args: {
    name: 'user',
    label: 'Username',
    labelPosition: 'inline',
    width: '300px',
    icon: <FontAwesomeIcon icon={faLock}  color='gray' />,
    iconPosition:'left'
  }
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const InputBoxInsideLeftIcon: Story = {
  args: {
    name: 'user',
    label: 'Username',
    labelPosition: 'inside',
    width: '300px',
    icon: <FontAwesomeIcon icon={faLock} color='gray' />,
    iconPosition:'left'
  }
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const InputBoxNotFloatingLeftIcon: Story = {
  args: {
    name: 'user',
    label: 'Username',
    labelPosition: 'inside',
    width: '300px',
    icon: <FontAwesomeIcon icon={faLock} color='gray' />,
    iconPosition:'left',
    isFloating: false,
  }
}




export const InputBoxTextColor: Story = {
  args: {
    name: 'user',
    label: 'Username',
    labelPosition: 'inside',
    width: '300px',
    icon: <FontAwesomeIcon icon={faLock} color='gray' />,
    iconPosition:'left',
    isFloating: false,
    textColor: '#16e8ef',
  }
}


export const FloatingLabelDarkBackground: Story = {
  args: {
    name: 'user',
    label: 'Username',
    labelPosition: 'inline',
    labelBackground:'#3a2f2f'
  }
}

export const InputBoxPlaceholder: Story = {
  args: {
    name: 'user',
    label: 'Username',
    labelPosition: 'outside',
    width: '300px',
    isFloating: false,
    placeholder: "Enter Username name",
  }
}
