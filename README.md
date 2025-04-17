# Custom UI Library

A modular and customizable UI component library built using React and Vite. The library includes a set of commonly used UI components like Buttons, Cards, and Navbars, as well as a flexible layout system.

## Authors

- **Devang Kandari**
- **Vedant Rai**
- **Gagan Kainthola**
- **Sandeep Tripathi**

## Installation

To install the library, run:

```bash
npm install team-chaos-custom-ui-lib


## Usage

// 🔥 Import components from your custom UI lib
import { Button, Card, Footer, Form, MainSection, Navbar, Table, Test } from "team-chaos-custom-ui-lib";

// 🔥 Import utility CSS from your lib's dist
import "team-chaos-custom-ui-lib/styles/features/colours/colours.css";
import "team-chaos-custom-ui-lib/styles/features/fonts/typography.css";
import "team-chaos-custom-ui-lib/styles/features/layouts/flex_layout_responsive.css";
import "team-chaos-custom-ui-lib/styles/features/spacing/margin.css";
import "team-chaos-custom-ui-lib/styles/features/spacing/padding.css";
import "team-chaos-custom-ui-lib/styles/features/containers/card.css";
import "team-chaos-custom-ui-lib/styles/features/containers/container1.css";
import "team-chaos-custom-ui-lib/styles/features/containers/footer.css";
import "team-chaos-custom-ui-lib/styles/features/containers/form.css";
import "team-chaos-custom-ui-lib/styles/features/containers/mainsection.css";
import "team-chaos-custom-ui-lib/styles/features/containers/navbar.css";
import "team-chaos-custom-ui-lib/styles/features/containers/table.css";

function App() {
  return (
    <div>
      <Navbar />
      <Button variant="primary">Click Me</Button>
      <Card title="Card Title" description="Card Content" imgUrl="path-to-image.jpg" />
      <Footer />
    </div>
  );
}

export default App;
```

# Available Components

# `Button` Component

The `Button` component is a reusable custom button with different visual variants that can be customized through the `variant` prop. The component uses Tailwind-like utility classes for styling and supports additional props to be passed down to the `button` element.

## Props

| Prop       | Type     | Description                                                                                  |
| ---------- | -------- | -------------------------------------------------------------------------------------------- |
| `variant`  | `string` | Specifies the style variant of the button.                                                   |
| `children` | `node`   | The content of the button (text, elements, etc.)                                             |
| `...props` | `object` | Additional props that are passed to the `button` element (e.g., `onClick`, `disabled`, etc.) |

## Variant Options

The `variant` prop defines the button style. The available values are:

- `"primary"`: A primary button with a default blue background (`bg-primary text-white`).
- `"secondary"`: A secondary button with a grey background (`bg-secondary text-white`).
- `"success"`: A success button with a green background (`bg-success text-white`).
- `"warning"`: A warning button with a yellow background (`bg-warning text-white`).
- `"danger"`: A danger button with a red background (`bg-danger text-white`).
- `"info"`: An info button with a light blue background (`bg-info text-white`).
- `"light"`: A light button with a white background and dark text (`bg-light text-dark`).
- `"dark"`: A dark button with a black background (`bg-dark text-white`).
- `"link"`: A link-style button with only text (`text-link`).

By default, if no `variant` is provided, the button will have the `"primary"` variant style.

## Example Usage

### Primary Button

```jsx
<Button variant="primary">Primary Button</Button>
```

# `Card` Component

The `CardComponent` is a reusable card UI component designed to display content with an image, title, and description. It is styled using utility classes for layout and appearance.

## Props

| Prop          | Type     | Description                                           |
| ------------- | -------- | ----------------------------------------------------- |
| `title`       | `string` | The title of the card.                                |
| `description` | `string` | A short description or content for the card.          |
| `imgUrl`      | `string` | The URL of the image to be displayed inside the card. |

## Example Usage

### Simple Card with Title, Description, and Image

```jsx
<CardComponent
  title="Card Title"
  description="This is a description of the card."
  imgUrl="https://via.placeholder.com/300"
/>
```

# Color Utility Class

These utility classes help you manage background colors, text colors, and border colors easily. They are based on CSS variables for simple customization and ensure consistency across different components.

### Importing

```js
import "team-chaos-ui-lib/styles/features/colours/colours.css";
```

### Background Colors

