export const sourceLanguageTag = "en"

let _currentLanguageTag = sourceLanguageTag

export const languageTags = ["en", "de"] as const

export const currentLanguageTag = () => _currentLanguageTag

export const setCurrentLanguageTag = (tag: string): void => {
	_currentLanguageTag = tag
	for (const listener of changeListeners) {
		listener(tag)
	}
}

const changeListeners = [] as ((tag: string) => void)[]

export const onSetLanguageTag = (callback: (tag: string) => void): void => {
	changeListeners.push(callback)
}
