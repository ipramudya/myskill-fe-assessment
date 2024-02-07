import { atom, useAtom } from "jotai"

const MinimizedIndexesAtom = atom<null | number[]>(null)

export default function useMinimizedPortfolioForm() {
	const [value, setValue] = useAtom(MinimizedIndexesAtom)

	const setMinimizedIndex = (index: number) => {
		setValue((prev) => {
			/* just add into array if there's no index exist */
			if (!prev) {
				return [index]
			}

			if (prev.includes(index)) {
				/* filtering array to exclude given index from current state, preventing duplication */
				const filtered = prev.filter((x) => x !== index)

				/* once the length is zero, set it to null. otherwise, just return filtered array */
				return filtered.length === 0 ? null : filtered
			}

			/* merge given index into existing array-state */
			return [...prev, index]
		})
	}

	return {
		minimizedIndex: value,
		setMinimizedIndex,
	}
}
