"use client"

import Button from "@/components/Button"
import Container from "@/components/Container"
import { ErrorMessage, Input, Label, Textarea } from "@/components/Form"
import Airdrop from "@/components/Form/Airdrop"
import Icon from "@/components/Icon"
import AddPortfolioForm from "@/components/Portfolio/AddPortfolioForm"
import PortfolioFormSkeleton from "@/components/Portfolio/PortfolioFormSkeleton"
import PortfolioItem from "@/components/Portfolio/PortfolioItem"
import Section from "@/components/Section"
import useIsMounted from "@/hooks/use-is-mounted"
import useMinimizedPortfolioForm from "@/hooks/use-minimized-portfolio-form"
import useStorePortfolio from "@/hooks/use-store-portfolio"
import { FormPayload, formSchema } from "@/utils/form-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { formatDate } from "date-fns"
import { nanoid } from "nanoid"
import Link from "next/link"
import { useEffect, useState } from "react"
import {
	FormProvider,
	SubmitHandler,
	useFieldArray,
	useForm,
} from "react-hook-form"

/* all field must be provided by given defaultValues, otherwis it's gonna be throw an error */
const DEFAULT_VALUES: FormPayload = {
	name: "",
	possition: "",
	description: "",
	portfolio: [],
}

export default function EditPortfolioPage() {
	const [backgroundImage, setBackgroundImage] = useState<File | null>(null)
	const [profileImage, setProfileImage] = useState<File | null>(null)
	const { minimizedIndex, setMinimizedIndex } = useMinimizedPortfolioForm()

	const { isMounted } = useIsMounted()
	const { portfolio, setPortfolio } = useStorePortfolio()

	const form = useForm<FormPayload>({
		mode: "onBlur",
		resolver: zodResolver(formSchema),
		defaultValues: DEFAULT_VALUES,
		values: portfolio
			? {
					name: portfolio.name,
					possition: portfolio.possition,
					description: portfolio.description,
					portfolio: portfolio.portfolio,
				}
			: undefined,
	})
	const portfolioField = useFieldArray<FormPayload>({
		control: form.control,
		name: "portfolio",
	})

	const handlePortfolioSubmit: SubmitHandler<FormPayload> = (fields) => {
		if (!profileImage || !backgroundImage) return null

		setPortfolio({
			...fields,
			profile: profileImage,
			background: backgroundImage,
		})
	}

	const handleAddPortfolio = () => {
		/* provide initial value once portfolio field appended */
		portfolioField.append({
			id: nanoid(),
			name: "",
			company: "",
			description: "",
			possition: "",
			startDate: "",
			endDate: "",
		})
	}

	const handleMinimizePortfolioItem = (id: string) => {
		setMinimizedIndex(id)
	}

	useEffect(() => {
		if (portfolio !== null) {
			setBackgroundImage(portfolio.background)
			setProfileImage(portfolio.profile)
		}
	}, [portfolio])

	return !isMounted ? (
		<PortfolioFormSkeleton />
	) : (
		/* form provider is used to providing its children to access their 'form' variable context using useFormContext */
		<FormProvider {...form}>
			<Container>
				<form
					className="flex flex-col p-3"
					onSubmit={form.handleSubmit(handlePortfolioSubmit)}
				>
					<div className="my-4 md:my-6">
						<h1 className="text-xl">Pembaruan Portfolio</h1>

						<Link href="/portfolio">
							<span className="text-sm text-primary no-underline">
								View portofolio
							</span>
						</Link>
					</div>

					<Section className="my-2 min-h-[169px] p-3" isForeground>
						<h3 className="mb-4">Background Image</h3>
						<Airdrop
							onUploadChange={setBackgroundImage}
							defaultValue={backgroundImage}
						/>
					</Section>

					<Section className="my-2 min-h-[169px] p-3" isForeground>
						<h3 className="mb-4">Profile Image</h3>
						<Airdrop
							onUploadChange={setProfileImage}
							isProfile
							defaultValue={profileImage}
						/>
					</Section>

					<Section className="my-2 px-3 pb-4 pt-3" isForeground>
						<h3 className="mb-4">Profile</h3>
						<div className="flex flex-col space-y-4">
							<div className="flex flex-col space-y-2">
								<Label
									htmlFor="name"
									isError={Boolean(
										form.formState.errors.name,
									)}
								>
									Nama
								</Label>
								<Input
									id="name"
									placeholder="masukan nama profil..."
									isError={Boolean(
										form.formState.errors.name,
									)}
									{...form.register("name")}
								/>
								{Boolean(form.formState.errors.name) && (
									<ErrorMessage>
										{form.formState.errors.name?.message}
									</ErrorMessage>
								)}
							</div>
							<div className="flex flex-col space-y-2">
								<Label
									htmlFor="possition"
									isError={Boolean(
										form.formState.errors.possition,
									)}
								>
									Title
								</Label>
								<Input
									id="possition"
									placeholder="masukan title/posisi/jabatan saat ini..."
									isError={Boolean(
										form.formState.errors.possition,
									)}
									{...form.register("possition")}
								/>
								{Boolean(form.formState.errors.possition) && (
									<ErrorMessage>
										{
											form.formState.errors.possition
												?.message
										}
									</ErrorMessage>
								)}
							</div>
							<div className="flex flex-col space-y-2">
								<Label
									htmlFor="description"
									isError={Boolean(
										form.formState.errors.description,
									)}
								>
									Deskripsi
								</Label>
								<Textarea
									id="description"
									placeholder="masukan deskripsi diri..."
									isError={Boolean(
										form.formState.errors.description,
									)}
									{...form.register("description")}
								/>
								{Boolean(form.formState.errors.description) && (
									<ErrorMessage>
										{
											form.formState.errors.description
												?.message
										}
									</ErrorMessage>
								)}
							</div>
						</div>
					</Section>

					{form.watch("portfolio").length !== 0 ? (
						/* if portfolio field exist or got appended, render this */
						<>
							{form.watch("portfolio").map((p, idx) =>
								minimizedIndex !== null &&
								minimizedIndex.includes(p.id) ? (
									<PortfolioItem
										key={p.id}
										className="my-2"
										name={p.name}
										company={p.company}
										position={p.possition}
										description={p.description}
										date={formatDate(
											p.startDate,
											p.endDate,
										)}
									>
										<Button
											size="sm"
											isIconButton
											className="bg-white"
											onClick={() =>
												handleMinimizePortfolioItem(
													p.id,
												)
											}
										>
											<Icon.Maximize className="text-black-low md:h-5 md:w-5" />
										</Button>
									</PortfolioItem>
								) : (
									<AddPortfolioForm
										key={p.id}
										id={p.id}
										index={idx}
									/>
								),
							)}
							<Button
								className="mt-2 border border-primary bg-white text-primary hover:bg-primary/10"
								onClick={handleAddPortfolio}
							>
								<Icon.Portfolio className="mr-3 h-5 w-5" />
								Tambah portofolio
							</Button>
							<hr className="my-4 border-dashed border-stroke" />
						</>
					) : (
						/* otherwise, render empty field message */
						<Section className="mb-4 mt-2 p-3" isForeground>
							<h3 className="mb-4">Portofolio</h3>

							<div className="flex flex-col space-y-2">
								<p className="text-sm text-gray">
									portofolio anda masih kosong, mohon penuhi
									terlebih dahulu.
								</p>
								<Button
									className="w-full border border-dashed border-stroke bg-white text-black-low"
									onClick={handleAddPortfolio}
								>
									Tambah Portofolio
								</Button>
							</div>
						</Section>
					)}

					<Button
						colorScheme="primary"
						disabled={
							form.formState.isSubmitting ||
							!form.formState.isValid
						}
						type="submit"
					>
						<Icon.Complete className="mr-3 h-5 w-5" />
						Simpan Perubahan
					</Button>
				</form>
			</Container>
		</FormProvider>
	)
}
