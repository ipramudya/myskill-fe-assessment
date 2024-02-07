import { cn } from "@/functions/cn"
import { PropsWithChildren } from "react"

interface Props {
	className?: string
}

export default function Container({
	children,
	className,
}: PropsWithChildren<Props>) {
	return (
		<main
			className={cn(
				"mx-auto min-h-dvh w-full max-w-xl md:max-w-3xl",
				className,
			)}
		>
			{children}
		</main>
	)
}
