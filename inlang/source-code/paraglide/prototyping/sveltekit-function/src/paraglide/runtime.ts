import type { LanguageTag } from "@inlang/sdk"
import { derived, writable } from "svelte/store"

export const sourceLanguageTag = "en"

const _currentLanguageTag = writable<LanguageTag>(sourceLanguageTag)

export const currentLanguageTag = derived(_currentLanguageTag, ($tag) => $tag)

export const setCurrentLanguageTag = async (tag: LanguageTag) => {
	_currentLanguageTag.set(tag)
}

// export const m = derived(currentLanguageTag, ($tag) => {
// 	return (id: string, params?: Record<string, any>) => {
// 		// @ts-ignore
// 		const res = messages[id](params)[$tag]
// 		return res
// 	}
// })
