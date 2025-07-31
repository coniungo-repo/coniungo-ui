import { cn } from "@/lib/utils";
import { useRef, type ButtonHTMLAttributes } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ ...props }) => {
	const buttonRef = useRef<HTMLButtonElement>(null);

	return <button ref={buttonRef} className={cn("")} {...props} />;
};
