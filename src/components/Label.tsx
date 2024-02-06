import { cn } from "@/functions/cn"
import { LabelHTMLAttributes, forwardRef } from "react"

type Props = LabelHTMLAttributes<HTMLLabelElement>

const Label = forwardRef<HTMLLabelElement, Props>(
	({ className, children, ...restProps }, ref) => {
		return (
			<label
				className={cn(
					"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
					className,
				)}
				ref={ref}
				{...restProps}
			>
				{children}
			</label>
		)
	},
)

Label.displayName = "label-with-ref"
export default Label
