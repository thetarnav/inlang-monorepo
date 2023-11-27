import ParaglideNextAdapter from "@/ParaglideAdapterNext"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps, router }: AppProps) {
	return (
		<ParaglideNextAdapter>
			<Component {...pageProps} />
		</ParaglideNextAdapter>
	)
}
