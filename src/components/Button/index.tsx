import { Loader } from "@/svg/Loader";
import type { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { buttonVariant } from "./variant";
import type { VariantProps } from "class-variance-authority";

export type ButtonProps = Omit<
	ButtonHTMLAttributes<HTMLButtonElement>,
	"disabled"
> &
	VariantProps<typeof buttonVariant> & {
		loading?: boolean;
		loader?: ReactNode;
		iconStart?: ReactNode;
		iconEnd?: ReactNode;
	};

export const Button: FC<ButtonProps> = ({
	className,
	intent,
	size,
	radius,
	disabled,
	fullWidth,
	loading,
	loader,
	iconStart,
	iconEnd,
	children,
	...props
}) => {
	return (
		<button
			className={buttonVariant({
				intent,
				size,
				radius,
				disabled,
				fullWidth,
				loading,
				className,
			})}
			disabled={disabled || loading}
			aria-busy={loading}
			{...props}
		>
			{loading && (
				<span
					className="absolute inset-0 flex items-center justify-center"
					aria-hidden="true"
				>
					{loader || <Loader />}
				</span>
			)}

			{/* Hide content visually when loading, but keep in DOM */}
			<span className={loading ? "opacity-0" : "flex items-center gap-2"}>
				{iconStart && <span className="flex-shrink-0">{iconStart}</span>}
				{children}
				{iconEnd && <span className="flex-shrink-0">{iconEnd}</span>}
			</span>
		</button>
	);
};
