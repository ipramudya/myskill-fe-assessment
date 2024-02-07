import Container from "../Container"
import Section from "../Section"

export default function PortfolioDetailSkeleton() {
	return (
		<Container>
			<div className="flex flex-col p-3">
				<Section className="relative my-0 mb-[2rem] md:mb-[3rem]">
					<div className="flex aspect-[3/1] animate-pulse items-center justify-center rounded-md bg-stroke md:aspect-[5/1]" />

					<div className="absolute bottom-0 left-4 z-10 w-fit translate-y-1/2">
						<div className="aspect-square w-[82px] overflow-hidden rounded-full bg-white p-1">
							<div className="flex aspect-square w-full animate-pulse items-center justify-center rounded-full bg-stroke" />
						</div>
					</div>
				</Section>

				<Section>
					<div className="flex flex-col space-y-3">
						<div className="flex flex-col">
							<div className="mb-1 h-[28px] w-[160px] animate-pulse rounded-md bg-stroke" />
							<div className="h-[24px] w-[120px] animate-pulse rounded-md bg-stroke" />
						</div>

						<div className="flex flex-col space-y-1">
							<div className="h-5 w-full animate-pulse rounded-md bg-stroke" />
							<div className="h-5 w-full animate-pulse rounded-md bg-stroke" />
							<div className="h-5 w-full animate-pulse rounded-md bg-stroke" />
						</div>
					</div>
				</Section>

				<Section>
					<div className="flex flex-col space-y-3">
						<div className="h-[28px] w-[160px] animate-pulse rounded-md bg-stroke" />

						{Array.from({ length: 3 }).map((_, idx) => (
							<div
								key={`portfolio-skeleton-${idx}`}
								className="rounded-md border border-stroke bg-white px-4 pb-4 pt-2 shadow-sm"
							>
								<div className="flex flex-col space-y-3">
									<div className="flex flex-col">
										<div className="mb-1 h-[24px] w-[120px] animate-pulse rounded-md bg-stroke" />
										<div className="h-5 w-[160px] animate-pulse rounded-md bg-stroke" />
									</div>
									<div className="h-5 w-[160px] animate-pulse rounded-md bg-stroke" />
									<div className="flex flex-col space-y-1">
										<div className="h-5 w-full animate-pulse rounded-md bg-stroke" />
										<div className="h-5 w-full animate-pulse rounded-md bg-stroke" />
										<div className="h-5 w-full animate-pulse rounded-md bg-stroke" />
									</div>
								</div>
							</div>
						))}
					</div>
				</Section>
			</div>
		</Container>
	)
}
