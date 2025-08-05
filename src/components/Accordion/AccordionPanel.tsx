import type { KeyboardEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { AccordionContent } from "./AccordionContent";
import { AccordionHeader } from "./AccordionHeader";

export type AccordionPanelProps<T> = {
	id: string;
	item: T;
	isOpen: boolean;
	onToggle: () => void;
	renderHeading: (item: T, isOpen: boolean) => ReactNode;
	renderContent: (item: T, isOpen: boolean) => ReactNode;
	renderToggleIcon?: (isOpen: boolean) => ReactNode;
	className?: string;
	headingClassName?: string;
	contentClassName?: string;
	buttonClassName?: string;
	buttonRef?: (el: HTMLButtonElement | null) => void;
	onButtonKeyDown?: (e: KeyboardEvent<HTMLButtonElement>) => void;
};

export const AccordionPanel = <T,>({
	id,
	item,
	isOpen,
	onToggle,
	renderHeading,
	renderContent,
	renderToggleIcon,
	className,
	headingClassName,
	contentClassName,
	buttonRef,
	buttonClassName,
}: AccordionPanelProps<T>) => {
	return (
		<div
			className={cn(
				"w-[100%] shadow-[0_2px_5px_rgba(8,15,52,0.12)] bg-ui-white overflow-hidden rounded-[1.125rem]",
				isOpen && " border-ui-primary border-[2px]",

				className,
			)}
		>
			<AccordionHeader
				id={id}
				item={item}
				isOpen={isOpen}
				onToggle={onToggle}
				renderHeading={renderHeading}
				renderToggleIcon={renderToggleIcon}
				className={headingClassName}
				buttonRef={buttonRef}
				buttonClassName={buttonClassName}
			/>
			<AccordionContent
				id={id}
				item={item}
				renderContent={renderContent}
				isOpen={isOpen}
				className={contentClassName}
			/>
		</div>
	);
};
