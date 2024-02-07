export function formatBytes(bytes: number, decimals = 2) {
	if (bytes === 0) return "0 Bytes"

	const KB = 1024
	const dm = decimals < 0 ? 0 : decimals
	const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
	const i = Math.floor(Math.log(bytes) / Math.log(KB))

	return `${parseFloat((bytes / KB ** i).toFixed(dm))} ${sizes[i]}`
}
