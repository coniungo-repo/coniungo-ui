import type { FC, SVGProps } from "react";
import { cn } from "@/lib/utils";

type ArrowIconProps = SVGProps<SVGSVGElement> & {
	title?: string;
	className?: string;
	direction?: "top" | "right" | "bottom" | "left";
};

const rotationClasses: Record<string, string> = {
	right: "rotate-0",
	bottom: "rotate-90",
	left: "rotate-180",
	top: "rotate-270",
};

export const ArrowIcon: FC<ArrowIconProps> = ({
	title = "Arrow icon",
	className,
	direction = "right",
	...props
}) => {
	return (
		<svg
			width="9"
			height="15"
			viewBox="0 0 9 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			role="img"
			aria-labelledby="arrowTitle"
			className={cn(rotationClasses[direction], className)}
			{...props}
		>
			<title id="arrowTitle">{title}</title>
			<path
				d="M1.33789 13.4932L7.31077 7.49316L1.33789 1.49316"
				stroke="currentColor"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
