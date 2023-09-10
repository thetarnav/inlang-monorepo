import type { LanguageTag } from "@inlang/sdk"
import * as messages from "./messages"

export const sourceLanguageTag = "en"

let _currentLanguageTag: LanguageTag = sourceLanguageTag

export const currentLanguageTag = (): LanguageTag => {
	return _currentLanguageTag
}

export const setCurrentLanguageTag = async (tag: LanguageTag): Promise<void> => {
	_currentLanguageTag = tag
}

export const m = (id: string, params?: Record<string, any>) => {
	// @ts-ignore
	return messages[id](params)
}
