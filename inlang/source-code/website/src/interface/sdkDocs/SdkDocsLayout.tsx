import Footer from "#src/pages/index/Footer.jsx"
import type { JSXElement } from "solid-js"
import SdkDocsHeader from "./SdkDocsHeader.jsx"

const SdkDocsLayout = (props: { children: JSXElement }) => {
	return (
		<div class="bg-surface-50 min-h-screen">
			<SdkDocsHeader />
			<div class="w-full px-4 min-h-[calc(100vh_-_107px_-_480px)]">
				<div class="max-w-5xl mx-auto">{props.children}</div>
			</div>
			<Footer />
		</div>
	)
}

export default SdkDocsLayout
