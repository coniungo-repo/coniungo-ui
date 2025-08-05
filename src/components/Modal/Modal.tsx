import {
	useRef,
	useImperativeHandle,
	type ReactNode,
	type MouseEvent,
	type KeyboardEvent,
	type RefObject,
} from "react";
import { useDialog } from "./hooks/useDialog";
import { cn } from "@/lib/utils";
import { Cancel } from "@/svg/Cancel";

export type ModalHandle = {
	toggle: () => void;
};

export type ModalProps = {
	children: ReactNode;
	className?: string;
	showCloseIcon?: boolean;
	closeIcon?: ReactNode;
	modalRef: RefObject<ModalHandle | null>;
};

export const Modal = ({
	children,
	className,
	showCloseIcon = true,
	closeIcon,
	modalRef,
}: ModalProps) => {
	const dialogRef = useRef<HTMLDialogElement | null>(null);
	const { toggle } = useDialog({ dialogRef });

	useImperativeHandle(modalRef, () => ({ toggle }), [toggle]);

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
			className={cn("")}
		>
			<div
				className={cn(
					"relative max-w-[90vw] max-h-[90vh] p-4 rounded-[2.5rem] bg-white transition-all",
					className,
				)}
			>
				{showCloseIcon && (
					<div className="flex justify-end pb-4">
						<button
							type="button"
							onClick={toggle}
							className="cursor-pointer p-1 rounded-full bg-white shadow-md hover:bg-ui-primary hover:text-white transition ease-in-out duration-300 flex items-center justify-center"
							aria-label="Close Modal"
						>
							{closeIcon ?? <Cancel />}
							<span className="sr-only">Close Icon</span>
						</button>
					</div>
				)}
				{children}
			</div>
		</dialog>
	);
};
