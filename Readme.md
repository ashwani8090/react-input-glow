# React Floating Input Component

The React Floating Input Component provides a flexible and customizable input field with floating labels. It is designed to be easy to use and highly configurable.

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

To use the React Floating Input Component, you should import the `FloatingInputProps` interface from 'react' and use it to define the props for your input field. Here's an example of how to use it:

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

Feel free to explore the available props in the `FloatingInputProps` interface and adjust them to fit your specific use case. The React Floating Input Component is highly customizable and can be integrated into your forms with ease.
