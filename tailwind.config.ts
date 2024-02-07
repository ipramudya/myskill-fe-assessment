import type { Config } from "tailwindcss"
import colors from "tailwindcss/colors"

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			transparent: colors.transparent,
			white: colors.white,
			primary: "#09898C",
			foreground: "#f6f6f6",
			danger: "#ef4565",
			warning: "#f9bc60",
			stroke: "#e4e4e7",
			gray: "#71717a",
			black: {
				low: "#2e2e2e",
				high: "#181818",
			},
		},
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
}
export default config
