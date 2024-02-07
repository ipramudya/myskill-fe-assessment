import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/* merge and remove className duplication */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}
