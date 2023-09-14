import type { LanguageTag } from "@inlang/sdk"
import { derived, writable } from "svelte/store"
import * as en from "./resources/en"

export const sourceLanguageTag = "en"

const _currentLanguageTag = writable<LanguageTag>(sourceLanguageTag)

// the ids of the messages that have been rendered to the user
// and should be imported once the user switches to another language
const _renderedMessageIds: string[] = []

// const _importedInitialMessages = false

const messages: any = {}

export const currentLanguageTag = derived(_currentLanguageTag, ($tag) => (): LanguageTag => {
	return $tag
})

export const setCurrentLanguageTag = async (tag: LanguageTag): Promise<void> => {
	// const module = await import(`./resources/${tag}.ts`)
	// messages[tag] = module
	_currentLanguageTag.set(tag)
}

export const m = derived(
	_currentLanguageTag,
	($tag) => (id: string, params?: Record<string, any>) => {
		_renderedMessageIds.push(id)
		return en["multipleParams"](params)
	},
)