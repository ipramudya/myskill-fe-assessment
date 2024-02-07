import { atom, useAtom } from "jotai"

const MinimizedIndexesAtom = atom<null | string[]>(null)

export default function useMinimizedPortfolioForm() {
	const [value, setValue] = useAtom(MinimizedIndexesAtom)

	const setMinimizedIndex = (id: string) => {
		setValue((prev) => {
			/* just add into array if there's no index exist */
			if (!prev) {
				return [id]
			}

			if (prev.includes(id)) {
				/* filtering array to exclude given index from current state, preventing duplication */
				const filtered = prev.filter((x) => x !== id)

				/* once the length is zero, set it to null. otherwise, just return filtered array */
				return filtered.length === 0 ? null : filtered
			}

			/* merge given index into existing array-state */
			return [...prev, id]
		})
	}

	return {
		minimizedIndex: value,
		setMinimizedIndex,
	}
}
