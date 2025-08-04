import type { FC } from "react";
import { cn } from "@/lib/utils";

type CancelProps = {
	className?: string;
	title?: string;
};

export const Cancel: FC<CancelProps> = ({
	className,
	title = "Cancel icon",
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className={cn("size-4", className)}
			role="img"
			aria-label={title}
		>
			<title>{title}</title>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M6 18 18 6M6 6l12 12"
			/>
		</svg>
	);
};
