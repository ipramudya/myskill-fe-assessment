import { PropsWithChildren } from "react"

export default function ErrorMessage({ children }: PropsWithChildren) {
	return <p className="text-xs text-danger">{children}</p>
}
