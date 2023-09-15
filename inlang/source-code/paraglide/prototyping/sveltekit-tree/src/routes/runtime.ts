import { derived, writable } from "svelte/store"

export const sourceLanguageTag = "en"

const _currentLanguageTag = writable<string>(sourceLanguageTag)

export const currentLanguageTag = derived(_currentLanguageTag, ($tag) => (): string => {
	return $tag
})

export const setCurrentLanguageTag = async (tag: string): Promise<void> => {
	// messages[tag] = module
	_currentLanguageTag.set(tag)
}
