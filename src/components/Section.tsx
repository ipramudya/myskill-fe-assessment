import { cn } from "@/functions/cn"
import { PropsWithChildren } from "react"

interface Props {
	className?: string
	isForeground?: boolean
}

export default function Section({
	children,
	className,
	isForeground = false,
}: PropsWithChildren<Props>) {
	return (
		<section
			className={cn(
				"my-4",
				isForeground ? "rounded-md bg-foreground shadow-sm" : "",
				className,
			)}
		>
			{children}
		</section>
	)
}
