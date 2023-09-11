import type { LanguageTag } from "@inlang/sdk"
import * as messages from "./messages.js"

export const sourceLanguageTag = "en"

let _currentLanguageTag: LanguageTag

export const currentLanguageTag = (): LanguageTag => {
	return _currentLanguageTag
}

export const setCurrentLanguageTag = async (tag: LanguageTag) => {
	_currentLanguageTag = tag
}

/**
 * Lookup function for a message.
 */
export const m = (id: keyof typeof messages, params: Record<string, any>): string => {
	if (_currentLanguageTag === undefined) throw new Error("Language tag is not set.")
	// @ts-ignore
	if (messages[id] === undefined) {
		return id
	}
	// @ts-ignore
	return messages[id](params)?.[_currentLanguageTag] ?? id
}
