import type { LanguageTag } from "@inlang/sdk"

export const sourceLanguageTag = "en"

let _currentLanguageTag: LanguageTag = sourceLanguageTag

export const currentLanguageTag = (): LanguageTag => {
	return _currentLanguageTag
}

export const setCurrentLanguageTag = (tag: LanguageTag) => {
	_currentLanguageTag = tag
}

/**
 * Lookup function for a message.
 */
export const m = (id: keyof (typeof messages)["en"], params: Record<string, any>): string => {
	if (_currentLanguageTag === undefined) throw new Error("Language tag is not set.")
	// @ts-ignore
	if (messages[_currentLanguageTag]?.[id] === undefined) {
		return id
	}
	// @ts-ignore
	return messages[sourceLanguageTag][id](params)
}

const messages = {
	en: {
		onlyText: () => "Login",
		oneParam: (params: { name: string }) => `Hello ${params.name}!`,
		multipleParams: (params: { name: string; count: number }) =>
			`Hello ${params.name}! You have ${params.count} messages.`,
		// TODO implement multiple variants
		// TODO beneath is an example of how an implementation could look like
		// multipleVariants: (params: { name: string }) => {
		// 	const selectorOrdering = ["operatingSystem", "weekday"]
		// 	const variants = [
		// 		{
		// 			match: { operatingSystem: "mac" },
		// 			pattern: `Hello ${params.name}! You are on a mac.`,
		// 		},
		// 		{
		// 			match: { operatingSystem: "windows" },
		// 			pattern: `Hello ${params.name}! You are on windows.`,
		// 		},
		// 		{
		// 			match: { operatingSystem: "windows", weekday: "monday" },
		// 			pattern: `Hello ${params.name}! It's a beautiful Monday. PS you are on windows.`,
		// 		},
		// 		{
		// 			match: { weekday: "monday" },
		// 			pattern: `Hello ${params.name}! It's a beautiful Monday!`,
		// 		},
		// 	]
		// 	return matchVariant(selectorOrdering, variants)
		// },
	},
}
