import { availableLanguageTags, type AvailableLanguageTag } from "$paraglide/runtime.js"

export function isLanguageTag(thing: any): thing is AvailableLanguageTag {
	return availableLanguageTags.includes(thing)
}
