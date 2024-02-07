import { format, parseISO } from "date-fns"
import { id } from "date-fns/locale"

export function formatDate(startDate: string, endDate: string) {
	const start = parseISO(startDate)
	const end = parseISO(endDate)

	const isSameMonth = start.getMonth() === end.getMonth()

	const withLocale = (d: Date) => {
		return `${format(d, "MMMM yyyy", { locale: id })}`
	}

	if (isSameMonth) {
		return withLocale(end)
	}

	return `${withLocale(start)}-${withLocale(end)}`
}
