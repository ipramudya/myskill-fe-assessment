import { atom, useAtom } from "jotai"
import { useCallback } from "react"

const PortfolioCountAtom = atom<number | null>(null)

export default function usePortfolioCount() {
	const [value, setValue] = useAtom(PortfolioCountAtom)

	const incPortfolioCount = useCallback(() => {
		setValue((prev) => (prev !== null ? prev + 1 : 1))
	}, [setValue])

	const decPortfolioCount = useCallback(() => {
		setValue((prev) => (prev === 1 || prev === null ? null : prev - 1))
	}, [setValue])

	return {
		portfolioCount: value,
		incPortfolioCount,
		decPortfolioCount,
	}
}
