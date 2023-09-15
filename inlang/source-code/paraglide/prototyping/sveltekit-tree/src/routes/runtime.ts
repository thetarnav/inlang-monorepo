import { derived, writable } from "svelte/store"

export const sourceLanguageTag = "en"

const _currentLanguageTag = writable<string>(sourceLanguageTag)

export const currentLanguageTag = derived(_currentLanguageTag, ($tag) => $tag)

export const setCurrentLanguageTag = (tag: string): void => {
	_currentLanguageTag.set(tag)
}
