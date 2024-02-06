import { Hero, Profile } from "@/assets/images"
import Button from "@/components/Button"
import Container from "@/components/Container"
import Icon from "@/components/Icon"
import PortfolioItem from "@/components/PortfolioItem"
import Section from "@/components/Section"
import Image from "next/image"

export default function PortfolioPage() {
	return (
		<Container>
			<div className="flex flex-col p-3">
				{/* hero section */}
				<Section className="relative my-0 mb-[2rem] md:mb-[3rem]">
					{/* hero image */}
					<Image
						src={Hero}
						alt="dummy hero"
						placeholder="blur"
						className="aspect-[3/1] rounded-md object-cover object-center md:aspect-[5/1]"
					/>

					{/* profile picture */}
					<div className="absolute bottom-0 left-4 z-10 w-fit translate-y-1/2">
						<div className="aspect-square w-[82px] overflow-hidden rounded-full bg-white p-1 md:w-[96px]">
							<Image
								src={Profile}
								alt="profile"
								placeholder="blur"
								className="rounded-full object-cover"
							/>
						</div>
					</div>
				</Section>

				<Section>
					<div className="flex justify-between">
						{/* main description */}
						<div className="flex flex-col space-y-3">
							<div className="flex flex-col">
								<h1 className="text-lg">Nama Pengguna</h1>
								<h3 className="text-base font-normal text-black-low">
									Jabatan
								</h3>
							</div>
							<p className="text-sm md:max-w-[60%]">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Ea laborum non, accusantium
								repellat porro vitae aspernatur necessitatibus
								quidem sint voluptate!
							</p>
						</div>

						{/* edit portfolio action */}
						<Button size="sm" colorScheme="warning">
							<Icon.Edit className="mr-2 hidden text-white md:block" />
							Perbarui
						</Button>
					</div>
				</Section>

				<Section>
					<div className="flex flex-col space-y-3">
						<h2 className="text-lg">
							Portofolio{" "}
							<span className="text-sm font-normal text-gray">
								(2 item)
							</span>
						</h2>

						{/* list of portfolio */}
						<PortfolioItem
							name="Frontend Developer"
							company="PT Aksamedia"
							date="Februari 2022 - Desember 2023"
							position="Staff"
							description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt eius voluptatum blanditiis nesciunt ipsum facilis labore assumenda temporibus eos rerum."
						/>
					</div>
				</Section>
			</div>
		</Container>
	)
}
