import usePortfolioCount from "@/hooks/use-portfolio-count"
import Button from "../Button"
import { Input, Label, Textarea } from "../Form"
import Icon from "../Icon"
import Section from "../Section"

export default function AddPortfolioForm() {
	const { decPortfolioCount } = usePortfolioCount()

	const onDecreasePortfolioCount = () => {
		console.log("shud run")
		decPortfolioCount()
	}

	return (
		<Section className="my-2 min-h-[169px] px-3 pb-4 pt-3" isForeground>
			<div className="flex items-center justify-between">
				<h3>Portofolio</h3>
				<div className="flex items-center space-x-2">
					<Button size="sm" isIconButton className="bg-white">
						<Icon.Maximize className="h-5 w-5 text-black-low" />
					</Button>
					<Button
						size="sm"
						isIconButton
						colorScheme="danger"
						onClick={onDecreasePortfolioCount}
					>
						<Icon.Delete className="h-5 w-5" />
					</Button>
				</div>
			</div>

			<div className="mt-4 flex flex-col space-y-4">
				<div className="flex flex-col space-y-2">
					<Label htmlFor="name">Nama</Label>
					<Input id="name" placeholder="masukan nama portofolio..." />
				</div>

				<div className="flex flex-col space-y-2">
					<Label htmlFor="possition">Posisi</Label>
					<Input
						id="possition"
						placeholder="masukan posisi/jabatan..."
					/>
				</div>

				<div className="flex flex-col space-y-2">
					<Label htmlFor="company">Perusahaan</Label>
					<Input
						id="company"
						placeholder="masukan nama perusahaan..."
					/>
				</div>

				<div className="grid grid-cols-2 gap-2">
					<div className="flex flex-col space-y-2">
						<Label htmlFor="startDate">Tanggal Mulai</Label>
						<Input id="startDate" type="date" />
					</div>
					<div className="flex flex-col space-y-2">
						<Label htmlFor="endDate">Tanggal Berakhir</Label>
						<Input id="endDate" type="date" />
					</div>
				</div>

				<div className="flex flex-col space-y-2">
					<Label htmlFor="description">Deskripsi</Label>
					<Textarea
						id="description"
						placeholder="masukan deskripsi..."
					/>
				</div>
			</div>
		</Section>
	)
}
