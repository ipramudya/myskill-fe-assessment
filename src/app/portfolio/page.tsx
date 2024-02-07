"use client"

import Container from "@/components/Container"
import Icon from "@/components/Icon"
import EditPortfolioButton from "@/components/Portfolio/EditPortfolioButton"
import PortfolioDetailSkeleton from "@/components/Portfolio/PortfolioDetailSkeleton"
import PortfolioItem from "@/components/Portfolio/PortfolioItem"
import Section from "@/components/Section"
import useIsMounted from "@/hooks/use-is-mounted"
import useStorePortfolio from "@/hooks/use-store-portfolio"
import Image from "next/image"

export default function PortfolioPage() {
	const { portfolio } = useStorePortfolio()
	const { isMounted } = useIsMounted()

	const getImageURL = (key: "profile" | "background") => {
		if (!portfolio) return null

		const url = URL.createObjectURL(portfolio[key])
		return url
	}

	return !isMounted ? (
		<PortfolioDetailSkeleton />
	) : (
		<Container>
			<div className="flex flex-col p-3">
				{/* hero section */}
				<Section className="relative my-0 mb-[2rem] md:mb-[3rem]">
					{/* hero image */}
					{!portfolio ? (
						<div className="flex aspect-[3/1] items-center justify-center rounded-md bg-stroke md:aspect-[5/1]">
							<Icon.Picture className="h-6 w-6 text-gray" />
						</div>
					) : (
						<Image
							src={getImageURL("background")!}
							alt="dummy hero"
							width={768}
							height={400}
							className="aspect-[3/1] rounded-md object-cover object-center md:aspect-[5/1]"
						/>
					)}

					{/* profile picture */}
					<div className="absolute bottom-0 left-4 z-10 w-fit translate-y-1/2">
						<div className="aspect-square w-[82px] overflow-hidden rounded-full bg-white p-1">
							{!getImageURL("profile") ? (
								<div className="flex aspect-square w-full items-center justify-center rounded-full bg-stroke">
									<Icon.Picture className="h-5 w-5 text-gray" />
								</div>
							) : (
								<Image
									src={getImageURL("profile")!}
									alt="profile"
									width={100}
									height={100}
									className="rounded-full object-cover"
								/>
							)}
						</div>
					</div>
				</Section>

				<Section>
					<div className="flex justify-between">
						{/* main description */}
						<div className="flex flex-col space-y-3">
							<div className="flex flex-col">
								<h1 className="text-lg">
									{portfolio?.name ||
										"Nama anda belum diatur"}
								</h1>
								<h3 className="text-base font-normal text-black-low">
									{portfolio?.possition ||
										"Jabatan belum diatur"}
								</h3>
							</div>
							<p className="text-sm md:max-w-[60%]">
								{portfolio?.description ||
									"Deskripsi belum diatur"}
							</p>
						</div>

						{/* edit portfolio action */}
						<EditPortfolioButton />
					</div>
				</Section>

				<Section>
					<div className="flex flex-col space-y-3">
						<h2 className="text-lg">
							Portofolio{" "}
							<span className="text-sm font-normal text-gray">
								({portfolio?.portfolio.length || 0} item)
							</span>
						</h2>

						{/* list of portfolio */}
						{portfolio?.portfolio ? (
							portfolio.portfolio.map((p, idx) => (
								<PortfolioItem
									key={`portfolio-${idx}`}
									name={p.name}
									company={p.company}
									date="Februari 2022 - Desember 2023"
									position={p.possition}
									description={p.description}
								/>
							))
						) : (
							<div className="min-h-[148px] rounded-md border border-dashed border-stroke px-4 pb-4 pt-2">
								<p className="text-sm text-gray">
									Portofolio anda masih kosong
								</p>
							</div>
						)}
					</div>
				</Section>
			</div>
		</Container>
	)
}
