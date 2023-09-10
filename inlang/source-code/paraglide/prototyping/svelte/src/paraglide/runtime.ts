import type { LanguageTag } from "@inlang/sdk"

export const sourceLanguageTag = "en"

let _currentLanguageTag: LanguageTag = sourceLanguageTag

// the ids of the messages that have been rendered to the user
// and should be imported once the user switches to another language
const _renderedMessageIds: string[] = []

let _importedInitialMessages = false

const messages: any = {}

export const currentLanguageTag = (): LanguageTag => {
	return _currentLanguageTag
}

export const setCurrentLanguageTag = async (tag: LanguageTag): Promise<void> => {
	if (_importedInitialMessages === false) {
		console.log("initial load")
		const module = await import(`./resources/${tag}.ts`)
		messages[tag] = module
		_importedInitialMessages = true
	} else {
		console.log("re-load")
		messages[tag] = {}
		// import messages that have been rendered to the user
		// and should be imported once the user switches to another language
		for (const id of _renderedMessageIds) {
			const module = await import(`./resources/${tag}/${id}.ts`)
			messages[tag][id] = module.default
		}
	}
	_currentLanguageTag = tag
}

export const m = (id: string, params?: Record<string, any>) => {
	_renderedMessageIds.push(id)
	return messages[_currentLanguageTag][id](params)
}