import { cn } from "@/functions/cn"
import { InputHTMLAttributes, forwardRef } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	isError?: boolean
}

const Input = forwardRef<HTMLInputElement, Props>(
	({ className, isError = false, ...restProps }, ref) => {
		return (
			<input
				className={cn(
					"flex h-9 w-full rounded-md border border-stroke bg-white px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-gray/50 focus-visible:border-gray focus-visible:outline-none disabled:cursor-not-allowed",
					isError ? "border-danger text-danger" : "",
					className,
				)}
				{...restProps}
				ref={ref}
			/>
		)
	},
)

Input.displayName = "input-with-ref"
export default Input