| Class           | Color Name |
| --------------- | ---------- |
| `.bg-primary`   | Blue       |
| `.bg-secondary` | Indigo     |
| `.bg-success`   | Green      |
| `.bg-danger`    | Red        |
| `.bg-warning`   | Yellow     |
| `.bg-info`      | Sky Blue   |
| `.bg-light`     | Light Gray |
| `.bg-dark`      | Dark Gray  |

### Text Colors

| Class             | Color Name |
| ----------------- | ---------- |
| `.text-primary`   | Blue       |
| `.text-secondary` | Indigo     |
| `.text-success`   | Green      |
| `.text-danger`    | Red        |
| `.text-warning`   | Yellow     |
| `.text-info`      | Sky Blue   |
| `.text-light`     | Light Gray |
| `.text-dark`      | Dark Gray  |

### Border Colors

| Class               | Color Name |
| ------------------- | ---------- |
| `.border-primary`   | Blue       |
| `.border-secondary` | Indigo     |
| `.border-success`   | Green      |
| `.border-danger`    | Red        |
| `.border-warning`   | Yellow     |
| `.border-info`      | Sky Blue   |
| `.border-light`     | Light Gray |
| `.border-dark`      | Dark Gray  |

---

### Example

```html
<div class="bg-primary text-white border-dark">
  This div has a blue background, white text, and dark gray border.
</div>
```

# Card Component CSS

The card component styles are designed to create a clean, consistent, and modern UI element for displaying content. It includes a container, header, and body with specific styles for layout, typography, and images.

### Importing

```js
import "team-chaos-ui-lib/styles/features/containers/card.css";
```

### Card Container

The `.card-container` class defines the overall card layout, including border, shadow, and dimensions.

| Property      | Value                        |
| ------------- | ---------------------------- |
| Border        | 2px solid black              |
| Border Radius | 0.375rem                     |
| Overflow      | Hidden                       |
| Box Shadow    | 0 4px 6px rgba(0, 0, 0, 0.1) |
| Width         | 664px                        |
| Height        | 530px                        |

### Card Header

The `.card-header` class defines the styles for the card's header, which includes the background color and padding.

| Property         | Value   |
| ---------------- | ------- |
| Background Color | White   |
| Padding          | 0.75rem |

### Card Body

The `.card-body` class handles the padding and text styles for the card's body content.

| Property | Value   |
| -------- | ------- |
| Padding  | 0.75rem |

#### Card Image

The `.card-body img` class specifies the size, shape, and positioning for the card's image.

| Property      | Value    |
| ------------- | -------- |
| Width         | 100%     |
| Height        | 240px    |
| Object Fit    | Cover    |
| Border Radius | 0.375rem |
| Margin Bottom | 0.75rem  |

### Card Header Text

The `.card-header h2` class controls the typography for the card's header title.

| Property    | Value   |
| ----------- | ------- |
| Font Size   | 1.25rem |
| Color       | Black   |
| Font Weight | 600     |

### Card Body Text

The `.card-body p` class sets the typography for the body text.

| Property  | Value                    |
| --------- | ------------------------ |
| Font Size | 1rem                     |
| Color     | `var(--secondary-color)` |

---

### Example

```html
<div class="card-container">
  <div class="card-header">
    <h2>Card Title</h2>
  </div>
  <div class="card-body">
    <img src="image.jpg" alt="Card Image" />
    <p>This is a sample description text for the card body.</p>
  </div>
</div>
```

# Container Utility Classes

These utility classes help structure the layout and manage spacing, typography, and alignment. Designed for flexibility and consistency, these utilities can be used to quickly scaffold responsive sections and content areas.

### Importing

```js
import "team-chaos-ui-lib/styles/features/containers/container1.css";
```

---

### Typography Utilities

