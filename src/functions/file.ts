export function formatBytes(bytes: number, decimals = 2) {
	if (bytes === 0) return "0 Bytes"

	const KB = 1024
	const dm = decimals < 0 ? 0 : decimals
	const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
	const i = Math.floor(Math.log(bytes) / Math.log(KB))

	return `${parseFloat((bytes / KB ** i).toFixed(dm))} ${sizes[i]}`
}

export function fileToBase64String(file: File): Promise<string> {
	/* create new promise to compute given File into fileReader */
	return new Promise<string>((resolve, reject) => {
		/* create object, allow reading files asynchronously */
		const reader = new FileReader()

		/* whenever reading file successfully, it triggers onLoad method */
		reader.onload = () => {
			if (typeof reader.result === "string") {
				resolve(reader.result.split(",")[1])
			} else {
				reject(new Error("Invalid reader result"))
			}
		}

		/* if an error occour during reading file, throw it here */
		reader.onerror = (error) => {
			reject(error)
		}
		/** Initializing the reading of the file as a data URL (Base64-encoded string)
		 *	by calling readAsDataURL on the FileReader object, passing the File object as a parameter.
		 */
		reader.readAsDataURL(file)
	})
}

type Base64Metadata = {
	filename: string
	mimeType: string
}
export function base64StringToFile(
	base64StringData: string,
	{ filename, mimeType }: Base64Metadata,
) {
	const byteCharacters = atob(base64StringData)
	const byteArrays: Uint8Array[] = []

	/* iterate through byteChar from given base64StringData within atob function */
	for (let offset = 0; offset < byteCharacters.length; offset += 1024) {
		const slice = byteCharacters.slice(offset, offset + 1024)
		const byteNumbers = new Array(slice.length) // placeholder byte of numbers

		for (let i = 0; i < slice.length; i++) {
			byteNumbers[i] = slice.charCodeAt(i)
		}

		const byteArray = new Uint8Array(byteNumbers) // assign inner byteArray for each iterated byte of number
		byteArrays.push(byteArray) // push into main byteOfNumbers
	}

	return new File(byteArrays, filename, { type: mimeType })
}
