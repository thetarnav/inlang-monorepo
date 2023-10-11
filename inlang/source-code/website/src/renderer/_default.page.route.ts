import type { PageContextRenderer } from "./types.js"
import { sourceLanguageTag, availableLanguageTags } from "@inlang/paraglide-js"

export { onBeforeRoute }

function onBeforeRoute(pageContext: PageContextRenderer) {
	const { urlWithoutLocale, languageTag } = extractLocale(pageContext.urlOriginal)
	return {
		pageContext: {
			// We make `languageTag` available as `pageContext.languageTag`. We can then use https://vite-plugin-ssr.com/pageContext-anywhere to access pageContext.locale in any React/Vue component.
			languageTag,
			// We overwrite the original URL
			urlOriginal: urlWithoutLocale,
		},
	}
}

export function extractLocale(url: string) {
	const urlPaths = url.split("/")

	let languageTag
	let urlWithoutLocale
	// We remove the URL locale, for example `/de-DE/about` => `/about`
	const firstPath = urlPaths[1]!
	if (availableLanguageTags.filter((locale) => locale !== sourceLanguageTag).includes(firstPath)) {
		languageTag = firstPath
		urlWithoutLocale = "/" + urlPaths.slice(2).join("/")
	} else {
		languageTag = sourceLanguageTag
		urlWithoutLocale = url
	}

	return { languageTag, urlWithoutLocale }
}
