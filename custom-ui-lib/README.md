# Custom UI Library

A modular and customizable UI component library built using React and Vite. The library includes a set of commonly used UI components like Buttons and Cards, as well as a flexible layout system.

## Authors

- **Devang Kandari**
- **Vedant Rai**
- **Gagan Kainthola**
- **Sandeep Tripathi**

## Installation

npm install team-chaos-ui-lib

## Usage

Once installed, you can import and use the components from the library in your React application:

```jsx
import React from "react";
import { Button, Card } from "custom-ui-lib";

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

| Variant     | Description                                 |
| ----------- | ------------------------------------------- |
| `primary`   | Blue background with white text             |
| `secondary` | Gray background with white text             |
| `success`   | Green background with white text            |
| `warning`   | Yellow/Orange background with white text    |
| `danger`    | Red background with white text              |
| `info`      | Light blue background with white text       |
| `light`     | Light background with dark text             |
| `dark`      | Dark background with white text             |
| `link`      | Looks like a standard hyperlink (text only) |

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

# Color Utility Class

The library provides a flexible set of utility classes for applying various background colors, text colors, and border colors. These styles are based on CSS variables, making them easy to customize and extend.

### Importing Colors

To use the color utilities in your project, import the CSS file:

```js
import "team-chaos-ui-lib/styles/features/colours/colours.css";
```

### Background Color Utilities

| Class Name      | Color Name           | Description                              |
| --------------- | -------------------- | ---------------------------------------- |
| `.bg-primary`   | Blue (#3b82f6)       | Sets background color to primary color   |
| `.bg-secondary` | Indigo (#6366f1)     | Sets background color to secondary color |
| `.bg-success`   | Green (#10b981)      | Sets background color to success color   |
| `.bg-danger`    | Red (#ef4444)        | Sets background color to danger color    |
| `.bg-warning`   | Yellow (#f59e0b)     | Sets background color to warning color   |
| `.bg-info`      | Sky Blue (#0ea5e9)   | Sets background color to info color      |
| `.bg-light`     | Light Gray (#f3f4f6) | Sets background color to light color     |
| `.bg-dark`      | Dark Gray (#1f2937)  | Sets background color to dark color      |

---

### Text Color Utilities

| Class Name        | Color Name           | Description                        |
| ----------------- | -------------------- | ---------------------------------- |
| `.text-primary`   | Blue (#3b82f6)       | Sets text color to primary color   |
| `.text-secondary` | Indigo (#6366f1)     | Sets text color to secondary color |
| `.text-success`   | Green (#10b981)      | Sets text color to success color   |
| `.text-danger`    | Red (#ef4444)        | Sets text color to danger color    |
| `.text-warning`   | Yellow (#f59e0b)     | Sets text color to warning color   |
| `.text-info`      | Sky Blue (#0ea5e9)   | Sets text color to info color      |
| `.text-light`     | Light Gray (#f3f4f6) | Sets text color to light color     |
| `.text-dark`      | Dark Gray (#1f2937)  | Sets text color to dark color      |

---

### Border Color Utilities

| Class Name          | Color Name           | Description                          |
| ------------------- | -------------------- | ------------------------------------ |
| `.border-primary`   | Blue (#3b82f6)       | Sets border color to primary color   |
| `.border-secondary` | Indigo (#6366f1)     | Sets border color to secondary color |
| `.border-success`   | Green (#10b981)      | Sets border color to success color   |
| `.border-danger`    | Red (#ef4444)        | Sets border color to danger color    |
| `.border-warning`   | Yellow (#f59e0b)     | Sets border color to warning color   |
| `.border-info`      | Sky Blue (#0ea5e9)   | Sets border color to info color      |
| `.border-light`     | Light Gray (#f3f4f6) | Sets border color to light color     |
| `.border-dark`      | Dark Gray (#1f2937)  | Sets border color to dark color      |

---

### Example

```html
<div class="bg-primary text-white">
  This div has a primary background color (Blue) and white text color.
