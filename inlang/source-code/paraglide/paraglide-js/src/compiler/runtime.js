import * as messages from "./messages.js"

export const sourceLanguageTag = "en"

/**
 * @type {import("@inlang/sdk").LanguageTag}
 */
let _currentLanguageTag

/**
 *
 * @returns {import("@inlang/sdk").LanguageTag}
 */
export const currentLanguageTag = () => {
	return _currentLanguageTag
}

/**
 *
 * @param {import("@inlang/sdk").LanguageTag} tag
 */
export const setCurrentLanguageTag = async (tag) => {
	_currentLanguageTag = tag
}

/**
 * Lookup function for a message.
 *
 * @param {keyof typeof messages} id
 * @param {Record<string, any>} params
 * @returns {string}
 */
export const m = (id, params) => {
	if (_currentLanguageTag === undefined) throw new Error("Language tag is not set.")
	if (messages[id] === undefined) {
		return id
	}
	// @ts-ignore
	return messages[id](params)?.[_currentLanguageTag] ?? id
}
