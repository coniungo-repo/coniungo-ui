import {
	forwardRef,
	useImperativeHandle,
	useRef,
	type ReactNode,
	type ForwardedRef,
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
	// internal ref for the dialog
	const dialogRef = useRef<HTMLDialogElement | null>(null);

	const { toggle } = useDialog({ dialogRef });

	// expose toggle method via ref
	useImperativeHandle(ref, () => ({
		toggle,
	}));

	return (
		<dialog
			ref={dialogRef}
			onClick={(event) => {
				if (event.currentTarget === event.target) {
					toggle();
				}
			}}
			onKeyDown={(event) => {
				if (event.key === "Escape") {
					toggle();
				}
			}}
			className={cn("")}
		>
			<div
				className={cn(
					"relative transition-all bg-white max-w-[90vw] max-h-[90vh] rounded-[2.5rem] p-4",
					className,
				)}
			>
				{children}
			</div>

			{showCloseIcon && (
				<button
					type="button"
					className={cn(
						"absolute top-2 right-2 bg-ui-white rounded-full p-1 flex justify-center items-center hover:bg-ui-primary hover:text-ui-white transition-all shadow-md ease-in-out duration-300 cursor-pointer",
					)}
					onClick={toggle}
				>
					{closeIcon ?? <Cancel />}
					<span className="sr-only">Close Modal</span>
				</button>
			)}
		</dialog>
	);
});

export { Modal };
