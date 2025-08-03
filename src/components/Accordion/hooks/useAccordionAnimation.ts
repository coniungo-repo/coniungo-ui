import { useEffect, useRef, useState, type CSSProperties } from "react";

export function useAccordionAnimation(isOpen: boolean) {
	const contentRef = useRef<HTMLDivElement>(null);
	const [maxHeight, setMaxHeight] = useState(0);

	useEffect(() => {
		const el = contentRef.current;
		if (!el) return;

		if (isOpen) {
			const height = el.scrollHeight;
			setMaxHeight(height);
		} else {
			setMaxHeight(0);
		}
	}, [isOpen]);

	return {
		contentRef,
		style: {
			maxHeight: `${maxHeight}px`,
			overflow: "hidden",
			transition: "max-height 0.4s ease, opacity 0.3s ease",
			opacity: isOpen ? 1 : 0,
		} as CSSProperties,
	};
}
