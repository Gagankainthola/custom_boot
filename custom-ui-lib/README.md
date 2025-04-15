# Custom UI Library

A modular and customizable UI component library built using React and Vite. The library includes a set of commonly used UI components like Buttons and Cards, as well as a flexible layout system.

## Authors

- **Devang Kandari**
- **Vedant Rai**
- **Gagan Kainthola**
- **Sandeep Tripathi**

## Installation

You can install the `custom-ui-lib` npm package via npm:

npm install custom-ui-lib

## Usage

Once installed, you can import and use the components from the library in your React application:
```jsx
import React from 'react';
import { Button, Card } from 'custom-ui-lib';

function App() {
  return (
    <div>
      <Button variant="primary">Click Me</Button>
      <Card title="Card Title" content="Card Content" />
    </div>
  );
}

export default App;
```
# Available Components

## Button

A customizable button component with various color variants.

### Available Button Variants

| Variant    | Description / Style Example                   |
|------------|-----------------------------------------------|
| `primary`  | Blue background with white text               |
| `secondary`| Gray background with white text               |
| `success`  | Green background with white text              |
| `warning`  | Yellow/Orange background with white text      |
| `danger`   | Red background with white text                |
| `info`     | Light blue background with white text         |
| `light`    | Light background with dark text               |
| `dark`     | Dark background with white text               |
| `link`     | Looks like a standard hyperlink (text only)   |

Example:

```jsx
<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
```


## Card

A simple card component with a title and content section.

Props:

title: (string) The title of the card.

content: (string) The content inside the card.

Example:
```jsx
<Card title="Card Title" content="This is a simple card." />
```