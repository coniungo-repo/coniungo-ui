import { cn } from "@/lib/utils";
import { useAccordionAnimation } from "./hooks/useAccordionAnimation";

type AccordionContentProps<T> = {
	id: string;
	item: T;
	isOpen: boolean;
	renderContent: (item: T, isOpen: boolean) => React.ReactNode;
	className?: string;
};

export const AccordionContent = <T,>({
	id,
	item,
	isOpen,
	renderContent,
	className,
}: AccordionContentProps<T>) => {
	const { contentRef, style } = useAccordionAnimation(isOpen);

	return (
		<section
			id={`${id}-content`}
			aria-labelledby={`${id}-heading`}
			aria-hidden={!isOpen}
			style={style}
			className={cn("transition-all duration-300", className)}
		>
			<div ref={contentRef}>
				<p className="font-normal text-ui-gray pb-4 px-4">
					{renderContent(item, isOpen)}
				</p>
			</div>
		</section>
	);
};
