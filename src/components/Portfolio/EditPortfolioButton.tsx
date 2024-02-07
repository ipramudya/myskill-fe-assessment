"use client"

import { useRouter } from "next/navigation"
import Button from "../Button"
import Icon from "../Icon"

export default function EditPortfolioButton() {
	const router = useRouter()

	return (
		<Button
			size="sm"
			colorScheme="warning"
			role="link"
			onClick={() => router.push("/portfolio/edit")}
		>
			<Icon.Edit className="mr-2 hidden text-white md:block" />
			Perbarui
		</Button>
	)
}
