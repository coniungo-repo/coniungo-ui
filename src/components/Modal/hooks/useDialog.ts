import { type RefObject, useCallback } from "react";

type UseDialogProps = {
	dialogRef: RefObject<HTMLDialogElement | null>;
};

export function useDialog({ dialogRef }: UseDialogProps) {
	const toggle = useCallback(() => {
		const dialog = dialogRef.current;

		if (!dialog) return;

		if (dialog.hasAttribute("open")) {
			dialog.close();
		} else {
			dialog.showModal();
		}
	}, [dialogRef]);

	const open = useCallback(() => {
		const dialog = dialogRef.current;
		if (!dialog) return;
		if (!dialog.hasAttribute("open")) {
			dialog.showModal();
		}
	}, [dialogRef]);

	const close = useCallback(() => {
		const dialog = dialogRef.current;
		if (!dialog) return;
		if (dialog.hasAttribute("open")) {
			dialog.close();
		}
	}, [dialogRef]);

	return { toggle, open, close };
}
