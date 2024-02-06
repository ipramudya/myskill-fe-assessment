import Container from "@/components/Container"
import Input from "@/components/Input"
import Label from "@/components/Label"
import Section from "@/components/Section"
import Textarea from "@/components/Textarea"

export default function EditPortfolioPage() {
	return (
		<Container>
			<div className="flex flex-col p-3">
				<div className="my-2">
					<h1 className="text-xl">Edit Portfolio</h1>
				</div>

				<Section className="my-2 min-h-[169px] p-2" isForeground>
					<h3>Background Image</h3>
				</Section>

				<Section className="my-2 min-h-[169px] p-2" isForeground>
					<h3>Profile Image</h3>
				</Section>

				<Section
					className="my-2 min-h-[169px] px-2 pb-4 pt-2"
					isForeground
				>
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
			</div>
		</Container>
	)
}
