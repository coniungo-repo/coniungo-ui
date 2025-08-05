import type { KeyboardEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ArrowIcon } from "@/svg/ArrowIcon";

export type AccordionHeaderProps<T> = {
	id: string;
	item: T;
	isOpen: boolean;
	onToggle: () => void;
	renderHeading: (item: T, isOpen: boolean) => ReactNode;
	renderToggleIcon?: (isOpen: boolean) => ReactNode;
	className?: string;
	buttonClassName?: string;
	headingClassName?: string;
	buttonRef?: (el: HTMLButtonElement | null) => void;
};

export const AccordionHeader = <T,>({
	id,
	item,
	isOpen,
	onToggle,
	renderHeading,
	renderToggleIcon,
	className,
	buttonClassName,
	headingClassName,
	buttonRef,
}: AccordionHeaderProps<T>) => {
	const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			onToggle();
		}
	};

	return (
		<h2 id={`${id}-heading`} className={cn(className)}>
			<button
				ref={buttonRef}
				type="button"
				aria-controls={`${id}-content`}
				aria-expanded={isOpen}
				onClick={onToggle}
				onKeyDown={handleKeyDown}
				className={cn(
					"p-4 w-full flex cursor-pointer h-full items-center text-ui-gray justify-between bg-ui-white gap-2.5",
					buttonClassName,
				)}
			>
				<span
					className={cn(
						"text-left leading-[150%] font-semibold text-[1rem]",
						headingClassName,
					)}
				>
					{renderHeading(item, isOpen)}
				</span>
				{renderToggleIcon ? (
					renderToggleIcon(isOpen)
				) : (
					<span
						className={cn(
							"min-w-8 min-h-8 text-ui-gray/45 transition duration-300 ease-in-out rounded-full bg-ui-white shadow-[0_2px_6px_rgba(8,15,52,0.06)] flex items-center justify-center",
							isOpen && "rotate-90 bg-ui-primary text-ui-white",
						)}
					>
						<ArrowIcon direction="right" aria-hidden="true" />
					</span>
				)}
			</button>
		</h2>
	);
};
