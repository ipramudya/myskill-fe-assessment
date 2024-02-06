interface Props {
	name: string
	position?: string
	company: string
	date: string
	description: string
}

export default function PortfolioItem({ name, position, company, date, description }: Props) {
	return (
		<article className="rounded-md border border-stroke bg-white px-4 pb-4 pt-2 shadow-sm transition-colors hover:border-gray hover:shadow">
			<div className="flex flex-col space-y-3">
				<div className="flex flex-col">
					<h3 className="text-black-low">{name}</h3>
					<p className="text-sm">
						{company}{" "}
						{position && <span className="text-xs text-gray">({position})</span>}
					</p>
				</div>

				<p className="text-sm text-gray">{date}</p>

				<p className="text-sm md:max-w-[70%]">{description}</p>
			</div>
		</article>
	)
}
