import {
	useId,
	useRef,
	useState,
	type KeyboardEvent,
	type RefCallback,
} from "react";

type UseAccordionParams<T, K extends keyof T = keyof T> = {
	items: T[];
	idKey?: K;
};

export function useAccordion<T, K extends keyof T = keyof T>({
	items,
	idKey,
}: UseAccordionParams<T, K>) {
	const fallbackId = useId();
	const [openItem, setOpenItem] = useState<string | null>(null);
	const headerRefs = useRef<Array<HTMLButtonElement | null>>([]);

	const toggle = (id: string) => {
		setOpenItem((prev) => (prev === id ? null : id));
	};

	const getResolvedId = (item: T, index: number) => {
		const key = idKey ?? ("id" as K);
		const rawId = item[key];

		return typeof rawId === "string" && rawId
			? rawId
			: `${fallbackId}-${index}`;
	};

	const getButtonRef = (index: number): RefCallback<HTMLButtonElement> => {
		return (el) => {
			headerRefs.current[index] = el;
		};
	};

	const handleKeyDown = (
		e: KeyboardEvent<HTMLButtonElement>,
		index: number,
	) => {
		const total = items.length;
		if (e.key === "ArrowDown") {
			e.preventDefault();
			headerRefs.current[(index + 1) % total]?.focus();
		}
		if (e.key === "ArrowUp") {
			e.preventDefault();
			headerRefs.current[(index - 1 + total) % total]?.focus();
		}
		if (e.key === "Home") {
			e.preventDefault();
			headerRefs.current[0]?.focus();
		}
		if (e.key === "End") {
			e.preventDefault();
			headerRefs.current[total - 1]?.focus();
		}
	};

	return {
		openItem,
		toggle,
		getResolvedId,
		getButtonRef,
		handleKeyDown,
	};
}
