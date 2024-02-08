import { cn } from "@/functions/cn"
import { LabelHTMLAttributes, forwardRef } from "react"

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
	isRequired?: boolean
	isError?: boolean
}

const Label = forwardRef<HTMLLabelElement, Props>(
	({ className, children, isRequired = true, isError = false, ...restProps }, ref) => {
		return (
			<label
				className={cn(
					"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
					isError ? "text-danger" : "",
					className,
				)}
				ref={ref}
				{...restProps}
			>
				{children} {isRequired && <span className="text-danger">*</span>}
			</label>
		)
	},
)

Label.displayName = "label-with-ref"
export default Label
