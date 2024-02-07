import { cn } from "@/functions/cn"
import { ButtonHTMLAttributes, PropsWithChildren } from "react"

type Size = "default" | "sm"
type ColorScheme = "default" | "danger" | "warning" | "primary"

/* keys based on union type of Size-props (expand these keys by adding union values on Size type)  */
type SizeTypes = {
	[key in Size]: string
}
const REMAP_SIZE_STYLE: SizeTypes = {
	default: "h-9 px-4 py-2",
	sm: "h-8 px-3 text-xs",
}

/* keys based on union type of ColorScheme-props (expand these keys by adding union values on ColorScheme type) */
type ColorSchemeTypes = {
	[key in ColorScheme]: string
}
const REMAP_COLORSCHEME_STYLE: ColorSchemeTypes = {
	default: "bg-stroke text-gray",
	danger: "bg-danger text-white",
	primary: "bg-primary text-white",
	warning: "bg-warning text-white",
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	size?: Size
	colorScheme?: ColorScheme
	isIconButton?: boolean
}

export default function Button({
	children,
	className,
	size = "default",
	colorScheme = "default",
	isIconButton = false,
	...restProps
}: PropsWithChildren<Props>) {
	return (
		<button
			type="button"
			className={cn(
				"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-opacity-90 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
				REMAP_SIZE_STYLE[size],
				REMAP_COLORSCHEME_STYLE[colorScheme],
				isIconButton ? "aspect-square px-[unset]" : "", // make it exact square on icon-button, without x axis padding
				className,
			)}
			{...restProps}
		>
			{children}
		</button>
	)
}
