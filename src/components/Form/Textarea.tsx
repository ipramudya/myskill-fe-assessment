import { cn } from "@/functions/cn"
import { TextareaHTMLAttributes, forwardRef } from "react"

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	isError?: boolean
}

const Textarea = forwardRef<HTMLTextAreaElement, Props>(
	({ className, isError = false, ...restProps }, ref) => {
		return (
			<textarea
				className={cn(
					"flex min-h-[100px] w-full rounded-md border border-stroke bg-white px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-gray/50 focus-visible:border-gray focus-visible:outline-none disabled:cursor-not-allowed",
					isError ? "border-danger text-danger" : "",
					className,
				)}
				ref={ref}
				{...restProps}
			/>
		)
	},
)

Textarea.displayName = "textarea-with-ref"
export default Textarea
