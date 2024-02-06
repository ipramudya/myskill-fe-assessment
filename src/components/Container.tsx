import { PropsWithChildren } from "react"

export default function Container({ children }: PropsWithChildren) {
	return <main className="mx-auto min-h-dvh w-full md:max-w-5xl">{children}</main>
}
