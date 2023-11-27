import type { Metadata } from "next"
import ParaglideNextAdapter from "@/ParaglideNextAdapter"
import { languageTag, availableLanguageTags } from "@/paraglide/runtime"

export async function generateStaticParams() {
	return availableLanguageTags.map((lang) => ({ lang }))
}

export const metadata: Metadata = {
	title: "NextJS Paraglide Example",
	description: "Learn how to use Paraglide with NextJS",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<ParaglideNextAdapter>
			<html lang={languageTag()}>
				<body>{children}</body>
			</html>
		</ParaglideNextAdapter>
	)
}
