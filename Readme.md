# React Input Glow Component

The React Input Glow Component provides a flexible and customizable input field with floating labels. It is designed to be easy to use and highly configurable.

## Installation

You can install the React Glow Input Component using npm or yarn:

```sh
npm install react-input-glow
```

or

```sh
yarn add react-input-glow
```

## Usage

To use the React Input Glow Component, you should import the `FloatingInputProps` interface from 'react' and use it to define the props for your input field. Here's an example of how to use it:

```jsx
import React from 'react';
import InputBox from 'react-input-glow';

const MyForm = () => {
  const handleChange = (value) => {
    // Handle input value change
  };

  return (
    <div>
      <h2>Example Form</h2>
      <label>Name:</label>
      <InputBox
        name="name"
        label="Name"
        placeholder="Enter your name"
        onChange={handleChange}
        // Add other props as needed
      />
      {/* Add more input fields */}
    </div>
  );
};

export default MyForm;
```

In this example, we import the `FloatingInputProps` interface and use it to define the props for our input field. We can customize various aspects of the input field, such as the label, placeholder, and event handlers.

Feel free to explore the available props in the `FloatingInputProps` interface and adjust them to fit your specific use case. The React Input Glow Component is highly customizable and can be integrated into your forms with ease.

## Storybook Example

You can also explore more examples in the [React Input Glow Component Storybook](https://react-input-glow.web.app/?path=/docs/inputbox--docs).

## Props Table

Here's a table of available props for the `FloatingInputProps` interface:

| Prop              | Type          | Description                                       |
| ----------------- | ------------- | ------------------------------------------------- |
| name              | string        | The name attribute for the input field.           |
| label             | string        | The label for the input field.                    |
| placeholder       | string        | The placeholder text for the input field.         |
| onChange          | (value: string | any) => void | An event handler for value changes. |
| type              | string        | The type of the input field (e.g., "text", "password"). |
| className         | string        | Additional CSS class for the input container.      |
| inputClassName    | string        | Additional CSS class for the input field.          |
| labelPosition     | 'inline' \| 'outside' \| 'inside' | The position of the label. |
| labelClassName    | string        | Additional CSS class for the label element.       |
| borderRadius      | string        | The border radius for the input container.        |
| height            | string        | The height of the input field.                    |
| width             | string        | The width of the input field.                     |
| borderColor       | string        | The border color of the input field.              |
| borderWidth       | string        | The border width of the input field.              |
| iconPosition      | 'left' \| 'right' | The position of an icon (if provided).       |
| icon              | any           | An icon component to display within the input.    |
| required          | boolean       | Whether the input is required.                    |
| isFloating        | boolean       | Whether the label should float on focus.          |
| disabled          | boolean       | Whether the input is disabled.                    |
| labelBackground   | string        | The background color of the label.               |
| textColor         | string        | The text color of the input field.                |
| primaryColor      | string        | The primary color of the input field.             |
| secondaryColor    | string        | The secondary color of the input field.           |
```
