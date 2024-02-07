import { isAfter, isBefore } from "date-fns"
import { z } from "zod"

const REQUIRED_ERROR = "*tidak boleh kosong"

export const portfolioFormSchema = z
	.object({
		id: z.string().min(1, REQUIRED_ERROR),
		name: z.string().min(1, REQUIRED_ERROR),
		possition: z.string().min(1, REQUIRED_ERROR),
		company: z.string().min(1, REQUIRED_ERROR),
		startDate: z.string({
			required_error: REQUIRED_ERROR,
		}),
		endDate: z.string({
			required_error: REQUIRED_ERROR,
		}),
		description: z.string().min(1, REQUIRED_ERROR),
	})
	.superRefine((schema, ctx) => {
		/* validate if endDate comes before startDate, should give an error */
		if (isBefore(schema.endDate, schema.startDate)) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				path: ["endDate"],
				message: "*mendahului tanggal mulai",
			})
		}
		/* validate if startDate comes after endDate, should give an error */
		if (isAfter(schema.startDate, schema.endDate)) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				path: ["startDate"],
				message: "*selesai tanggal berakhir",
			})
		}
	})

export const formSchema = z.object({
	name: z.string().min(1, REQUIRED_ERROR),
	possition: z.string().min(1, REQUIRED_ERROR),
	description: z.string().min(1, REQUIRED_ERROR),
	portfolio: portfolioFormSchema.array(),
})

export type FormPayload = z.infer<typeof formSchema>
export type PortfolioPayload = z.infer<typeof portfolioFormSchema>
