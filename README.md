<p align="center">
Coniungo UI
</p>

<p align="center">
  ✨ A customizable, accessible, and developer-friendly React UI component library powered by <strong>Tailwind CSS</strong> , <strong>TypeScript</strong>, and <strong>Vite</strong>.
</p>

## ⚙️ Technologies

[![React](https://img.shields.io/badge/React-20232a?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-0ea5e9?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/download)
[![clsx](https://img.shields.io/badge/clsx-1e293b?style=for-the-badge&logo=npm&logoColor=white)](https://github.com/lukeed/clsx)
[![tailwind-merge](https://img.shields.io/badge/tw--merge-06b6d4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://github.com/dcastil/tailwind-merge)
[![class-variance-authority](https://img.shields.io/badge/CVA-8b5cf6?style=for-the-badge&logo=vercel&logoColor=white)](https://cva.style)

## ✨ Features

- 🎨 **Pre-styled Components** using raw CSS hex values (no custom theme required)
- ⚛️ **React 19** with `forwardRef` and `class-variance-authority`
- 🌀 **Tailwind CSS v3+ compatible**
- ✨ **Zero-config styles** with automatic CSS—no setup needed
- 💅 Consistent design using `cva` and `tailwind-merge`
- 📦 Tree-shakable, typed, and optimized via Vite
- 📚 Storybook and TypeScript support

## 📦 Installation

Install the library (and make sure your app has Tailwind):

```bash
pnpm add @coniungo/ui
# or
npm install @coniungo/ui
```

## 🚀 Getting Started


# ✅ Button

A fully customizable, accessible React button component with built-in **loading state**, **icon support**, and **ripple effect**. Designed for flexibility using **Class Variance Authority** for variants.

## Features

- Supports **variants** like `intent`, `size`, and `radius`.
- Built-in **loading state** with customizable loader.
- Optional **start and end icons**.
- Full-width support with `fullWidth` prop.
- Ripple effect on click.
- Compatible with standard HTML button attributes.
- Works seamlessly in **client-side React** (`"use client"`).

## Props

| Prop         | Type                                     | Default     | Description                                                       |
| ------------ | ---------------------------------------  | -------     | ----------------------------------------------------------------- |
| `intent`     | `string` (variant)                       | —           | Sets the button style variant (primary, secondary, etc.).         |
| `size`       | `string` (variant)                       | —           | Controls the button size.                                         |
| `radius`     | `string` (variant)                       | —           | Controls the border radius.                                       |
| `loading`    | `boolean`                                | `false`     | Shows loading state and disables the button.                      |
| `loader`     | `ReactNode`                              | `<Loader />`| Custom loader component to display when `loading` is true.        |
| `iconStart`  | `ReactNode`                              | —           | Optional icon displayed before the button text.                   |
| `iconEnd`    | `ReactNode`                              | —           | Optional icon displayed after the button text.                    |
| `fullWidth`  | `boolean`                                | `false`     | Makes the button span the full width of its container.            |
| `disabled`   | `boolean`                                | `false`     | Disables the button.                                              |

All other native `button` attributes (like `onClick`, `type`, etc.) are supported.

## Usage

```tsx
import { Button } from "@coniungo/ui/Button";
import { Loader } from "@coniungo/ui/svg/Loader";

<Button intent="primary" size="md" onClick={() => alert("Clicked!")}>
  Click Me
</Button>

<Button loading intent="secondary" loader={<Loader />}>
  Loading...
</Button>

<Button iconStart={<Icon />} iconEnd={<Arrow />} fullWidth>
  Button with Icons
</Button>
```



# 🪟 Modal

A fully controllable, accessible React modal component with **imperative API** using refs. Supports **custom close icons**, backdrop clicks, and keyboard escape handling. Built for client-side usage (`"use client"`).

## Features

- Imperative API via `ref` (`toggle`, `open`, `close`).
- Optional close icon in the top-right corner.
- Close modal on **backdrop click**.
- Close modal on **Escape key** press.
- Fully customizable via `className` prop.
- Works with any ReactNode as children.

## Props

| Prop             | Type                      | Default      | Description                                    |
| ---------------- | ------------------------- | -------      | ---------------------------------------------- |   
| `children`       | `ReactNode`               | —            | The content to render inside the modal.        |
| `className`      | `string`                  | —            | Additional classes for the modal container.    | 
| `showCloseIcon`  | `boolean`                 | `true`       | Show the close button in the top-right corner. |
| `closeIcon`      | `ReactNode`               | `<Cancel />` | Optional custom icon for the close button.     |
| `modalRef`       | `RefObject<ModalHandle>`  | —            | Ref to control the modal imperatively.         |
| `onBackdropClick`| `() => void`              | —            | Callback when the backdrop is clicked.         |

## ModalHandle

The `modalRef` exposes the following methods:

```tsx
type ModalHandle = {
  toggle: () => void;
  open: () => void;
  close: () => void;
};
```
---

# 🧾 Accordion Component

The `Accordion` component is a flexible and generic expandable/collapsible UI element that accepts any data type and renders titles and content based on user-provided render functions.

### 🎯 Features

- Fully generic TypeScript support for any data structure
- Controlled open/close state with smooth animations
- Accessible with proper ARIA attributes and keyboard interaction
- Customizable styling via `className` prop

### 📦 Usage

```tsx
import { Accordion } from "@coniungo/ui";

const accordionData = [
  {
    title: "What is your return policy?",
    content:
      "You can return any item within 30 days of purchase as long as it’s in its original condition.",
  },
  // more items...
];

export default function Example() {
  return (
    <Accordion
      data={accordionData}
      renderTitle={(item) => item.title}
      renderContent={(item) => item.content}
      className="my-accordion"
    />
  );
}
```

## Carousel

A flexible and responsive React carousel component with **customizable navigation buttons** and smooth transition effects. Supports any ReactNode slides and automatic slide cloning for seamless infinite loops.

## Props

| Prop                  | Type             | Default | Description                                   |
| --------------------- | ---------------- | ------- | --------------------------------------------- |
| `children`            | `ReactNode[]`    | —       | An array of React nodes to display as slides. |
| `className`           | `string`         | —       | Custom classes for the carousel wrapper.      |
| `prevButton`          | `ReactNode`      | —       | Custom previous button element.               |
| `nextButton`          | `ReactNode`      | —       | Custom next button element.                   |
| `prevButtonClassName` | `string`         | —       | Additional classes for the previous button.   |
| `nextButtonClassName` | `string`         | —       | Additional classes for the next button.       |
| `transitionDuration`  | `number`         | `500`   | Slide transition duration in milliseconds.    |

## Features

- Smooth sliding transitions with configurable duration.
- Supports custom **prev/next buttons** and styles.
- Handles infinite loop seamlessly using slide cloning.
- Fully responsive and works with any ReactNode children.

## Usage

# Accordion

A fully customizable, generic React Accordion component. Supports custom headings, content, and toggle icons for each item. Keyboard navigation is built-in.

## Props

| Prop                       | Type                                                      | Default | Description                                                                         |
| -------------------------- | --------------------------------------------------------- | ------- | ----------------------------------------------------------------------------------- |
| `items`                     | `AccordionItem<T>[]`                                     | —       | Array of accordion items. Each item can have an optional `id`.                      |
| `renderHeading`             | `(item: AccordionItem<T>, isOpen: boolean) => ReactNode` | —       | Function to render the heading of each panel. Receives the item and its open state. |
| `renderContent`             | `(item: AccordionItem<T>, isOpen: boolean) => ReactNode` | —       | Function to render the content of each panel. Receives the item and its open state. |
| `renderToggleIcon`          | `(isOpen: boolean) => ReactNode`                         | —       | Optional function to render a custom toggle icon based on open state.               |
| `panelClassName`            | `string`                                                 | —       | Additional classes for each accordion panel.                                        |
| `panelHeadingClassName`     | `string`                                                 | —       | Additional classes for the heading section of each panel.                           |
| `panelContentClassName`     | `string`                                                 | —       | Additional classes for the content section of each panel.                           |
| `panelButtonClassName`      | `string`                                                 | —       | Additional classes for the toggle button in each panel.                             |
| `idKey`                     | `keyof T \| string`                                      | `"id"`  | Key in the item object to use as a unique identifier.                               |

## Usage Example

```tsx
import { Accordion, type AccordionItem } from "@coniungo/ui/Accordion";

type FAQ = {
  question: string;
  answer: string;
};

const faqItems: AccordionItem<FAQ>[] = [
  { id: "1", question: "What is your return policy?", answer: "You can return within 30 days." },
  { id: "2", question: "Do you offer support?", answer: "Yes, 24/7 customer support." },
];

export default function FAQAccordion() {
  return (
    <Accordion
      items={faqItems}
      renderHeading={(item, isOpen) => (
        <h3 className="font-semibold">{item.question} {isOpen ? "-" : "+"}</h3>
      )}
      renderContent={(item) => <p>{item.answer}</p>}
      panelClassName="border-b border-gray-200"
      panelHeadingClassName="p-4 cursor-pointer"
      panelContentClassName="p-4 text-gray-600"
    />
  );
}
```



## 🚧 Coming Soon

We're actively working on expanding the Coniungo UI library with the following components:

- 📊 **Table** — Fully customizable data tables with sorting, pagination, and responsive design.
- 📚 **SideNav** — Sidebar navigation for complex layouts and dashboards.


[![npm version](https://img.shields.io/npm/v/@coniungo/ui)](https://www.npmjs.com/package/@coniungo/ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