</div>
```

```html
<div class="text-success">This div has a success text color (Green).</div>
```

```html
<div class="border-danger">This div has a danger border color (Red).</div>
```

# Typography Utility Class

These classes allow you to easily manage text styling, including font sizes, font weights, line heights, letter spacing, and text alignments. They enable quick adjustments to text appearance, ensuring consistent and responsive typography across different screen sizes.

### Importing

To use the Typography Utility Classes in your project, import the CSS file:

```js
import "team-chaos-ui-lib/styles/features/fonts/typography.css";
```

### Font Sizes

| Size Label  | Class      | Font Size |
| ----------- | ---------- | --------- |
| Extra Small | `.txt-xs`  | 0.75rem   |
| Small       | `.txt-sm`  | 0.875rem  |
| Medium      | `.txt-md`  | 1rem      |
| Large       | `.txt-lg`  | 1.125rem  |
| Extra Large | `.txt-xl`  | 1.25rem   |
| 2XL         | `.txt-2xl` | 1.5rem    |
| 3XL         | `.txt-3xl` | 1.875rem  |
| 4XL         | `.txt-4xl` | 2.25rem   |

### Font Weights

| Weight Label | Class          | Weight |
| ------------ | -------------- | ------ |
| Light        | `.fw-light`    | 300    |
| Normal       | `.fw-normal`   | 400    |
| Medium       | `.fw-medium`   | 500    |
| Semibold     | `.fw-semibold` | 600    |
| Bold         | `.fw-bold`     | 700    |

### Text Alignment

| Alignment Type | Class            |
| -------------- | ---------------- |
| Left           | `.align-left`    |
| Center         | `.align-center`  |
| Right          | `.align-right`   |
| Justify        | `.align-justify` |

### Text Transformations

| Transformation | Class         |
| -------------- | ------------- |
| Uppercase      | `.case-upper` |
| Lowercase      | `.case-lower` |
| Capitalize     | `.case-cap`   |

---

### Example

```html
<p class="txt-xl fw-bold align-center case-upper">
  This is a bold, extra large, centered, uppercase text.
</p>
```

# Flex Layout & Responsive Utility Class

These classes enable flexible and responsive layouts using CSS Flexbox. You can control the direction (row or column), alignment, and justification of elements within a flex container. They also support responsive design, applying different flex properties at different screen sizes (medium and large), allowing the layout to adapt seamlessly across devices.

### Importing

To use the Flex Layout & Responsive Utility Classes in your project, import the CSS file:

```js
import "team-chaos-ui-lib/styles/features/layouts/flex_layout_responsive.css";
```

### Core Flex Utilities

| Property        | Class               | Description                       |
| --------------- | ------------------- | --------------------------------- |
| Display         | `.flexy`            | `display: flex;`                  |
|                 | `.inline-flex`      | `display: inline-flex;`           |
| Flex Direction  | `.flex-row`         | `flex-direction: row;`            |
|                 | `.flex-row-reverse` | `flex-direction: row-reverse;`    |
|                 | `.flex-col`         | `flex-direction: column;`         |
|                 | `.flex-col-reverse` | `flex-direction: column-reverse;` |
| Justify Content | `.justify-start`    | `justify-content: flex-start;`    |
|                 | `.justify-center`   | `justify-content: center;`        |
|                 | `.justify-end`      | `justify-content: flex-end;`      |
|                 | `.justify-between`  | `justify-content: space-between;` |
|                 | `.justify-around`   | `justify-content: space-around;`  |
|                 | `.justify-evenly`   | `justify-content: space-evenly;`  |
| Align Items     | `.items-start`      | `align-items: flex-start;`        |
|                 | `.items-center`     | `align-items: center;`            |
|                 | `.items-end`        | `align-items: flex-end;`          |
|                 | `.items-stretch`    | `align-items: stretch;`           |
| Align Content   | `.content-start`    | `align-content: flex-start;`      |
|                 | `.content-center`   | `align-content: center;`          |
|                 | `.content-end`      | `align-content: flex-end;`        |
|                 | `.content-between`  | `align-content: space-between;`   |
|                 | `.content-around`   | `align-content: space-around;`    |
| Align Self      | `.self-start`       | `align-self: flex-start;`         |
|                 | `.self-center`      | `align-self: center;`             |
|                 | `.self-end`         | `align-self: flex-end;`           |

---

### Responsive Prefixes

| Breakpoint | Prefix |
| ---------- | ------ |
| Medium     | `md:`  |
| Large      | `lg:`  |

You can use these prefixes to apply flex utilities at specific screen sizes:

### Example

```html
<div class="flexy flex-col md:flex-row lg:justify-between">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

