import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion, type AccordionProps } from ".";

type MyItem = {
	id?: string;
	title: string;
	content: string;
};

const items: MyItem[] = [
	{
		id: "item-1",
		title: "What is Tailwind CSS?",
		content:
			"Tailwind CSS is a utility-first CSS framework for rapidly building custom UIs.",
	},
	{
		id: "item-2",
		title: "What is CVA?",
		content:
			"CVA (Class Variance Authority) helps manage variant-based classnames in Tailwind.",
	},
	{
		id: "item-3",
		title: "Is this Accordion accessible?",
		content:
			"Yes. It uses semantic HTML, ARIA attributes, and keyboard-friendly toggling.",
	},
];

const meta: Meta<AccordionProps<MyItem>> = {
	title: "Components/Accordion",
	component: Accordion,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		renderHeading: { table: { disable: true } },
		renderContent: { table: { disable: true } },
		renderToggleIcon: { table: { disable: true } },
		idKey: {
			control: "text",
			description: "Optional custom key name to use as id on each item",
			defaultValue: "customId",
		},
		panelClassName: {
			control: "text",
			description: "Class name for panel wrapper",
		},
		panelHeadingClassName: {
			control: "text",
			description: "Class name for panel heading",
		},
		panelContentClassName: {
			control: "text",
			description: "Class name for panel content",
		},
		panelButtonClassName: {
			control: "text",
			description: "Class name for panel button",
		},
	},
};

export default meta;

type Story = StoryObj<typeof Accordion<MyItem>>;

export const Default: Story = {
	render: (args) => (
		<Accordion
			{...args}
			items={args.items}
			renderHeading={args.renderHeading}
			renderContent={args.renderContent}
		/>
	),

	args: {
		items: items,
		renderHeading: (item) => item.title,
		renderContent: (item) => item.content,
	},
};
