import React from 'react';
import { Story, Meta } from '@storybook/react';
import InputBox from '../InputBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faLock,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';

// Define the default arguments for InputBox
const defaultArgs = {
  name: 'Label',
  label: 'Email',
};

// Define your story's metadata
export default {
  title: 'InputBox',
  component: InputBox,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        code: `
import React from 'react';
import InputBox from 'react-input-glow';

const MyForm = () => {
  return (
    <>
      <InputBox name="name" label="Name" />
      <InputBox name="email" label="Email" />
    </>
  );
}
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} as Meta;

// Define a common template for InputBox stories
const Template: Story = (args) => <InputBox name="text" {...args} />;

// Define a function to generate the JSX code for any example
const generateCode = (args) => {
  let code = '<InputBox\n';

  for (const [key, value] of Object.entries(args)) {
    if (value !== undefined) {
      code += `  ${key}="${value}"\n`;
    }
  }

  code += '/>\n';

  return code;
};

// Example: InputBox with fixed args
export const InputBoxDefault = Template.bind({});
InputBoxDefault.args = { ...defaultArgs };

// Example: InputBox with inline label
export const InputBoxNonFloatingLabel = Template.bind({});
InputBoxNonFloatingLabel.args = {
  ...defaultArgs,
  isFloating: false
};
InputBoxNonFloatingLabel.parameters = {
  docs: {
    source: {
      code: generateCode({ ...defaultArgs, isFloating: false }),
    },
  },
};

// Example: InputBox with inline label
export const FloatingLabelInline = Template.bind({});
FloatingLabelInline.args = {
  ...defaultArgs,
  labelPosition: 'inline',
};
FloatingLabelInline.parameters = {
  docs: {
    source: {
      code: generateCode({ ...defaultArgs, labelPosition: 'inline' }),
    },
  },
};

// Example: InputBox with outside label
export const FloatingLabelOutside = Template.bind({});
FloatingLabelOutside.args = {
  ...defaultArgs,
  labelPosition: 'outside',
};
FloatingLabelOutside.parameters = {
  docs: {
    source: {
      code: generateCode({ ...defaultArgs, labelPosition: 'outside' }),
    },
  },
};

// Example: InputBox with inside label
export const FloatingLabelInside = Template.bind({});
FloatingLabelInside.args = {
  ...defaultArgs,
  labelPosition: 'inside',
};
FloatingLabelInside.parameters = {
  docs: {
    source: {
      code: generateCode({ ...defaultArgs, labelPosition: 'inside' }),
    },
  },
};

// Example: InputBox for password input with hidden icon
export const InputPassword = Template.bind({});
InputPassword.args = {
  ...defaultArgs,
  label: 'Password',
  type: 'password',
};
InputPassword.parameters = {
  docs: {
    source: {
      code: generateCode({
        ...defaultArgs,
        label: 'Password',
        type: 'password',
      }),
    },
  },
};

// Example: InputBox for password input with visible icon
export const InputPasswordIcon = Template.bind({});
InputPasswordIcon.args = {
  ...defaultArgs,
  label: 'Password',
  type: 'password',
  showIcon: true,
};
InputPasswordIcon.parameters = {
  docs: {
    source: {
      code: generateCode({
        ...defaultArgs,
        label: 'Password',
        type: 'password',
        showIcon: true,
      }),
    },
  },
};

// Example: InputBox for password input with custom icons
export const InputPasswordCustomIcon = Template.bind({});
InputPasswordCustomIcon.args = {
  ...defaultArgs,
  label: 'Password',
  type: 'password',
  showIcon: true,
  toggleOffIcon: <FontAwesomeIcon icon={faEyeSlash} />,
  toggleOnIcon: <FontAwesomeIcon icon={faEye} />,
};
InputPasswordCustomIcon.parameters = {
  docs: {
    source: {
      code: generateCode({
        ...defaultArgs,
        label: 'Password',
        type: 'password',
        toggleOffIcon: '<FontAwesomeIcon icon={faEyeSlash} />',
        toggleOnIcon: '<FontAwesomeIcon icon={faEye} />',
        showIcon: true,
      }),
    },
  },
};

// Example: InputBox with custom primary color
export const FloatingInputPrimaryColor = Template.bind({});
FloatingInputPrimaryColor.args = {
  ...defaultArgs,
  labelPosition: 'outside',
  primaryColor: '#10c0e7',
};
FloatingInputPrimaryColor.parameters = {
  docs: {
    source: {
      code: generateCode({
        ...defaultArgs,
        labelPosition: 'outside',
        primaryColor: '#10c0e7',
      }),
    },
  },
};

// Example: InputBox with custom border radius
export const FloatingInputBorderRadius = Template.bind({});
FloatingInputBorderRadius.args = {
  ...defaultArgs,
  labelPosition: 'outside',
  borderRadius: '0px',
};
FloatingInputBorderRadius.parameters = {
  docs: {
    source: {
      code: generateCode({
        ...defaultArgs,
        labelPosition: 'outside',
        borderRadius: '0px',
      }),
    },
  },
};

// Example: InputBox with custom border width
export const FloatingInputBorderWidth = Template.bind({});
FloatingInputBorderWidth.args = {
  ...defaultArgs,
  borderWidth: '2px',
};
FloatingInputBorderWidth.parameters = {
  docs: {
    source: {
      code: generateCode({
        ...defaultArgs,
        borderWidth: '2px',
      }),
    },
  },
};

// Example: InputBox with custom height
export const InputBoxHeight = Template.bind({});
InputBoxHeight.args = {
  ...defaultArgs,
  height: '30px',
};
InputBoxHeight.parameters = {
  docs: {
    source: {
      code: generateCode({
        ...defaultArgs,
        height: '30px',
      }),
    },
  },
};

// Example: InputBox with custom width
export const InputBoxWidth = Template.bind({});
InputBoxWidth.args = {
  ...defaultArgs,
  width: '400px',
};
InputBoxWidth.parameters = {
  docs: {
    source: {
      code: generateCode({
        ...defaultArgs,
        width: '400px',
      }),
    },
  },
};

// Example: InputBox with icon on the right
export const InputBoxRightIcon = Template.bind({});
InputBoxRightIcon.args = {
  ...defaultArgs,
  label: 'Username',
  icon: <FontAwesomeIcon icon={faUser} />,
  showIcon: true
};
InputBoxRightIcon.parameters = {
  docs: {
    source: {
      code: generateCode({
        ...defaultArgs,
        label: 'Username',
        icon: '<FontAwesomeIcon icon={faUser} />',
        showIcon: true
      }),
    },
  },
};

// Example: InputBox with icon on the left
export const InputBoxLeftIcon = Template.bind({});
InputBoxLeftIcon.args = {
  ...defaultArgs,
  label: 'Username',
  icon: <FontAwesomeIcon icon={faLock} color="gray" />,
  iconPosition: 'left',
  showIcon: true
};
InputBoxLeftIcon.parameters = {
  docs: {
    source: {
      code: generateCode({
        ...defaultArgs,
        label: 'Username',
        icon: '<FontAwesomeIcon icon={faLock} color="gray" />',
        iconPosition: 'left',
        showIcon: true
      }),
    },
  },
};

// Example: InputBox with inline label and left icon
export const InputBoxLabelInlineLeftIcon = Template.bind({});
InputBoxLabelInlineLeftIcon.args = {
  ...defaultArgs,
  label: 'Username',
  labelPosition: 'inline',
  icon: <FontAwesomeIcon icon={faLock} color="gray" />,
  iconPosition: 'left',
  showIcon: true
};
InputBoxLabelInlineLeftIcon.parameters = {
  docs: {
    source: {
      code: generateCode({
        ...defaultArgs,
        label: 'Username',
        labelPosition: 'inline',
        icon: '<FontAwesomeIcon icon={faLock} color="gray" />',
        iconPosition: 'left',
        showIcon: true
      }),
    },
  },
};

// Example: InputBox with inside label and left icon
export const InputBoxLabelInsideLeftIcon = Template.bind({});
InputBoxLabelInsideLeftIcon.args = {
  ...defaultArgs,
  label: 'Username',
  labelPosition: 'inside',
  icon: <FontAwesomeIcon icon={faLock} color="gray" />,
  iconPosition: 'left',
  showIcon: true
};
InputBoxLabelInsideLeftIcon.parameters = {
  docs: {
    source: {
      code: generateCode({
        ...defaultArgs,
        label: 'Username',
        labelPosition: 'inside',
        icon: '<FontAwesomeIcon icon={faLock} color="gray" />',
        iconPosition: 'left',
        showIcon: true
      }),
    },
  },
};

// Example: InputBox with inside label and left icon and not floating label
export const InputBoxNotFloatingLeftIcon = Template.bind({});
InputBoxNotFloatingLeftIcon.args = {
  ...defaultArgs,
  label: 'Username',
  isFloating: false,
  icon: <FontAwesomeIcon icon={faLock} color="gray" />,
  iconPosition: 'left',
  showIcon: true
};
InputBoxNotFloatingLeftIcon.parameters = {
  docs: {
    source: {
      code: generateCode({
        ...defaultArgs,
        label: 'Username',
        icon: '<FontAwesomeIcon icon={faLock} color="gray" />',
        iconPosition: 'left',
        isFloating: false,
        showIcon: true
      }),
    },
  },
};

// Example: InputBox with custom text color
export const InputBoxTextColor = Template.bind({});
InputBoxTextColor.args = {
  ...defaultArgs,
  label: 'Username',
  textColor: '#16e8ef',
};
InputBoxTextColor.parameters = {
  docs: {
    source: {
      code: generateCode({
        ...defaultArgs,
        label: 'Username',
        textColor: '#16e8ef',
      }),
    },
  },
};

// Example: InputBox with dark background for inline label
export const FloatingLabelDarkBackground: Story = (args) => (
  <div style={{ backgroundColor: '#3a2f2f', padding: 30 }}>
    <InputBox name="text" {...args} />
  </div>
);
FloatingLabelDarkBackground.args = {
  ...defaultArgs,
  label: 'Username',
  labelPosition: 'inline',
  labelBackground: '#3a2f2f',
    labelTextColor: '#ffff',
  primaryColor: '#ffff',
  textColor: '#ffff'
};
FloatingLabelDarkBackground.parameters = {
  docs: {
    source: {
      code: `
<div style={{ backgroundColor: '#3a2f2f' }}>
  ${generateCode({
        ...defaultArgs,
        label: 'Username',
        labelPosition: 'inline',
        labelBackground: '#3a2f2f',
          labelTextColor: '#ffff',
        primaryColor: '#ffff',
        textColor: '#ffff'
      })}
</div>
      `,
    },
  },
};

// Example: InputBox with a placeholder
export const InputBoxPlaceholder = Template.bind({});
InputBoxPlaceholder.args = {
  ...defaultArgs,
  label: 'Username',
  labelPosition: 'outside',
  isFloating: false,
  placeholder: 'Enter Username name',
};
InputBoxPlaceholder.parameters = {
  docs: {
    source: {
      code: generateCode({
        ...defaultArgs,
        label: 'Username',
        labelPosition: 'outside',
        isFloating: false,
        placeholder: 'Enter Username name',
      }),
    },
  },
};

// Example: InputBox with an error outside label
export const InputBoxLabelOutsideError = Template.bind({});
InputBoxLabelOutsideError.args = {
  ...defaultArgs,
  label: 'Username',
  labelPosition: 'outside',
  isFloating: true,
  errorText: 'Error Text',
};
InputBoxLabelOutsideError.parameters = {
  docs: {
    source: {
      code: generateCode({
        ...defaultArgs,
        label: 'Username',
        labelPosition: 'outside',
        isFloating: true,
        errorText: 'Error Text',
      }),
    },
  },
};

// Example: InputBox with an error inline label
export const InputBoxLabelInlineError = Template.bind({});
InputBoxLabelInlineError.args = {
  ...defaultArgs,
  label: 'Username',
  labelPosition: 'inline',
  errorText: 'Error Text',
};
InputBoxLabelInlineError.parameters = {
  docs: {
    source: {
      code: generateCode({
        ...defaultArgs,
        label: 'Username',
        labelPosition: 'inline',
        errorText: 'Error Text',
      }),
    },
  },
};

// Example: InputBox with an error inside label and password type
export const InputBoxLabelInsideError = Template.bind({});
InputBoxLabelInsideError.args = {
  ...defaultArgs,
  label: 'Username',
  labelPosition: 'inside',
  errorText: 'Error Text',
  type: 'password',
};
InputBoxLabelInsideError.parameters = {
  docs: {
    source: {
      code: generateCode({
        ...defaultArgs,
        label: 'Username',
        labelPosition: 'inside',
        errorText: 'Error Text',
        type: 'password',
      }),
    },
  },
};

// Example: InputBox with custom error label text color
export const InputBoxErrorLabelColor = Template.bind({});
InputBoxErrorLabelColor.args = {
  ...defaultArgs,
  label: 'Username',
  labelPosition: 'outside',
  errorText: 'Error Text',
  errorLabelTextColor: '#191717',
};
InputBoxErrorLabelColor.parameters = {
  docs: {
    source: {
      code: generateCode({
        ...defaultArgs,
        label: 'Username',
        labelPosition: 'outside',
        errorText: 'Error Text',
        errorLabelTextColor: '#191717',
      }),
    },
  },
};