# Margin Utility Class

These classes control the margin around elements, allowing you to set different spacing values (from 0 to 6) or apply specific margins to the top, right, bottom, and left sides. Negative margins are also supported.

### Importing

To use the Margin Utility Classes in your project, import the CSS file:

```js
import "team-chaos-ui-lib/styles/features/spacing/margin.css";
```

### Core Margin Utilities

| Property        | Class         | Description                  |
| --------------- | ------------- | ---------------------------- |
| Margin          | `.mg-0`       | `margin: 0;`                 |
|                 | `.mg-1`       | `margin: 1x spacing;`        |
|                 | `.mg-2`       | `margin: 2x spacing;`        |
|                 | `.mg-3`       | `margin: 3x spacing;`        |
|                 | `.mg-4`       | `margin: 4x spacing;`        |
|                 | `.mg-5`       | `margin: 5x spacing;`        |
|                 | `.mg-6`       | `margin: 6x spacing;`        |
| Top Margin      | `.mg-top`     | `margin-top: 1x spacing;`    |
| Right Margin    | `.mg-right`   | `margin-right: 1x spacing;`  |
| Bottom Margin   | `.mg-bottom`  | `margin-bottom: 1x spacing;` |
| Left Margin     | `.mg-left`    | `margin-left: 1x spacing;`   |
| Negative Margin | `.mg-neg`     | `margin: -1x spacing;`       |
| Negative Top    | `.mg-neg-top` | `margin-top: -1x spacing;`   |

---

### Responsive Prefixes

| Breakpoint | Prefix |
| ---------- | ------ |
| Medium     | `md:`  |
| Large      | `lg:`  |

These prefixes are used to apply margin settings for specific screen sizes.

---

### Example

```html
<div class="mg-3">
  This div will have a margin of 3 times the spacing value.
</div>
```

```html
<div class="mg-top">
  This div will have a top margin of 1 times the spacing value.
</div>
```

```html
<div class="md:mg-2">
  This div will have a margin of 2 times the spacing value on medium screens and
  larger.
</div>
```

```html
<div class="lg:mg-bottom-1">
  This div will have a bottom margin of 1 times the spacing value on large
  screens and larger.
</div>
```

# Padding Utility Class

These classes control the padding inside elements, similar to margin utilities, with options to set padding values from 0 to 6 or apply padding to specific sides (top, right, bottom, left).

### Importing

To use the Padding Utility Classes in your project, import the CSS file:

```js
import "team-chaos-ui-lib/styles/features/spacing/padding.css";
```

### Core Padding Utilities

| Property       | Class        | Description                   |
| -------------- | ------------ | ----------------------------- |
| Padding        | `.pd-0`      | `padding: 0;`                 |
|                | `.pd-1`      | `padding: 1x spacing;`        |
|                | `.pd-2`      | `padding: 2x spacing;`        |
|                | `.pd-3`      | `padding: 3x spacing;`        |
|                | `.pd-4`      | `padding: 4x spacing;`        |
|                | `.pd-5`      | `padding: 5x spacing;`        |
|                | `.pd-6`      | `padding: 6x spacing;`        |
| Top Padding    | `.pd-top`    | `padding-top: 1x spacing;`    |
| Right Padding  | `.pd-right`  | `padding-right: 1x spacing;`  |
| Bottom Padding | `.pd-bottom` | `padding-bottom: 1x spacing;` |
| Left Padding   | `.pd-left`   | `padding-left: 1x spacing;`   |

---

### Responsive Prefixes

| Breakpoint | Prefix |
| ---------- | ------ |
| Medium     | `md:`  |
| Large      | `lg:`  |

These prefixes are used to apply padding settings for specific screen sizes.

---

### Example with Explanation

```html
<div class="pd-3">This div will have padding of 3 times the spacing value.</div>
```

```html
<div class="pd-top">
  This div will have padding on the top of 1x the spacing value.
</div>
```

```html
<div class="md:pd-2">
  This div will have padding of 2 times the spacing value on medium screens and
  larger.
</div>
```

```html
<div class="lg:pd-bottom-1">
  This div will have padding at the bottom of 1x the spacing value on large
  screens and larger.
</div>
```
