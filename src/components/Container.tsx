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
			className={cn("mx-auto min-h-dvh w-full md:max-w-5xl", className)}
		>
			{children}
		</main>
	)
}
