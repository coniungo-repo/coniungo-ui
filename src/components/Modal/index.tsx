import {
	forwardRef,
	useImperativeHandle,
	useRef,
	type ReactNode,
	type ForwardedRef,
	type MouseEvent,
	type KeyboardEvent,
} from "react";
import { useDialog } from "./hooks/useDialog";
import { cn } from "@/lib/utils";
import { Cancel } from "@/svg/Cancel";

export type ModalProps = {
	children: ReactNode;
	className?: string;
	showCloseIcon?: boolean;
	closeIcon?: ReactNode;
};

export type ModalHandle = {
	toggle: () => void;
};

const Modal = forwardRef(function Modal(
	{ children, className, showCloseIcon = true, closeIcon }: ModalProps,
	ref: ForwardedRef<ModalHandle>,
) {
	const dialogRef = useRef<HTMLDialogElement | null>(null);
	const { toggle } = useDialog({ dialogRef });

	useImperativeHandle(ref, () => ({ toggle }), [toggle]);

	const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
		if (event.currentTarget === event.target) toggle();
	};

	const handleEscapeKey = (event: KeyboardEvent<HTMLDialogElement>) => {
		if (event.key === "Escape") toggle();
	};

	return (
		<dialog
			ref={dialogRef}
			onClick={handleBackdropClick}
			onKeyDown={handleEscapeKey}
			className=""
		>
			<div
				className={cn(
					"relative max-w-[90vw] max-h-[90vh] p-4 rounded-[2.5rem] bg-white transition-all",
					className,
				)}
			>
				{children}

				{showCloseIcon && (
					<button
						type="button"
						onClick={toggle}
						className={cn(
							"cursor-pointer absolute top-2 right-2 p-1 rounded-full bg-white shadow-md hover:bg-ui-primary hover:text-white transition ease-in-out duration-300 flex items-center justify-center",
						)}
						aria-label="Close Modal"
					>
						{closeIcon ?? <Cancel />}
					</button>
				)}
			</div>
		</dialog>
	);
});

export { Modal };
