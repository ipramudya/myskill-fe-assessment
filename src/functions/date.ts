import { format } from "date-fns"
import { id } from "date-fns/locale"

/** wrap given date and formatter itself
 * to return formatted date in bahasa as string
 */
export default function formatDate(
	date: string | Date,
	formatter: string,
): string {
	if (!date) return ""

	let d
	if (typeof date === "string") {
		d = new Date(date)
	} else {
		d = date
	}

	return format(d, formatter, { locale: id })
}
