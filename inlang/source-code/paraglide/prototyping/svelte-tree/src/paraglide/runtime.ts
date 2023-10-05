export const sourceLanguageTag = "en"

export const availableLanguageTags = ["en", "de"] as const

export let languageTag = sourceLanguageTag

export const changeLanguageTag = (tag: string): void => {
	languageTag = tag
	for (const listener of changeListeners) {
		listener(tag)
	}
}

const changeListeners = [] as ((tag: string) => void)[]

export const onChangeLanguageTag = (callback: (tag: string) => void): void => {
	changeListeners.push(callback)
}
