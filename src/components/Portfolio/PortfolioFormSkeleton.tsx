import Container from "../Container"
import Section from "../Section"

export default function PortfolioFormSkeleton() {
	return (
		<Container>
			<div className="flex flex-col p-3">
				<div className="my-4 md:my-6">
					<div className="h-[28px] max-w-[30%] animate-pulse rounded-md bg-stroke" />
					<div className="mt-2 h-5 w-[200px] animate-pulse rounded-md bg-stroke" />
				</div>

				<Section className="my-2 min-h-[169px] p-3" isForeground>
					<div className="mb-4 min-h-[24px] max-w-[30%] animate-pulse rounded-md bg-stroke" />
					<div className="flex min-h-[100px] items-center justify-center rounded-md border border-dashed border-stroke bg-white p-4">
						<div className="flex flex-col items-center space-y-3">
							<div className="aspect-square w-8 animate-pulse rounded-md bg-stroke" />
							<div className="h-5 w-[200px] animate-pulse rounded-md bg-stroke" />
							<div className="flex flex-col items-center space-y-1">
								<div className="h-4 w-[160px] animate-pulse rounded-md bg-stroke" />
								<div className="h-4 w-[120px] animate-pulse rounded-md bg-stroke" />
							</div>
						</div>
					</div>
				</Section>

				<Section className="my-2 min-h-[169px] p-3" isForeground>
					<div className="mb-4 min-h-[24px] max-w-[30%] animate-pulse rounded-md bg-stroke" />
					<div className="flex min-h-[100px] items-center justify-center rounded-md border border-dashed border-stroke bg-white p-4">
						<div className="flex flex-col items-center space-y-3">
							<div className="aspect-square w-8 animate-pulse rounded-md bg-stroke" />
							<div className="h-5 w-[200px] animate-pulse rounded-md bg-stroke" />
							<div className="flex flex-col items-center space-y-1">
								<div className="h-4 w-[160px] animate-pulse rounded-md bg-stroke" />
								<div className="h-4 w-[120px] animate-pulse rounded-md bg-stroke" />
							</div>
						</div>
					</div>
				</Section>

				<Section className="my-2 px-3 pb-4 pt-3" isForeground>
					<div className="mb-4 min-h-[24px] max-w-[30%] animate-pulse rounded-md bg-stroke" />
					<div className="flex flex-col space-y-4">
						<div className="flex flex-col space-y-2">
							<div className="h-4 w-[160px] animate-pulse rounded-md bg-stroke" />
							<div className="h-9 animate-pulse rounded-md bg-stroke" />
						</div>
						<div className="flex flex-col space-y-2">
							<div className="h-4 w-[160px] animate-pulse rounded-md bg-stroke" />
							<div className="h-9 animate-pulse rounded-md bg-stroke" />
						</div>
						<div className="flex flex-col space-y-2">
							<div className="h-4 w-[160px] animate-pulse rounded-md bg-stroke" />
							<div className="h-9 animate-pulse rounded-md bg-stroke" />
						</div>
					</div>
				</Section>

				<Section className="mb-4 mt-2 p-3" isForeground>
					<div className="mb-4 min-h-[24px] max-w-[30%] animate-pulse rounded-md bg-stroke" />

					<div className="flex flex-col space-y-2">
						<div className="h-4 w-[160px] animate-pulse rounded-md bg-stroke" />
						<div className="h-9 animate-pulse rounded-md bg-stroke" />
					</div>
				</Section>
			</div>
		</Container>
	)
}