| Class Name       | Description                                          |
| ---------------- | ---------------------------------------------------- |
| `.txt-3xl`       | Font size of 2rem and dark slate gray text (#2c3e50) |
| `.txt-lg`        | Font size of 1.125rem                                |
| `.fw-semibold`   | Font weight of 600                                   |
| `.txt-primary`   | Text color: Blue (#3498db)                           |
| `.txt-secondary` | Text color: Green (#2ecc71)                          |

---

### Spacing Utilities

| Class Name | Description                                  |
| ---------- | -------------------------------------------- |
| `.mt-2`    | Top margin based on spacing unit × 2         |
| `.py-4`    | Top and bottom padding equal to spacing unit |

---

### Layout Utilities

| Class Name     | Description                                                                       |
| -------------- | --------------------------------------------------------------------------------- |
| `.container`   | Sets max-width to 1200px, auto margins for centering, and 1rem horizontal padding |
| `.bg-light`    | Background color: Light Gray (#f4f4f4), with 2rem padding                         |
| `.text-center` | Centers the text horizontally                                                     |

---

### Example

```html
<section class="container bg-light py-4">
  <h1 class="txt-3xl fw-semibold text-center txt-primary">
    Welcome to the Dashboard
  </h1>
  <p class="txt-lg txt-secondary text-center mt-2">
    Manage all your data in one place.
  </p>
</section>
```

# Form Utility Classes

These classes provide a consistent and responsive structure for creating form layouts, ensuring clean spacing, alignment, and intuitive inputs.

### Importing

```js
import "team-chaos-ui-lib/styles/features/containers/form.css";
```

---

### Form Container

| Class Name        | Description                                                                                 |
| ----------------- | ------------------------------------------------------------------------------------------- |
| `.form-container` | Centered container with 2px black border and 8px radius, padded spacing, max width of 600px |

---

### Form Groups and Fields

| Class Name           | Description                                                             |
| -------------------- | ----------------------------------------------------------------------- |
| `.form-group`        | Adds vertical spacing between form elements                             |
| `.input-field`       | Full-width input with padding, 1px border (default color), 4px radius   |
| `.input-field:focus` | Removes outline and changes border color to Blue (#3498db) when focused |
| `.form-label`        | Block label with spacing, dark text (#2c3e50), and font size of 1rem    |

---

### Submit Button

| Class Name          | Description                                                                              |
| ------------------- | ---------------------------------------------------------------------------------------- |
| `.submit-btn`       | Padded button with background color Blue (#3498db), white text, no border, rounded edges |
| `.submit-btn:hover` | Changes background to Dark Blue (custom `--primary-dark`) on hover                       |

---

### Alignment

| Class Name    | Description      |
| ------------- | ---------------- |
| `.txt-center` | Centers the text |

---

### Example

```html
<form class="form-container">
  <div class="form-group">
    <label class="form-label">Name</label>
    <input type="text" class="input-field" />
  </div>
  <div class="form-group">
    <label class="form-label">Email</label>
    <input type="email" class="input-field" />
  </div>
  <div class="txt-center">
    <button class="submit-btn">Submit</button>
  </div>
</form>
```

# Main Section Utility Classes

These utility classes offer layout and styling support for main content sections. They include responsive containers, padding, borders, background colors, and more to ensure flexible and readable layout structures.

### Importing

```js
import "team-chaos-ui-lib/styles/features/containers/mainsection.css";
```

---

### Layout & Container

| Class              | Description                                         |
| ------------------ | --------------------------------------------------- |
| `.container`       | Max width 1200px with 16px horizontal padding       |
| `.md:flex-row`     | Flex container with row direction on medium screens |
| `.w-full`          | Full width                                          |
| `.md:w-1/2`        | 50% width on medium screens                         |
| `.overflow-x-auto` | Enables horizontal scroll if needed                 |

---

### Spacing

| Class    | Description                    |
| -------- | ------------------------------ |
| `.gap-6` | 1.5rem gap between elements    |
| `.py-4`  | 1rem padding on top and bottom |

---

### Borders & Radius

| Class             | Description                  |
| ----------------- | ---------------------------- |
| `.border-2`       | 2px solid border             |
| `.border-primary` | Border color: Blue (#007BFF) |
| `.rounded-lg`     | Border radius: 0.5rem        |

---

### Colors

| Class            | Description                            |
| ---------------- | -------------------------------------- |
| `.bg-light`      | Background color: Light Gray (#F7F7F7) |
| `.txt-secondary` | Text color: Muted Gray (#6C757D)       |

---

### Example

```html
<div class="container md:flex-row gap-6 py-4">
  <div class="w-full md:w-1/2 border-2 border-primary rounded-lg bg-light p-4">
    <p class="txt-secondary">
      This is a responsive, styled container with muted gray text and a blue
      border.
    </p>
  </div>
</div>
```

# Navbar Utility Classes

These classes define the layout and styling for the navigation bar, component headings, and basic text utilities. Colors, typography, and spacing are defined using custom properties for consistency.

### Importing

```js
import "team-chaos-ui-lib/styles/features/containers/navbar.css";
```

---

## Color Variables

| Variable            | Value   | Description        |
| ------------------- | ------- | ------------------ |
| `--primary-color`   | #8F87F1 | Soft Purple        |
| `--secondary-color` | #C4D9FF | Light Blue         |
| `--light-color`     | #FED2E2 | Light Pink         |
| `--accent-color`    | #F1E7E7 | Light Grayish Pink |
| `--text-muted`      | #F6E7F7 | Muted Pink         |

---

## Navbar Layout

| Class                | Description                                                                   |
| -------------------- | ----------------------------------------------------------------------------- |
| `.navbar-container`  | Flex row, spaced elements, soft purple background, custom font, bottom border |
| `.navbar-logo h1`    | Title with white text                                                         |
| `.navbar-logo p`     | Subtitle with muted pink text                                                 |
| `.navbar-links`      | Flex container for menu items                                                 |
| `.navbar-menu`       | Flex list with spacing between items                                          |
| `.navbar-link`       | White text links with smooth hover transition                                 |
| `.navbar-link:hover` | On hover: text color changes to light grayish pink                            |

---

## Components Heading and Section

| Class                    | Description                                           |
| ------------------------ | ----------------------------------------------------- |
| `.components-heading`    | Header section with light pink background and padding |
| `.components-heading h2` | Soft purple text using Poppins font                   |
| `.components-section`    | Light pink background section with padding            |

---

## Typography and Spacing Utilities

| Class          | Description                  |
| -------------- | ---------------------------- |
| `.txt-primary` | Text color: Soft Purple      |
| `.fw-semibold` | Font weight: 600             |
| `.txt-xl`      | Font size: 1.25rem           |
| `.pd-x-4`      | Padding left & right: 1rem   |
| `.pd-y-2`      | Padding top & bottom: 0.5rem |

---

## Example

```html
<nav class="navbar-container">
  <div class="navbar-logo">
    <h1>MySite</h1>
    <p>Simple. Elegant. Fast.</p>
  </div>
  <div class="navbar-links">
    <ul class="navbar-menu">
      <li><a class="navbar-link" href="#">Home</a></li>
      <li><a class="navbar-link" href="#">About</a></li>
      <li><a class="navbar-link" href="#">Contact</a></li>
    </ul>
  </div>
</nav>

<section class="components-heading">
  <h2 class="txt-primary fw-semibold txt-xl">UI Components</h2>
</section>
```

# Table Utility Classes

These classes define the styling for tables, including layout, padding, borders, and color schemes for table headers and data cells. Custom properties are used for consistent colors.

### Importing

```js
import "team-chaos-ui-lib/styles/features/containers/table.css";
```

---

## Color Variables

| Variable          | Value   | Description         |
| ----------------- | ------- | ------------------- |
| `--primary-color` | #8F87F1 | Soft Purple         |
| `--text-light`    | #ECF0F1 | Light Grayish White |
| `--text-dark`     | #2C3E50 | Dark Text           |

---

## Table Layout

| Class                           | Description                                                  |
| ------------------------------- | ------------------------------------------------------------ |
| `.table`                        | Full-width table with collapsed borders                      |
| `.table th`                     | Table headers with padding, background color, and light text |
| `.table td`                     | Table data cells with padding and white background           |
| `.table .component-name`        | Component name in soft purple color                          |
| `.table .component-description` | Component description in dark text color                     |

---

## Table Container

| Class              | Description                                                |
| ------------------ | ---------------------------------------------------------- |
| `.table-container` | Container with top margin and horizontal overflow handling |

---

## Example

```html
<div class="table-container">
  <table class="table">
    <thead>
      <tr>
        <th>Component Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="component-name">Button</td>
        <td class="component-description">A clickable button element.</td>
      </tr>
      <tr>
        <td class="component-name">Card</td>
        <td class="component-description">
          A container element for grouping content.
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

# Typography Utility Classes

This stylesheet defines a set of utility classes to control text sizes, font weights, text alignments, and text transformations. It uses custom properties (CSS variables) for consistent typography.

### Importing

```js
import "team-chaos-ui-lib/styles/features/fonts/typography.css";
```

---

## Size Variables

| Variable         | Value    | Description              |
| ---------------- | -------- | ------------------------ |
| `--txt-size-xs`  | 0.75rem  | Extra Small Text Size    |
| `--txt-size-sm`  | 0.875rem | Small Text Size          |
| `--txt-size-md`  | 1rem     | Medium Text Size         |
| `--txt-size-lg`  | 1.125rem | Large Text Size          |
| `--txt-size-xl`  | 1.25rem  | Extra Large Text Size    |
| `--txt-size-2xl` | 1.5rem   | 2X Extra Large Text Size |
| `--txt-size-3xl` | 1.875rem | 3X Extra Large Text Size |
| `--txt-size-4xl` | 2.25rem  | 4X Extra Large Text Size |

---

## Font Weight Variables

| Variable        | Value | Description          |
| --------------- | ----- | -------------------- |
| `--fw-light`    | 300   | Light Font Weight    |
| `--fw-normal`   | 400   | Normal Font Weight   |
| `--fw-medium`   | 500   | Medium Font Weight   |
| `--fw-semibold` | 600   | Semibold Font Weight |
| `--fw-bold`     | 700   | Bold Font Weight     |

---

## Font Size Classes

| Class      | Font Size | Description              |
| ---------- | --------- | ------------------------ |
| `.txt-xs`  | 0.75rem   | Extra Small Text Size    |
| `.txt-sm`  | 0.875rem  | Small Text Size          |
| `.txt-md`  | 1rem      | Medium Text Size         |
| `.txt-lg`  | 1.125rem  | Large Text Size          |
| `.txt-xl`  | 1.25rem   | Extra Large Text Size    |
| `.txt-2xl` | 1.5rem    | 2X Extra Large Text Size |
| `.txt-3xl` | 1.875rem  | 3X Extra Large Text Size |
| `.txt-4xl` | 2.25rem   | 4X Extra Large Text Size |

---

## Font Weight Classes

| Class          | Font Weight | Description          |
| -------------- | ----------- | -------------------- |
| `.fw-light`    | 300         | Light Font Weight    |
| `.fw-normal`   | 400         | Normal Font Weight   |
| `.fw-medium`   | 500         | Medium Font Weight   |
| `.fw-semibold` | 600         | Semibold Font Weight |
| `.fw-bold`     | 700         | Bold Font Weight     |

---

## Text Color Classes

| Class          | Color                  | Description        |
| -------------- | ---------------------- | ------------------ |
| `.txt-primary` | `var(--primary-color)` | Primary Text Color |
| `.txt-dark`    | `var(--text-dark)`     | Dark Text Color    |
| `.txt-light`   | `var(--text-light)`    | Light Text Color   |

---

## Text Alignment Classes

| Class          | Description              |
| -------------- | ------------------------ |
| `.txt-center`  | Align text to the center |
| `.txt-left`    | Align text to the left   |
| `.txt-right`   | Align text to the right  |
| `.txt-justify` | Justify text alignment   |

---

## Text Transformation Classes

| Class         | Description               |
| ------------- | ------------------------- |
| `.case-upper` | Convert text to uppercase |
| `.case-lower` | Convert text to lowercase |
| `.case-cap`   | Capitalize text           |

---

## Example

```html
<div class="txt-2xl fw-semibold txt-primary txt-center">
  This is an example of a 2xl size, semibold, primary-colored, centered text.
</div>
```

# Flex Layout & Responsive Utility Classes

This stylesheet defines utility classes for flexbox layout, alignment, and responsiveness. It includes basic flexbox properties as well as media queries for responsive design at different breakpoints.

### Importing

```js
import "team-chaos-ui-lib/styles/features/layouts/flex_layout_responsive.css";
```

---

## Flexbox Layout Classes

| Class               | Description                             |
| ------------------- | --------------------------------------- |
| `.flex`             | Defines a flex container.               |
| `.inline-flex`      | Defines an inline flex container.       |
| `.flex-row`         | Aligns flex items in a row (default).   |
| `.flex-row-reverse` | Aligns flex items in a reversed row.    |
| `.flex-col`         | Aligns flex items in a column.          |
| `.flex-col-reverse` | Aligns flex items in a reversed column. |

---

## Justification Classes

| Class              | Description                                      |
| ------------------ | ------------------------------------------------ |
| `.justify-start`   | Aligns items to the start of the container.      |
| `.justify-center`  | Aligns items to the center of the container.     |
| `.justify-end`     | Aligns items to the end of the container.        |
| `.justify-between` | Distributes items with space between them.       |
| `.justify-around`  | Distributes items with space around them.        |
| `.justify-evenly`  | Distributes items with equal space between them. |

---

## Alignment Classes

| Class            | Description                                  |
| ---------------- | -------------------------------------------- |
| `.items-start`   | Aligns items to the start of the container.  |
| `.items-center`  | Aligns items to the center of the container. |
| `.items-end`     | Aligns items to the end of the container.    |
| `.items-stretch` | Stretches items to fill the container.       |

---

## Content Alignment Classes

| Class              | Description                                    |
| ------------------ | ---------------------------------------------- |
| `.content-start`   | Aligns content to the start of the container.  |
| `.content-center`  | Aligns content to the center of the container. |
| `.content-end`     | Aligns content to the end of the container.    |
| `.content-between` | Distributes content with space between them.   |
| `.content-around`  | Distributes content with space around them.    |

---

## Self Alignment Classes

| Class          | Description                                     |
| -------------- | ----------------------------------------------- |
| `.self-start`  | Aligns the item to the start of the container.  |
| `.self-center` | Aligns the item to the center of the container. |
| `.self-end`    | Aligns the item to the end of the container.    |

---

## Media Queries for Responsiveness

### For Screens >= 768px (Medium Devices)

- `.md\:flex` - Defines a flex container.
- `.md\:inline-flex` - Defines an inline flex container.
- `.md\:flex-row` - Aligns flex items in a row.
- `.md\:flex-row-reverse` - Aligns flex items in a reversed row.
- `.md\:flex-col` - Aligns flex items in a column.
- `.md\:flex-col-reverse` - Aligns flex items in a reversed column.
- `.md\:justify-start` - Aligns items to the start.
- `.md\:justify-center` - Aligns items to the center.
- `.md\:justify-end` - Aligns items to the end.
- `.md\:justify-between` - Distributes items with space between.
- `.md\:justify-around` - Distributes items with space around.
- `.md\:justify-evenly` - Distributes items with equal space.
- `.md\:items-start` - Aligns items to the start.
- `.md\:items-center` - Aligns items to the center.
- `.md\:items-end` - Aligns items to the end.
- `.md\:items-stretch` - Stretches items to fill the container.
- `.md\:content-start` - Aligns content to the start.
- `.md\:content-center` - Aligns content to the center.
- `.md\:content-end` - Aligns content to the end.
- `.md\:content-between` - Distributes content with space between.
- `.md\:content-around` - Distributes content with space around.
- `.md\:self-start` - Aligns item to the start.
- `.md\:self-center` - Aligns item to the center.
- `.md\:self-end` - Aligns item to the end.

### For Screens >= 1024px (Large Devices)

- `.lg\:flex` - Defines a flex container.
- `.lg\:inline-flex` - Defines an inline flex container.
- `.lg\:flex-row` - Aligns flex items in a row.
- `.lg\:flex-row-reverse` - Aligns flex items in a reversed row.
- `.lg\:flex-col` - Aligns flex items in a column.
- `.lg\:flex-col-reverse` - Aligns flex items in a reversed column.
- `.lg\:justify-start` - Aligns items to the start.
- `.lg\:justify-center` - Aligns items to the center.
- `.lg\:justify-end` - Aligns items to the end.
- `.lg\:justify-between` - Distributes items with space between.
- `.lg\:justify-around` - Distributes items with space around.
- `.lg\:justify-evenly` - Distributes items with equal space.
- `.lg\:items-start` - Aligns items to the start.
- `.lg\:items-center` - Aligns items to the center.
- `.lg\:items-end` - Aligns items to the end.
- `.lg\:items-stretch` - Stretches items to fill the container.
- `.lg\:content-start` - Aligns content to the start.
- `.lg\:content-center` - Aligns content to the center.
- `.lg\:content-end` - Aligns content to the end.
- `.lg\:content-between` - Distributes content with space between.
- `.lg\:content-around` - Distributes content with space around.
- `.lg\:self-start` - Aligns item to the start.
- `.lg\:self-center` - Aligns item to the center.
- `.lg\:self-end` - Aligns item to the end.

---

## Example Usage

```html
<div class="flex justify-center items-center">
  <div class="lg:flex-row md:flex-col">
    <div class="flex-item">Item 1</div>
    <div class="flex-item">Item 2</div>
    <div class="flex-item">Item 3</div>
  </div>
</div>
```

# Margin Utility Classes

This stylesheet provides utility classes to set margin values for elements with adjustable spacing. It includes general margin classes, specific margin direction classes, and negative margin classes, as well as responsive variations for medium and large devices.

### Importing

```js
import "team-chaos-ui-lib/styles/features/spacking/margin.css";
```

---

## General Margin Classes

| Class   | Description                                |
| ------- | ------------------------------------------ |
| `.mg-0` | Sets margin to `0`.                        |
| `.mg-1` | Sets margin to `calc(var(--spacing) * 1)`. |
| `.mg-2` | Sets margin to `calc(var(--spacing) * 2)`. |
| `.mg-3` | Sets margin to `calc(var(--spacing) * 3)`. |
| `.mg-4` | Sets margin to `calc(var(--spacing) * 4)`. |
| `.mg-5` | Sets margin to `calc(var(--spacing) * 5)`. |

---

## Specific Margin Direction Classes

| Class        | Description                                       |
| ------------ | ------------------------------------------------- |
| `.mg-top`    | Sets top margin to `calc(var(--spacing) * 1)`.    |
| `.mg-right`  | Sets right margin to `calc(var(--spacing) * 1)`.  |
| `.mg-bottom` | Sets bottom margin to `calc(var(--spacing) * 1)`. |
| `.mg-left`   | Sets left margin to `calc(var(--spacing) * 1)`.   |

---

## Negative Margin Classes

| Class            | Description                                        |
| ---------------- | -------------------------------------------------- |
| `.mg-neg`        | Sets all margins to `calc(var(--spacing) * -1)`.   |
| `.mg-neg-top`    | Sets top margin to `calc(var(--spacing) * -1)`.    |
| `.mg-neg-right`  | Sets right margin to `calc(var(--spacing) * -1)`.  |
| `.mg-neg-bottom` | Sets bottom margin to `calc(var(--spacing) * -1)`. |
| `.mg-neg-left`   | Sets left margin to `calc(var(--spacing) * -1)`.   |

---

## Media Queries for Responsiveness

### For Screens >= 768px (Medium Devices)

| Class             | Description                                       |
| ----------------- | ------------------------------------------------- |
| `.md:mg-1`        | Sets margin to `calc(var(--spacing) * 1)`.        |
| `.md:mg-2`        | Sets margin to `calc(var(--spacing) * 2)`.        |
| `.md:mg-3`        | Sets margin to `calc(var(--spacing) * 3)`.        |
| `.md:mg-4`        | Sets margin to `calc(var(--spacing) * 4)`.        |
| `.md:mg-top-1`    | Sets top margin to `calc(var(--spacing) * 1)`.    |
| `.md:mg-right-1`  | Sets right margin to `calc(var(--spacing) * 1)`.  |
| `.md:mg-bottom-1` | Sets bottom margin to `calc(var(--spacing) * 1)`. |
| `.md:mg-left-1`   | Sets left margin to `calc(var(--spacing) * 1)`.   |

### For Screens >= 1024px (Large Devices)

| Class             | Description                                       |
| ----------------- | ------------------------------------------------- |
| `.lg:mg-1`        | Sets margin to `calc(var(--spacing) * 1)`.        |
| `.lg:mg-2`        | Sets margin to `calc(var(--spacing) * 2)`.        |
| `.lg:mg-3`        | Sets margin to `calc(var(--spacing) * 3)`.        |
| `.lg:mg-4`        | Sets margin to `calc(var(--spacing) * 4)`.        |
| `.lg:mg-top-1`    | Sets top margin to `calc(var(--spacing) * 1)`.    |
| `.lg:mg-right-1`  | Sets right margin to `calc(var(--spacing) * 1)`.  |
| `.lg:mg-bottom-1` | Sets bottom margin to `calc(var(--spacing) * 1)`. |
| `.lg:mg-left-1`   | Sets left margin to `calc(var(--spacing) * 1)`.   |

---

## Example Usage

```html
<div class="mg-2">
  <div class="md:mg-3 lg:mg-4">
    <p>Example content with margin utility classes applied.</p>
  </div>
</div>
```

# Padding Utility Classes

This stylesheet provides utility classes to manage padding for elements with customizable spacing. It includes general padding classes, specific padding direction classes, and responsive padding classes for tablet and large screen devices.

### Importing

```js
import "team-chaos-ui-lib/styles/features/spacing/padding.css";
```

---

## General Padding Classes

| Class   | Description                                 |
| ------- | ------------------------------------------- |
| `.pd-0` | Sets padding to `0`.                        |
| `.pd-1` | Sets padding to `calc(var(--spacing) * 1)`. |
| `.pd-2` | Sets padding to `calc(var(--spacing) * 2)`. |
| `.pd-3` | Sets padding to `calc(var(--spacing) * 3)`. |
| `.pd-4` | Sets padding to `calc(var(--spacing) * 4)`. |
| `.pd-5` | Sets padding to `calc(var(--spacing) * 5)`. |
| `.pd-6` | Sets padding to `calc(var(--spacing) * 6)`. |

---

## Specific Padding Direction Classes

| Class        | Description                                        |
| ------------ | -------------------------------------------------- |
| `.pd-top`    | Sets top padding to `calc(var(--spacing) * 1)`.    |
| `.pd-right`  | Sets right padding to `calc(var(--spacing) * 1)`.  |
| `.pd-bottom` | Sets bottom padding to `calc(var(--spacing) * 1)`. |
| `.pd-left`   | Sets left padding to `calc(var(--spacing) * 1)`.   |

---

## Media Queries for Responsiveness

### For Screens >= 768px (Tablet/Medium Devices)

| Class            | Description                                        |
| ---------------- | -------------------------------------------------- |
| `.md\:pd-0`      | Sets padding to `0`.                               |
| `.md\:pd-1`      | Sets padding to `calc(var(--spacing) * 1)`.        |
| `.md\:pd-2`      | Sets padding to `calc(var(--spacing) * 2)`.        |
| `.md\:pd-3`      | Sets padding to `calc(var(--spacing) * 3)`.        |
| `.md\:pd-4`      | Sets padding to `calc(var(--spacing) * 4)`.        |
| `.md\:pd-5`      | Sets padding to `calc(var(--spacing) * 5)`.        |
| `.md\:pd-6`      | Sets padding to `calc(var(--spacing) * 6)`.        |
| `.md\:pd-top`    | Sets top padding to `calc(var(--spacing) * 1)`.    |
| `.md\:pd-right`  | Sets right padding to `calc(var(--spacing) * 1)`.  |
| `.md\:pd-bottom` | Sets bottom padding to `calc(var(--spacing) * 1)`. |
| `.md\:pd-left`   | Sets left padding to `calc(var(--spacing) * 1)`.   |

### For Screens >= 1024px (Large Devices)

| Class            | Description                                        |
| ---------------- | -------------------------------------------------- |
| `.lg\:pd-0`      | Sets padding to `0`.                               |
| `.lg\:pd-1`      | Sets padding to `calc(var(--spacing) * 1)`.        |
| `.lg\:pd-2`      | Sets padding to `calc(var(--spacing) * 2)`.        |
| `.lg\:pd-3`      | Sets padding to `calc(var(--spacing) * 3)`.        |
| `.lg\:pd-4`      | Sets padding to `calc(var(--spacing) * 4)`.        |
| `.lg\:pd-5`      | Sets padding to `calc(var(--spacing) * 5)`.        |
| `.lg\:pd-6`      | Sets padding to `calc(var(--spacing) * 6)`.        |
| `.lg\:pd-top`    | Sets top padding to `calc(var(--spacing) * 1)`.    |
| `.lg\:pd-right`  | Sets right padding to `calc(var(--spacing) * 1)`.  |
| `.lg\:pd-bottom` | Sets bottom padding to `calc(var(--spacing) * 1)`. |
| `.lg\:pd-left`   | Sets left padding to `calc(var(--spacing) * 1)`.   |

---

## Example Usage

```html
<div class="pd-3">
  <div class="md:pd-4 lg:pd-5">
    <p>Example content with padding utility classes applied.</p>
  </div>
</div>
```
