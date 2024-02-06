import Container from "@/components/Container"
import { PropsWithChildren } from "react"

/* root layout for portfolio page, including its nested route (edit portfolio page) */
export default function PortfolioLayout({ children }: PropsWithChildren) {
	return <Container>{children}</Container>
}
