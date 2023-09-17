import { derived, writable } from "svelte/store"
import * as messages from "./messages.js"

export const sourceLanguageTag = "en"

const _currentLanguageTag = writable<string>(sourceLanguageTag)

export const currentLanguageTag = derived(_currentLanguageTag, ($tag) => (): string => {
	return $tag
})

export const setCurrentLanguageTag = async (tag: string): Promise<void> => {
	// messages[tag] = module
	_currentLanguageTag.set(tag)
}

export const m = (id: string, params?: Record<string, any>) => {
	switch (id) {
		case "multipleParams":
			return derived(currentLanguageTag, ($tag) => messages.multipleParams($tag, params))
		case "oneParam":
			return derived(currentLanguageTag, ($tag) => messages.oneParam($tag, params))
		default:
			return derived(currentLanguageTag, () => "unknown")
	}
}
