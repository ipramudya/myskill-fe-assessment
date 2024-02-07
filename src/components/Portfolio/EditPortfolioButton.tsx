"use client"

import useStorePortfolio from "@/hooks/use-store-portfolio"
import { useRouter } from "next/navigation"
import Button from "../Button"
import Icon from "../Icon"

export default function EditPortfolioButton() {
	const router = useRouter()
	const { portfolio } = useStorePortfolio()

	return (
		<Button
			size="sm"
			colorScheme="warning"
			role="link"
			onClick={() => router.push("/portfolio/edit")}
		>
			<Icon.Edit className="mr-2 hidden text-white md:block" />
			{portfolio ? "Tambahkan" : "Perbarui"}
		</Button>
	)
}
