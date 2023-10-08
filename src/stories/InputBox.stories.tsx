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
export const FloatingInline = Template.bind({});
FloatingInline.args = {
  ...defaultArgs,
  labelPosition: 'inline',
};
FloatingInline.parameters = {
  docs: {
    source: {
      code: generateCode({ ...defaultArgs, labelPosition: 'inline' }),
    },
  },
};

// Example: InputBox with outside label
export const FloatingOutside = Template.bind({});
FloatingOutside.args = {
  ...defaultArgs,
  labelPosition: 'outside',
};
FloatingOutside.parameters = {
  docs: {
    source: {
      code: generateCode({ ...defaultArgs, labelPosition: 'outside' }),
    },
  },
};

// Example: InputBox with inside label
export const FloatingInside = Template.bind({});
FloatingInside.args = {
  ...defaultArgs,
  labelPosition: 'inside',
};
FloatingInside.parameters = {
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
  icon: false,
};
InputPassword.parameters = {
  docs: {
    source: {
      code: generateCode({
        ...defaultArgs,
        label: 'Password',
        type: 'password',
        icon: false,
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
};
InputPasswordIcon.parameters = {
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

// Example: InputBox for password input with custom icons
export const InputPasswordCustomIcon = Template.bind({});
InputPasswordCustomIcon.args = {
  ...defaultArgs,
  label: 'Password',
  type: 'password',
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
  labelPosition: 'outside',
  borderWidth: '2px',
};
FloatingInputBorderWidth.parameters = {
  docs: {
    source: {
      code: generateCode({
        ...defaultArgs,
        labelPosition: 'outside',
        borderWidth: '2px',
      }),
    },
  },
};

// Example: InputBox with custom height
export const InputBoxHeight = Template.bind({});
InputBoxHeight.args = {
  ...defaultArgs,
  labelPosition: 'outside',
  height: '30px',
};
InputBoxHeight.parameters = {
  docs: {
    source: {
      code: generateCode({
        ...defaultArgs,
        labelPosition: 'outside',
        height: '30px',
      }),
    },
  },
};

// Example: InputBox with custom width
export const InputBoxWidth = Template.bind({});
InputBoxWidth.args = {
  ...defaultArgs,
  labelPosition: 'outside',
  width: '400px',
};
InputBoxWidth.parameters = {
  docs: {
    source: {
      code: generateCode({
        ...defaultArgs,
        labelPosition: 'outside',
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
  labelPosition: 'outside',
  width: '300px',
  icon: <FontAwesomeIcon icon={faUser} />,
};
InputBoxRightIcon.parameters = {
  docs: {
    source: {
      code: generateCode({
        ...defaultArgs,
        label: 'Username',
        labelPosition: 'outside',
        width: '300px',
        icon: '<FontAwesomeIcon icon={faUser} />',
      }),
    },
  },
};

// Example: InputBox with icon on the left
export const InputBoxLeftIcon = Template.bind({});
InputBoxLeftIcon.args = {
  ...defaultArgs,
  label: 'Username',
  labelPosition: 'outside',
  width: '300px',
  icon: <FontAwesomeIcon icon={faLock} color="gray" />,
  iconPosition: 'left',
};
InputBoxLeftIcon.parameters = {
  docs: {
    source: {
      code: generateCode({
        ...defaultArgs,
        label: 'Username',
        labelPosition: 'outside',
        width: '300px',
        icon: '<FontAwesomeIcon icon={faLock} color="gray" />',
        iconPosition: 'left',
      }),
    },
  },
};

// Example: InputBox with inline label and left icon
export const InputBoxInlineLeftIcon = Template.bind({});
InputBoxInlineLeftIcon.args = {
  ...defaultArgs,
  label: 'Username',
  labelPosition: 'inline',
  width: '300px',
  icon: <FontAwesomeIcon icon={faLock} color="gray" />,
  iconPosition: 'left',
};
InputBoxInlineLeftIcon.parameters = {
  docs: {
    source: {
      code: generateCode({
        ...defaultArgs,
        label: 'Username',
        labelPosition: 'inline',
        width: '300px',
        icon: '<FontAwesomeIcon icon={faLock} color="gray" />',
        iconPosition: 'left',
      }),
    },
  },
};

// Example: InputBox with inside label and left icon
export const InputBoxInsideLeftIcon = Template.bind({});
InputBoxInsideLeftIcon.args = {
  ...defaultArgs,
  label: 'Username',
  labelPosition: 'inside',
  width: '300px',
  icon: <FontAwesomeIcon icon={faLock} color="gray" />,
  iconPosition: 'left',
};
InputBoxInsideLeftIcon.parameters = {
  docs: {
    source: {
      code: generateCode({
        ...defaultArgs,
        label: 'Username',
        labelPosition: 'inside',
        width: '300px',
        icon: '<FontAwesomeIcon icon={faLock} color="gray" />',
        iconPosition: 'left',
      }),
    },
  },
};

// Example: InputBox with inside label and left icon and not floating label
export const InputBoxNotFloatingLeftIcon = Template.bind({});
InputBoxNotFloatingLeftIcon.args = {
  ...defaultArgs,
  label: 'Username',
  labelPosition: 'inside',
  width: '300px',
  icon: <FontAwesomeIcon icon={faLock} color="gray" />,
  iconPosition: 'left',
  isFloating: false,
};
InputBoxNotFloatingLeftIcon.parameters = {
  docs: {
    source: {
      code: generateCode({
        ...defaultArgs,
        label: 'Username',
        labelPosition: 'inside',
        width: '300px',
        icon: '<FontAwesomeIcon icon={faLock} color="gray" />',
        iconPosition: 'left',
        isFloating: false,
      }),
    },
  },
};

// Example: InputBox with custom text color
export const InputBoxTextColor = Template.bind({});
InputBoxTextColor.args = {
  ...defaultArgs,
  label: 'Username',
  labelPosition: 'inside',
  width: '300px',
  icon: <FontAwesomeIcon icon={faLock} color="gray" />,
  iconPosition: 'left',
  isFloating: false,
  textColor: '#16e8ef',
};
InputBoxTextColor.parameters = {
  docs: {
    source: {
      code: generateCode({
        ...defaultArgs,
        label: 'Username',
        labelPosition: 'inside',
        width: '300px',
        icon: '<FontAwesomeIcon icon={faLock} color="gray" />',
        iconPosition: 'left',
        isFloating: false,
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
  width: '300px',
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
        width: '300px',
        isFloating: false,
        placeholder: 'Enter Username name',
      }),
    },
  },
};

// Example: InputBox with an error outside label
export const InputBoxOutsideError = Template.bind({});
InputBoxOutsideError.args = {
  ...defaultArgs,
  label: 'Username',
  labelPosition: 'outside',
  isFloating: true,
  errorText: 'Error Text',
};
InputBoxOutsideError.parameters = {
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
export const InputBoxInlineError = Template.bind({});
InputBoxInlineError.args = {
  ...defaultArgs,
  label: 'Username',
  labelPosition: 'inline',
  isFloating: true,
  errorText: 'Error Text',
};
InputBoxInlineError.parameters = {
  docs: {
    source: {
      code: generateCode({
        ...defaultArgs,
        label: 'Username',
        labelPosition: 'inline',
        isFloating: true,
        errorText: 'Error Text',
      }),
    },
  },
};

// Example: InputBox with an error inside label and password type
export const InputBoxInsideError = Template.bind({});
InputBoxInsideError.args = {
  ...defaultArgs,
  label: 'Username',
  labelPosition: 'inside',
  isFloating: true,
  errorText: 'Error Text',
  type: 'password',
};
InputBoxInsideError.parameters = {
  docs: {
    source: {
      code: generateCode({
        ...defaultArgs,
        label: 'Username',
        labelPosition: 'inside',
        isFloating: true,
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
  isFloating: true,
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
        isFloating: true,
        errorText: 'Error Text',
        errorLabelTextColor: '#191717',
      }),
    },
  },
};
