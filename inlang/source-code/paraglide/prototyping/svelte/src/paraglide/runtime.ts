import type { LanguageTag } from "@inlang/sdk"

export const sourceLanguageTag = "en"

const messages: any = {}

let _currentLanguageTag: LanguageTag = sourceLanguageTag

export const currentLanguageTag = (): LanguageTag => {
	return _currentLanguageTag
}

export const setCurrentLanguageTag = async (tag: LanguageTag): Promise<void> => {
	const _messages = await import(`./messages/${tag}.ts`)
	messages[tag] = _messages
	_currentLanguageTag = tag
}

/**
 * Lookup function for a message.
 */
export const m = (id: string, params: Record<string, any>): string => {
	if (_currentLanguageTag === undefined) throw new Error("Language tag is not set.")
	return messages[_currentLanguageTag]?.[id]?.(params) ?? id
}
