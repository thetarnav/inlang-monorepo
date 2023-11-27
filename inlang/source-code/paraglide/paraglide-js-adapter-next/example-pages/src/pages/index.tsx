import * as m from "@/paraglide/messages"
import { languageTag } from "@/paraglide/runtime"
import Link from "next/link"
import { useRouter } from "next/router"

export default function Home() {
	const router = useRouter()

	return (
		<main>
			<p>{m.greeting({ name: "Samuel", count: 5 })}</p>
			<p>{m.currentLanguageTag({ languageTag: languageTag() })}</p>

			{/* Set the language using the `<Link/>` component */}
			<Link href="/" locale="de">
				change language to "de"
			</Link>

			{/* Set the language using a click handler */}
			<button onClick={() => router.push("/", "/", { locale: "en" })}>
				change language to "en"
			</button>
		</main>
	)
}
