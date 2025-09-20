"use client";

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
	open: () => void;
	close: () => void;
};

export type ModalProps = {
	children: ReactNode;
	className?: string;
	showCloseIcon?: boolean;
	closeIcon?: ReactNode;
	modalRef: RefObject<ModalHandle | null>;
	onBackdropClick?: () => void;
};

export const Modal = ({
	children,
	className,
	showCloseIcon = true,
	closeIcon,
	modalRef,
	onBackdropClick,
}: ModalProps) => {
	const dialogRef = useRef<HTMLDialogElement | null>(null);
	const { toggle, close, open } = useDialog({ dialogRef });

	useImperativeHandle(modalRef, () => ({ toggle, open, close }), [
		toggle,
		open,
		close,
	]);

	const handleCloseModal = () => {
		close();
		if (onBackdropClick) onBackdropClick();
	};

	const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
		if (event.currentTarget === event.target) {
			handleCloseModal();
		}
	};

	const handleEscapeKey = (event: KeyboardEvent<HTMLDialogElement>) => {
		if (event.key === "Escape") {
			handleCloseModal();
		}
	};

	return (
		<dialog
			ref={dialogRef}
			onClick={handleBackdropClick}
			onKeyDown={handleEscapeKey}
			className="rounded-md p-0 bg-transparent"
		>
			<div
				className={cn(
					"relative rounded-md bg-white p-6 shadow-lg w-full max-w-md",
					className,
				)}
			>
				{showCloseIcon && (
					<div className="flex justify-end pb-4">
						<button
							type="button"
							onClick={handleCloseModal}
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
