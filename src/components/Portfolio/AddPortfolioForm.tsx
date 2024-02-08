import useMinimizedPortfolioForm from "@/hooks/use-minimized-portfolio-form"
import { FormPayload } from "@/utils/form-schema"
import { FieldError, useFieldArray, useFormContext } from "react-hook-form"
import Button from "../Button"
import { ErrorMessage, Input, Label, Textarea } from "../Form"
import Icon from "../Icon"
import Section from "../Section"

type PortfolioPayloadKeys = keyof FormPayload["portfolio"][number]

interface Props {
	/** beacause this component is dynamic, we need to provide index from iteration
	 * as identifier to add/remove this portfolio from fieldArray
	 */
	index: number
	/* ID is used to indicate whether current form is minimized or not, by storing it into minimized-array */
	id: string
}

export default function AddPortfolioForm({ index, id }: Props) {
	const { control, formState, trigger, register, watch } = useFormContext<FormPayload>()
	const portfolioField = useFieldArray<FormPayload>({
		control,
		name: "portfolio",
	})

	const { setMinimizedIndex } = useMinimizedPortfolioForm()

	const checkEmptyField = (): boolean => {
		const portfolioField = watch(`portfolio.${index}`)

		let isEmpty = false
		const keys = Object.keys(portfolioField) as (keyof typeof portfolioField)[]

		/* iterate over fields to check whether existing values are equal to emptystring */
		let key: keyof typeof portfolioField
		for (key of keys) {
			if (portfolioField[key] === "") {
				isEmpty = true
				break
			}
		}

		return isEmpty
	}

	/* get portfolio field error state by providing portfolio's key as argument  */
	const getPortfolioError = (key: PortfolioPayloadKeys): FieldError | null => {
		/** check whether portfolio fields already registered on the formState context, also the index should match.
		 *	if not, return null, otherwise return that state
		 */
		return formState.errors.portfolio?.[index]?.[key] || null
	}

	const handleDeletePortfolio = () => {
		portfolioField.remove(index)
		setMinimizedIndex(id)
		trigger()
	}

	const handleMinimizeForm = () => {
		setMinimizedIndex(id)
	}

	return (
		<Section className="my-2 min-h-[169px] px-3 pb-4 pt-3" isForeground>
			<div className="flex items-center justify-between">
				<h3>Portofolio #{index + 1} </h3>
				<div className="flex items-center space-x-2">
					<Button
						size="sm"
						isIconButton
						className="bg-white"
						disabled={Boolean(checkEmptyField())}
						onClick={handleMinimizeForm}
					>
						<Icon.Maximize className="text-black-low md:h-5 md:w-5" />
					</Button>
					<Button
						size="sm"
						isIconButton
						colorScheme="danger"
						onClick={handleDeletePortfolio}
					>
						<Icon.Delete className="md:h-5 md:w-5" />
					</Button>
				</div>
			</div>

			<div className="mt-4 flex flex-col space-y-4">
				<div className="flex flex-col space-y-2">
					<Label htmlFor="portfolio-name" isError={Boolean(getPortfolioError("name"))}>
						Nama
					</Label>
					<Input
						id="portfolio-name"
						placeholder="masukan nama portofolio..."
						isError={Boolean(getPortfolioError("name"))}
						{...register(`portfolio.${index}.name`)}
					/>
					{Boolean(getPortfolioError("name")) && (
						<ErrorMessage>{getPortfolioError("name")?.message}</ErrorMessage>
					)}
				</div>

				<div className="flex flex-col space-y-2">
					<Label
						htmlFor="portfolio-possition"
						isError={Boolean(getPortfolioError("possition"))}
					>
						Posisi
					</Label>
					<Input
						id="portfolio-possition"
						placeholder="masukan posisi/jabatan..."
						isError={Boolean(getPortfolioError("possition"))}
						{...register(`portfolio.${index}.possition`)}
					/>
					{Boolean(getPortfolioError("possition")) && (
						<ErrorMessage>{getPortfolioError("possition")?.message}</ErrorMessage>
					)}
				</div>

				<div className="flex flex-col space-y-2">
					<Label
						htmlFor="portfolio-company"
						isError={Boolean(getPortfolioError("company"))}
					>
						Perusahaan
					</Label>
					<Input
						id="portfolio-company"
						placeholder="masukan nama perusahaan..."
						isError={Boolean(getPortfolioError("company"))}
						{...register(`portfolio.${index}.company`)}
					/>
					{Boolean(getPortfolioError("company")) && (
						<ErrorMessage>{getPortfolioError("company")?.message}</ErrorMessage>
					)}
				</div>

				<div className="grid grid-cols-2 gap-2">
					<div className="flex flex-col space-y-2">
						<Label
							htmlFor="portfolio-startDate"
							isError={Boolean(getPortfolioError("startDate"))}
						>
							Tanggal Mulai
						</Label>
						<Input
							id="portfolio-startDate"
							type="date"
							isError={Boolean(getPortfolioError("startDate"))}
							{...register(`portfolio.${index}.startDate`)}
						/>
						{Boolean(getPortfolioError("startDate")) && (
							<ErrorMessage>{getPortfolioError("startDate")?.message}</ErrorMessage>
						)}
					</div>
					<div className="flex flex-col space-y-2">
						<Label
							htmlFor="portfolio-endDate"
							isError={Boolean(getPortfolioError("endDate"))}
						>
							Tanggal Berakhir
						</Label>
						<Input
							id="portfolio-endDate"
							type="date"
							isError={Boolean(getPortfolioError("endDate"))}
							{...register(`portfolio.${index}.endDate`)}
						/>
						{Boolean(getPortfolioError("endDate")) && (
							<ErrorMessage>{getPortfolioError("endDate")?.message}</ErrorMessage>
						)}
					</div>
				</div>

				<div className="flex flex-col space-y-2">
					<Label
						htmlFor="portfolio-description"
						isError={Boolean(getPortfolioError("description"))}
					>
						Deskripsi
					</Label>
					<Textarea
						id="portfolio-description"
						placeholder="masukan deskripsi..."
						isError={Boolean(getPortfolioError("description"))}
						{...register(`portfolio.${index}.description`)}
					/>
					{Boolean(getPortfolioError("description")) && (
						<ErrorMessage>{getPortfolioError("description")?.message}</ErrorMessage>
					)}
				</div>
			</div>
		</Section>
	)
}
