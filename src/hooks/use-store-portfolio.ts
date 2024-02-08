import { base64StringToFile, fileToBase64String } from "@/functions/file"
import { FormPayload } from "@/utils/form-schema"
import { useAtom } from "jotai"
import { atomWithStorage, createJSONStorage } from "jotai/utils"
import { useMemo } from "react"

type CustomFile = {
	base64Data: string
	fileName: string
	mimeType: string
}

type StoredPortfolioData = {
	profile: CustomFile
	background: CustomFile
} & FormPayload

/* initialize local storage, used later to store stringified JSON StoredPortfolioData */
const storage = createJSONStorage<string>(() => localStorage)

/* initialize shared atom state which contain stringified JSON, stored into local storage */
const SessionStoragePortfolioAtom = atomWithStorage<string>("portfolio", "", storage)

export default function useStorePortfolio() {
	const [stringifiedPortfolio, setStringifiedPortfolio] = useAtom(SessionStoragePortfolioAtom)

	/** memoized portfolio values in order to ignore unecesarry rerendering,
	 *   as long as stringifiedPortfolio value does not change
	 */
	const portfolio = useMemo(() => {
		if (stringifiedPortfolio === "") return null

		const { background, profile, ...parsedPortfolio } = JSON.parse(
			stringifiedPortfolio,
		) as StoredPortfolioData

		return {
			...parsedPortfolio,
			/* every read, transform background which stored as base64 string into object File */
			background: base64StringToFile(background.base64Data, {
				filename: background.fileName,
				mimeType: background.mimeType,
			}),
			/* as well as profile, transform it into object File */
			profile: base64StringToFile(profile.base64Data, {
				filename: profile.fileName,
				mimeType: profile.mimeType,
			}),
		}
	}, [stringifiedPortfolio])

	const setPortfolio = async (
		/* exclude profile & background type from StoredPortfolioData type */
		payload: Omit<StoredPortfolioData, "profile" | "background"> & {
			profile: File // re-add back profile type as File
			background: File // re-add back background type as File
		},
	) => {
		/** before storing background & profile file, transform it into Base64 string.
		 * 	Each of these two processes returns promise.
		 */
		const backgroundAsBase64Promise = fileToBase64String(payload.background)
		const profileAsBase64Promise = fileToBase64String(payload.profile)

		/* preventing waterfall promise called, run concurrently using Promise.all */
		const [backgroundAsBase64, profileAsBase64] = await Promise.all([
			backgroundAsBase64Promise,
			profileAsBase64Promise,
		])

		/* we need to store all payload, transformed file base64 string, filename, and mimetype of those files */
		const portfolioData: StoredPortfolioData = {
			...payload,
			profile: {
				base64Data: profileAsBase64,
				fileName: payload.profile.name,
				mimeType: payload.profile.type,
			},
			background: {
				base64Data: backgroundAsBase64,
				fileName: payload.background.name,
				mimeType: payload.background.type,
			},
		}

		setStringifiedPortfolio(JSON.stringify(portfolioData))
	}

	return { portfolio, setPortfolio }
}
