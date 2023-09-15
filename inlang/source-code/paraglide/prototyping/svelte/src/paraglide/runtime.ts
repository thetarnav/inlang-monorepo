import type { LanguageTag } from "@inlang/sdk"
import { derived, writable } from "svelte/store"
import * as en from "./resources/en"
import * as de from "./resources/de"

export const sourceLanguageTag = "en"

const _currentLanguageTag = writable<LanguageTag>(sourceLanguageTag)

export const currentLanguageTag = derived(_currentLanguageTag, ($tag) => (): LanguageTag => {
	return $tag
})

export const setCurrentLanguageTag = async (tag: LanguageTag): Promise<void> => {
	// messages[tag] = module
	_currentLanguageTag.set(tag)
}

export const m = derived([_currentLanguageTag], ([$tag]) => (id: string, params?: Record<string, any>) => {
	switch ($tag) {
		case "en":
			return en["multipleParams"](params)
		case "de":
			return de["multipleParams"](params)
		default:
			return `Unknown language tag ${$tag}`
	}
})