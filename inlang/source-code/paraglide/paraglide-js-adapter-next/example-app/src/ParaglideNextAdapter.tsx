import { setLanguageTag } from "@/paraglide/runtime"
import { headers } from "next/headers"

setLanguageTag(() => {
	return headers().get("x-language-tag") as any
})

export default function ParaglideNextAdapter(props: { children: React.ReactNode }) {
	return <>{props.children}</>
}
