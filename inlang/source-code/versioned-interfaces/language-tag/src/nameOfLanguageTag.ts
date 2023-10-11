import type { LanguageTag } from "./interface.js"

/**
 * Returns the name of a language tag.
 *
 * @example
 *   nameOfLanguageTag("en") // "English"
 *   nameOfLanguageTag("de") // "Deutsch"
 *   nameOfLanguageTag("zh") // "中文"
 *   nameOfLanguageTag("sk") // "Slovak"
 *   nameOfLanguageTag("pt-BR") // "Portuguese Brazil"
 */
export const nameOfLanguageTag = (languageTag: LanguageTag): string => {
	if (languageTagNames[languageTag] === undefined) {
		console.warn(
			`Unknown language tag: ${languageTag}.\n\nIt might be that the translation is missing. Please add the translation to the library https://inlang.com/marketplace/library.inlang.languageTag.`
		)
	}
	return languageTagNames[languageTag] ?? "undefined"
}

const languageTagNames: Record<LanguageTag, string> = {
	en: "English",
	de: "Deutsch",
	fr: "Français",
	es: "Español",
	it: "Italiano",
	nl: "Nederlands",
	pl: "Polski",
	pt: "Português",
	ru: "Русский",
	tr: "Türkçe",
	zh: "中文",
	sk: "Slovak",
	"pt-BR": "Português Brasileiro",
}
