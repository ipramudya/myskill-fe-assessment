import { cn } from "@/functions/cn"
import { PropsWithChildren } from "react"

interface Props {
	name: string
	position?: string
	company: string
	date: string
	description: string
	className?: string
}

export default function PortfolioItem({
	children,
	className,
	name,
	position,
	company,
	date,
	description,
}: PropsWithChildren<Props>) {
	return (
		<article
			className={cn(
				"rounded-md border border-stroke bg-white px-4 pb-4 pt-2 shadow-sm transition-colors hover:border-gray hover:shadow",
				className,
			)}
		>
			<div className="flex flex-col space-y-3">
				<div className="flex items-center justify-between">
					<div className="flex flex-col">
						<h3 className="text-black-low">{name}</h3>
						<p className="text-sm">
							{company}{" "}
							{position && (
								<span className="text-xs text-gray">
									({position})
								</span>
							)}
						</p>
					</div>

					{children}
				</div>

				<p className="text-sm text-gray">{date}</p>

				<p className="text-sm md:max-w-[70%]">{description}</p>
			</div>
		</article>
	)
}
