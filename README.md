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

```tsx
import { Button } from "@coniungo/ui";

export default function Example() {
  return <Button intent="primary">Click Me</Button>;
}
```

## 🧱 Components

```
✅ Button
```



The `Button` component is a flexible, theme-aware, utility-first button built using Tailwind CSS and [class-variance-authority (CVA)](https://cva.style/). 
It supports multiple variants (`intent`), sizes, and boolean states like `disabled` and `fullWidth`. And `ripple` effect onClick animation

---




## 🎨 Variants (`intent`)

Supported button styles via the `intent` prop:

- `primary`
- `secondary`
- `primary_outline`
- `secondary_outline`
- `primary_borderless`
- `secondary_borderless`

---

## 📏 Sizes (`size`)

- `small` (`sm`)
- `medium` (`md`) — default

---

## 🔄 Radius (`radius`)

Control button corner roundness with:

- `none`
- `sm`
- `md`
- `lg`
- `xl`
- `full`
- `pill`
- `fat`

---

## ✅ Boolean Props

- `disabled` — disables button interaction and applies dimmed styles.
- `fullWidth` — makes button width 100% (default: `false`).
- `loading` — shows a loading spinner and disables the button.

---

## 🎉 Icons

Use `iconStart` and `iconEnd` props to add icons before or after the button label.

```tsx
<Button iconStart={<Icon />}>Save</Button>
<Button iconEnd={<Icon />} intent="secondary">Next</Button>

```

---

## 📦 Usage

```tsx
import { Button } from '@/coniungo/ui/Button';

<Button>Default</Button>

<Button intent="primary">Primary</Button>
<Button intent="secondary_outline">Secondary Outline</Button>

<Button intent="primary_borderless" size="small">Small Borderless</Button>

<Button radius="pill" intent="secondary" iconStart={<SomeIcon />} iconEnd={<AnotherIcon />}>
  With Icons
</Button>

<Button loading loader={<CustomLoader />} />

<Button disabled fullWidth>Disabled Full Width</Button>
```

## ⚙️ Props Interface
```tsx
interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled">, VariantProps<typeof buttonVariant> {
  loading?: boolean;
  loader?: ReactNode;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
}


```

## 🎨 Theming

You can customize the look and feel of the components using the className props. Override colors, spacing, or other utilities.




```css
@theme {
	--color-ui-primary: #0077b6;
	--color-ui-secondary: #ff7a00;
	--color-ui-white: #ffffff;
	--color-ui-gray: #36363633;
}

```

## 🛠️ Customization

You can customize the button further by passing your own Tailwind or custom CSS classes via the className prop.

```tsx
<Button intent="primary" className="shadow-lg hover:scale-105 transition-transform">
  Custom Styled Button
</Button>


```


```

 🧩 Accordion Component

```

A fully accessible, customizable, and keyboard-friendly Accordion component built with **React** and **Tailwind CSS**.

---

## 🚀 Features

- ✅ Keyboard navigation (`ArrowUp`, `ArrowDown`, `Home`, `End`)
- ✅ Accessible with `aria-*` attributes
- ✅ Optional focus wrapping
- ✅ Custom heading, content, and toggle icon renderers
- ✅ Smooth animation with `max-height` + transition
- ✅ Clean structure with `Accordion`, `AccordionPanel`, `AccordionHeader`, and `AccordionContent` components
- ✅ Optional ARIA region roles for screen readers

---
## 📦 Usage



```tsx

1. Basic Example


import { Accordion } from "@/coniungo/ui/Accordion";

const items = [
  { id: "one", title: "Section 1", content: "Lorem ipsum..." },
  { id: "two", title: "Section 2", content: "Dolor sit amet..." },
];

<Accordion
  items={items}
  renderHeading={(item) => item.title}
  renderContent={(item) => item.content}
/>



2. With Custom Toggle Icon



<Accordion
  items={items}
  renderHeading={(item) => item.title}
  renderContent={(item) => item.content}
  renderToggleIcon={(isOpen) => (
    <span className={`transition-transform ${isOpen ? "rotate-90" : ""}`}>
      ➤
    </span>
  )}
/>



```

| Prop                    | Type                          | Required  | Description                     |
| ----------------------- | ----------------------------- | --------  | ------------------------------- |
| `items`                 | `AccordionItem<T>[]`          | ✅        | Items to render                 |
| `renderHeading`         | `(item, isOpen) => ReactNode` | ✅        | Render function for the header  |
| `renderContent`         | `(item, isOpen) => ReactNode` | ✅        | Render function for the content |
| `renderToggleIcon`      | `(isOpen) => ReactNode`       | ❌        | Custom toggle icon              |
| `panelClassName`        | `string`                      | ❌        | Wrapper class for each panel    |
| `panelHeadingClassName` | `string`                      | ❌        | Class for heading wrapper       |
| `panelContentClassName` | `string`                      | ❌        | Class for content wrapper       |
| `panelButtonClassName`  | `string`                      | ❌        | Class for toggle button         |
| `idKey`                 | `keyof T`                     | ❌        | Custom ID key (default: `"id"`) |


```
⚠️ This package requires Tailwind CSS v3.0.0 or later to be installed in your project.

```

[![npm version](https://img.shields.io/npm/v/@coniungo/ui)](https://www.npmjs.com/package/@coniungo/ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
