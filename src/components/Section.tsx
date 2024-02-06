import { cn } from "@/functions/cn"
import { PropsWithChildren } from "react"

interface Props {
	className?: string
}

export default function Section({ children, className }: PropsWithChildren<Props>) {
	return <section className={cn("my-4", className)}>{children}</section>
}
