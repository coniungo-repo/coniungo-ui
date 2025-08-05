import type { ReactNode } from "react";
import { AccordionPanel } from "./AccordionPanel";
import { useAccordion } from "./hooks/useAccordion";

export type AccordionItem<T> = T & {
	id?: string;
};

export type AccordionProps<T> = {
	items: AccordionItem<T>[];
	renderHeading: (item: AccordionItem<T>, isOpen: boolean) => ReactNode;
	renderContent: (item: AccordionItem<T>, isOpen: boolean) => ReactNode;
	renderToggleIcon?: (isOpen: boolean) => ReactNode;
	panelClassName?: string;
	panelHeadingClassName?: string;
	panelContentClassName?: string;
	panelButtonClassName?: string;
	idKey?: keyof T | string;
};

export const Accordion = <T,>({
	items,
	renderHeading,
	renderContent,
	renderToggleIcon,
	panelClassName,
	panelHeadingClassName,
	panelContentClassName,
	panelButtonClassName,
	idKey = "id",
}: AccordionProps<T>) => {
	const { openItem, toggle, getResolvedId, getButtonRef, handleKeyDown } =
		useAccordion<T>({ items, idKey: idKey as keyof T });

	return (
		<div className="space-y-6">
			{items.map((item, index) => {
				const resolvedId = getResolvedId(item, index);

				return (
					<AccordionPanel
						key={resolvedId}
						id={resolvedId}
						item={item}
						isOpen={openItem === resolvedId}
						onToggle={() => toggle(resolvedId)}
						renderHeading={renderHeading}
						renderContent={renderContent}
						renderToggleIcon={renderToggleIcon}
						className={panelClassName}
						headingClassName={panelHeadingClassName}
						contentClassName={panelContentClassName}
						buttonClassName={panelButtonClassName}
						buttonRef={getButtonRef(index)}
						onButtonKeyDown={(e) => handleKeyDown(e, index)}
					/>
				);
			})}
		</div>
	);
};
