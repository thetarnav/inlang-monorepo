import { derived, writable } from "svelte/store"

export const sourceLanguageTag = "en"

export const languageTags = ["en", "de"] as const

const _currentLanguageTag = writable<string>(sourceLanguageTag)

export const currentLanguageTag = derived(_currentLanguageTag, ($tag) => {
	return $tag
})

export const setCurrentLanguageTag = (tag: string): void => {
	console.log({ _currentLanguageTag, tag })
	window.location.href = "/en"
}

