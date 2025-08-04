import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../Button";
import { useRef } from "react";
import { Modal, type ModalHandle } from ".";

const meta: Meta<typeof Modal> = {
	title: "Components/Modal",
	component: Modal,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		children: {
			control: false,
			description: "Modal content.",
			table: {
				type: { summary: "ReactNode" },
			},
		},
		className: {
			control: { type: "text" },
			description: "Custom classes to apply to the modal container.",
			table: {
				type: { summary: "string" },
			},
		},
		showCloseIcon: {
			control: { type: "boolean" },
			description: "Show the close button in the top-right corner.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "true" },
			},
		},
		closeIcon: {
			control: false,
			description: "Optional custom icon for the close button.",
			table: {
				type: { summary: "ReactNode" },
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof Modal>;

const ModalWrapper = () => {
	const modalRef = useRef<ModalHandle>(null);

	return (
		<>
			<Button onClick={() => modalRef.current?.toggle()}>Open Modal</Button>
			<Modal ref={modalRef} showCloseIcon={true}>
				<p>Hello from modal!</p>
			</Modal>
		</>
	);
};

export const Default: Story = {
	render: (args) => <ModalWrapper {...args} />,
	args: {
		showCloseIcon: true,
	},
};
