import { derived, writable } from "svelte/store"
import * as messages from "./messages"

export const sourceLanguageTag = "en"

const _currentLanguageTag = writable<string>(sourceLanguageTag)

export const currentLanguageTag = derived(_currentLanguageTag, ($tag) => (): string => {
	return $tag
})

export const setCurrentLanguageTag = async (tag: string): Promise<void> => {
	// messages[tag] = module
	_currentLanguageTag.set(tag)
}

export const m = derived(
	[_currentLanguageTag],
	([$tag]) =>
		(id: string, params?: Record<string, any>) => {
			switch (id) {
				// case "x":
				// return messages["x"]($tag)(params)
				case "multipleParams":
					return messages["multipleParams"]($tag)(params)
			}

			// return messages["x"]($tag)(params)
		},
)
