import { useRouter } from "next/router"
import { AvailableLanguageTag, setLanguageTag } from "./paraglide/runtime"

export default function ParaglideNextAdapter(props: { children: React.ReactNode }) {
	const router = useRouter()
	setLanguageTag(router.locale as AvailableLanguageTag)
	return <>{props.children}</>
}
