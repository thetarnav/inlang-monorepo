import { derived, writable, get } from "svelte/store"

export const sourceLanguageTag = "en"

export const languageTags = ["en", "de"]

const _currentLanguageTag = writable<string>(sourceLanguageTag)

/**
 * Used as fallback while messages are importing.
 */
let previousLanguageTag: string | undefined = undefined

/**
 * Pending imports are stored to trigger re-renderings.
 */
const pendingImports = writable<Record<string, Promise<any>>>({})

export const currentLanguageTag = derived(_currentLanguageTag, ($tag) => {
	return $tag
})

export const setCurrentLanguageTag = (tag: string): void => {
	previousLanguageTag = get(currentLanguageTag)
	_currentLanguageTag.set(tag)
}

const messages: Record<string, Record<string, (params: any) => string>> = {}

export const m = derived([currentLanguageTag, pendingImports], ([$tag, $pendingPromises]) => {
	return (id: string, params: Record<string, any>) => {
		// message exists
		if (messages[id]?.[$tag]) {
			return messages[id][$tag](params)
		}
		// message doesn't exist and hasn't been imported yet
		else if ($pendingPromises[id] === undefined) {
			importMessage(id, $tag)
		}
		// message doesn't exist and is being imported, fallback to previous language tag
		else if (messages[id]?.[previousLanguageTag] !== undefined) {
			return messages[id][previousLanguageTag](params)
		}
		// message doesn't exist at all
		return id
	}
})

const importMessage = async (id: string, tag: string) => {
	pendingImports.update(($pendingPromises) => {
		$pendingPromises[id] = import(`./resources/${tag}/${id}.ts`).then((module) => {
			if (messages[id] === undefined) {
				messages[id] = {}
			}
			messages[id][tag] = module.default
			pendingImports.update(($pendingPromises) => {
				delete $pendingPromises[id]
				return $pendingPromises
			})
		})
		return $pendingPromises
	})
}

export const preImportMessages = () => {
	const promises: Promise<any>[] = []
	const ids = ["multipleParams", "onlyText", "oneParam"]
	for (const id of ids) {
		for (const tag of languageTags) {
			promises.push(import(`./resources/${tag}/${id}.ts`))
		}
	}
	return Promise.all(promises)
}
