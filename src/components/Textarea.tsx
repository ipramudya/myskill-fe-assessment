import { cn } from "@/functions/cn"
import { TextareaHTMLAttributes, forwardRef } from "react"

type Props = TextareaHTMLAttributes<HTMLTextAreaElement>

const Textarea = forwardRef<HTMLTextAreaElement, Props>(
	({ className, ...restProps }, ref) => {
		return (
			<textarea
				className={cn(
					"flex min-h-[100px] w-full rounded-md border border-stroke bg-white px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-gray/50 focus-visible:border-gray focus-visible:outline-none disabled:cursor-not-allowed",
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
