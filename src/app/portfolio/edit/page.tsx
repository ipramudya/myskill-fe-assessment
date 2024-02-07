"use client"

import Button from "@/components/Button"
import Container from "@/components/Container"
import { Input, Label, Textarea } from "@/components/Form"
import Icon from "@/components/Icon"
import { AddPortfolioForm } from "@/components/Portfolio"
import Section from "@/components/Section"
import usePortfolioCount from "@/hooks/use-portfolio-count"
import Link from "next/link"
import { Fragment } from "react"

export default function EditPortfolioPage() {
	const { portfolioCount, incPortfolioCount } = usePortfolioCount()

	console.log(portfolioCount)

	return (
		<Container>
			<div className="flex flex-col p-3">
				<div className="my-4 md:my-6">
					<h1 className="text-xl">Pembaruan Portfolio</h1>

					<Link href="/portfolio">
						<span className="text-sm text-primary no-underline">
							View portofolio
						</span>
					</Link>
				</div>

				<Section className="my-2 min-h-[169px] p-3" isForeground>
					<h3>Background Image</h3>
				</Section>

				<Section className="my-2 min-h-[169px] p-3" isForeground>
					<h3>Profile Image</h3>
				</Section>

				<Section className="my-2 px-3 pb-4 pt-3" isForeground>
					<h3>Profile</h3>

					<div className="mt-4 flex flex-col space-y-4">
						<div className="flex flex-col space-y-2">
							<Label htmlFor="name">Nama</Label>
							<Input
								id="name"
								placeholder="masukan nama profil..."
							/>
						</div>

						<div className="flex flex-col space-y-2">
							<Label htmlFor="possition">Title</Label>
							<Input
								id="possition"
								placeholder="masukan title/posisi/jabatan saat ini..."
							/>
						</div>

						<div className="flex flex-col space-y-2">
							<Label htmlFor="description">Deskripsi</Label>
							<Textarea
								id="description"
								placeholder="masukan deskripsi diri..."
							/>
						</div>
					</div>
				</Section>

				{portfolioCount !== null ? (
					<Fragment>
						<AddPortfolioForm />
						<Button
							className="mt-2 border border-primary bg-white text-primary hover:bg-primary/10"
							onClick={incPortfolioCount}
						>
							<Icon.Portfolio className="mr-3 h-5 w-5" />
							Tambah portofolio
						</Button>
						<hr className="my-4 border-dashed border-stroke" />
					</Fragment>
				) : (
					<Section className="mb-4 mt-2 p-3" isForeground>
						<h3>Portofolio</h3>

						<div className="mt-4 flex flex-col space-y-2">
							<p className="text-sm text-gray">
								portofolio anda masih kosong, mohon penuhi
								terlebih dahulu.
							</p>
							<Button
								className="w-full border border-dashed border-stroke bg-white text-black-low"
								onClick={incPortfolioCount}
							>
								Tambah Portofolio
							</Button>
						</div>
					</Section>
				)}

				<Button colorScheme="primary">
					<Icon.Complete className="mr-3 h-5 w-5" />
					Simpan Perubahan
				</Button>
			</div>
		</Container>
	)
}
